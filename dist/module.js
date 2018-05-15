'use strict';

System.register(['./datasource', './query_ctrl'], function (_export, _context) {
	"use strict";

	var HttpsqlDatasource, HttpsqlDatasourceQueryCtrl, HttpsqlConfigCtrl;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	return {
		setters: [function (_datasource) {
			HttpsqlDatasource = _datasource.HttpsqlDatasource;
		}, function (_query_ctrl) {
			HttpsqlDatasourceQueryCtrl = _query_ctrl.HttpsqlDatasourceQueryCtrl;
		}],
		execute: function () {
			_export('ConfigCtrl', HttpsqlConfigCtrl = function HttpsqlConfigCtrl() {
				_classCallCheck(this, HttpsqlConfigCtrl);
			});

			HttpsqlConfigCtrl.templateUrl = 'partials/config.html';

			_export('Datasource', HttpsqlDatasource);

			_export('QueryCtrl', HttpsqlDatasourceQueryCtrl);

			_export('ConfigCtrl', HttpsqlConfigCtrl);
		}
	};
});
//# sourceMappingURL=module.js.map
