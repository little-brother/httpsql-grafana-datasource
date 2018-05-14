'use strict';

System.register(['./datasource', './query_ctrl'], function (_export, _context) {
  "use strict";

  var HttpsqlDatasource, HttpsqlDatasourceQueryCtrl, HttpsqlConfigCtrl, HttpsqlQueryOptionsCtrl;

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

      _export('QueryOptionsCtrl', HttpsqlQueryOptionsCtrl = function HttpsqlQueryOptionsCtrl() {
        _classCallCheck(this, HttpsqlQueryOptionsCtrl);
      });

      HttpsqlQueryOptionsCtrl.templateUrl = 'partials/query.options.html';

      _export('Datasource', HttpsqlDatasource);

      _export('QueryCtrl', HttpsqlDatasourceQueryCtrl);

      _export('ConfigCtrl', HttpsqlConfigCtrl);

      _export('QueryOptionsCtrl', HttpsqlQueryOptionsCtrl);
    }
  };
});
//# sourceMappingURL=module.js.map
