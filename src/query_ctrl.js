import {QueryCtrl} from 'app/plugins/sdk';

var DEFAULT = '* select *';

export class HttpsqlDatasourceQueryCtrl extends QueryCtrl {

	constructor($scope, $injector) {
		super($scope, $injector);
	
		this.scope = $scope;
		this.target.alias = this.target.alias || DEFAULT;
		this.target.metric = this.target.metric || DEFAULT;
		this.target.params = this.target.params || {};
		this.target.param_list = this.target && this.target.param_list || [];
		this.target.datatype = this.panel.type;
	}

	getAliasList() {
		return this.datasource
			.getAliasList()
			.then((alias_list) => alias_list.sort().map((e) => new Object({text: e, value: e})));
	}

	getMetricList() {
		var self = this;
		return this.datasource
			.getMetricList(this.target.alias)
			.then(function (metric_list) {
				if (metric_list.indexOf(self.target.metric) == -1)
					self.target.metric = DEFAULT;
				
				return metric_list.sort().map((e) => new Object({text: e, value: e}))
			});
	}

	updateMetricParamList () {
		this.target.param_list = this.datasource.getMetricParamList(this.target.metric);
		this.panelCtrl.refresh();
	}
}

HttpsqlDatasourceQueryCtrl.templateUrl = 'partials/query.editor.html';