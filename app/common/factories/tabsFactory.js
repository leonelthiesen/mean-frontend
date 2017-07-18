(function() {
	angular.module('MEAN').factory('tabs', [
		TabsFactory
	]);

	function TabsFactory() {
		const vm = this;
		const url = 'http://localhost:3003/api/billingCycles';

		function show(owner, {
			tabList = false,
			tabCreate = false,
			tabUpdate = false,
			tabDelete = false
		}) {
			owner.tabList = tabList;
			owner.tabCreate = tabCreate;
			owner.tabUpdate = tabUpdate;
			owner.tabDelete = tabDelete;
		}

		return { show };
	}
})()