angular.module('MEAN').constant('consts', {
	appName: 'MEAN',
	version: '1.0',
	owner: 'Leonel',
	year: '2017',
	site: 'http://cod3r.com.br',
	apiUrl: 'http://localhost:3003/api',
	oapiUrl: 'http://localhost:3003/oapi',
	userKey: '_mean_user'
}).run(['$rootScope', 'consts', function ($rootScope, consts) {
	$rootScope.consts = consts
}])