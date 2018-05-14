'use strict';

System.register(['app/plugins/sdk'], function (_export, _context) {
	"use strict";

	var QueryCtrl, _createClass, DEFAULT, HttpsqlDatasourceQueryCtrl;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}

		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	return {
		setters: [function (_appPluginsSdk) {
			QueryCtrl = _appPluginsSdk.QueryCtrl;
		}],
		execute: function () {
			_createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor);
					}
				}

				return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);
					if (staticProps) defineProperties(Constructor, staticProps);
					return Constructor;
				};
			}();

			DEFAULT = '* select *';

			_export('HttpsqlDatasourceQueryCtrl', HttpsqlDatasourceQueryCtrl = function (_QueryCtrl) {
				_inherits(HttpsqlDatasourceQueryCtrl, _QueryCtrl);

				function HttpsqlDatasourceQueryCtrl($scope, $injector) {
					_classCallCheck(this, HttpsqlDatasourceQueryCtrl);

					var _this = _possibleConstructorReturn(this, (HttpsqlDatasourceQueryCtrl.__proto__ || Object.getPrototypeOf(HttpsqlDatasourceQueryCtrl)).call(this, $scope, $injector));

					_this.scope = $scope;
					_this.target.alias = _this.target.alias || DEFAULT;
					_this.target.metric = _this.target.metric || DEFAULT;
					_this.target.params = _this.target.params || {};
					_this.target.param_list = _this.target && _this.target.param_list || [];
					_this.target.datatype = _this.panel.type;
					return _this;
				}

				_createClass(HttpsqlDatasourceQueryCtrl, [{
					key: 'getAliasList',
					value: function getAliasList() {
						return this.datasource.getAliasList().then(function (alias_list) {
							return alias_list.sort().map(function (e) {
								return new Object({ text: e, value: e });
							});
						});
					}
				}, {
					key: 'getMetricList',
					value: function getMetricList() {
						var self = this;
						return this.datasource.getMetricList(this.target.alias).then(function (metric_list) {
							if (metric_list.indexOf(self.target.metric) == -1) self.target.metric = DEFAULT;

							return metric_list.sort().map(function (e) {
								return new Object({ text: e, value: e });
							});
						});
					}
				}, {
					key: 'updateMetricParamList',
					value: function updateMetricParamList() {
						this.target.param_list = this.datasource.getMetricParamList(this.target.metric);
						this.panelCtrl.refresh();
					}
				}]);

				return HttpsqlDatasourceQueryCtrl;
			}(QueryCtrl));

			_export('HttpsqlDatasourceQueryCtrl', HttpsqlDatasourceQueryCtrl);

			HttpsqlDatasourceQueryCtrl.templateUrl = 'partials/query.editor.html';
		}
	};
});
//# sourceMappingURL=query_ctrl.js.map
