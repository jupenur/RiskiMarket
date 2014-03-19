Ext.define('RiskiMarket.controller.Help', {
    extend: 'Ext.app.Controller',
	init: function() {
		this.control({
			'*':{
				changehelpstate: this.changeHelpState
			}
		})
	}
	changeHelpState: function(state) {
		
	}
});
