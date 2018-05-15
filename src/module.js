import {HttpsqlDatasource} from './datasource';
import {HttpsqlDatasourceQueryCtrl} from './query_ctrl';

class HttpsqlConfigCtrl {}
HttpsqlConfigCtrl.templateUrl = 'partials/config.html';

export {
	HttpsqlDatasource as Datasource,
	HttpsqlDatasourceQueryCtrl as QueryCtrl,
	HttpsqlConfigCtrl as ConfigCtrl
};
