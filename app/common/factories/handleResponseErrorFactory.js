(function () {
	angular.module('MEAN').factory('handleResponseError', [
		'$q',
		'$window',
		'consts',
		HandleResponseErrorFactory
	])
	function HandleResponseErrorFactory($q, $window, consts) {
		function responseError(errorResponse) {
			if (errorResponse.status === 403) {
				localStorage.removeItem(consts.userKey);
				$window.location.href = '/auth.html';
			}

			return $q.reject(errorResponse);
		}

		return { responseError };
	}
})();