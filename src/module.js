import {HttpsqlDatasource} from './datasource';
import {HttpsqlDatasourceQueryCtrl} from './query_ctrl';

class HttpsqlConfigCtrl {}
HttpsqlConfigCtrl.templateUrl = 'partials/config.html';

class HttpsqlQueryOptionsCtrl {}
HttpsqlQueryOptionsCtrl.templateUrl = 'partials/query.options.html';

export {
	HttpsqlDatasource as Datasource,
	HttpsqlDatasourceQueryCtrl as QueryCtrl,
	HttpsqlConfigCtrl as ConfigCtrl,
	HttpsqlQueryOptionsCtrl as QueryOptionsCtrl
};
