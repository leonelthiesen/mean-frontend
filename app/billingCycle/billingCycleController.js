(function() {
	angular.module('MEAN').controller('BillingCycleCtrl', [
		'$http',
		'msgs',
		BillingCycleCtrl
	]);

	function BillingCycleCtrl ($http, msgs) {
		const vm = this;

		vm.create = function() {
			const url = 'http://localhost:3003/api/billingCycles';

			$http.post(url, vm.billingCycle).then(function(response) {
				vm.billingCycle = {};
				msgs.addSuccess('Operação realizada com sucesso!')
			},function(response) {
				msgs.addError(response.data.errors);
			});
		};

	}
})()