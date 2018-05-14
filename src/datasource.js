var DEFAULT = '* select *';

export class HttpsqlDatasource {

	constructor(instanceSettings, $q, backendSrv, templateSrv) {
		this.type = instanceSettings.type;
		this.url = instanceSettings.url;
		this.name = instanceSettings.name;
		this.q = $q;
		this.backendSrv = backendSrv;
		this.templateSrv = templateSrv;
		this.withCredentials = instanceSettings.withCredentials;
		this.headers = {'Content-Type': 'application/json'};
		if (typeof instanceSettings.basicAuth === 'string' && instanceSettings.basicAuth.length > 0) 
			this.headers['Authorization'] = instanceSettings.basicAuth;

		this.metricParamList = {};
	}

	query(options) {
		var period = {
			from: options.range && options.range.from && new Date(options.range.from).getTime(),
			to: options.range && options.range.to && new Date(options.range.to).getTime()
		}
		
		var target_list = options.targets.filter((target) => target.alias && target.alias != DEFAULT && target.metric && target.metric != DEFAULT && !target.hide);
		if (target_list.length == 0)	
			return Promise.resolve({data: []});

		
		let url_list = target_list.map(function (target) {
			['from', 'to'].forEach(function (param) {
				target[param] = target[param] || period[param];
				if (target.param_list.indexOf(param) == -1)
					target.param_list.push(param);
			})
			var params = target.param_list.map((p) => p + '=' + (target.params[p] || '')).join('&') || '';
			return `/${target.alias}/${target.metric}?${params}&table=t&json`;
		});

		var self = this;		
		var scope = url_list.map((url) => this.doRequest(url));
	
		return Promise.all(scope).then(function (results) {
			var data =  [];
			
			results.forEach(function (result, i) {
				var res = result.data || [];
				if (res.length == 0)
					return;
				
				var target = target_list[i];
				var columns = Object.keys(res[0]);

				if (target.datatype == 'table') {
					data.push({
						columns: columns.map((c) => new Object({text: c, type: c.indexOf('time') != -1 ? 'time' : 'string'})),
						rows: res.map((e, i) => columns.map((c) => res[i][c])),
						type: 'table'
					})
				} else {
					data.push({
						target: target.label || `${target.alias}/${target.metric}`,
						rows: res.map((e, i) => columns.map((c) => res[i][c])),
						type: 'timeserie'
					})
				}
					
			});

			return Promise.resolve({data});
		})
	
	}

	testDatasource() {
		return this.doRequest('/')
			.then(res => res.status == 200 ? {status: 'success', message: 'OK', title: 'Success'} : {status: 'error', message: 'Fail', title: 'Error'});
	}

	getAliasList () {
		return this.doRequest('/').then((res) => res.data);
	}

	getMetricList(alias) {
		if (alias == DEFAULT)
			return Promise.resolve([]);

		var self = this;
		return this.doRequest('/' + alias)
			.then(function (res) {
				var metrics = res.data;
				for (var metric in metrics) {
					if (!self.metricParamList[metric]) {
						var desc = metrics[metric] || '';
						self.metricParamList[metric] = desc.substring(desc.indexOf(':') + 1, desc.indexOf('.')).split(',').map((e) => e.trim()).sort();
					}
						
				}
				return Object.keys(metrics);
			});
	}

	getMetricParamList(metric) {
		return this.metricParamList[metric] || [];
	}

	doRequest(url) {
		var options = {
			url: this.url + url,
			withCredentials: this.withCredentials,
			headers: this.headers,
			method: 'GET'
		}
		
		return this.backendSrv.datasourceRequest(options);
	}
}
