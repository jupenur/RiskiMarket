Ext.define('RiskiMarket.View.help.HelpSection',{
	extend: 'Ext.container.Container',
	xtype: 'app-helpSection',
	layout: 'border',
	
	statics: {
		instanceCount: 0
	},
	
	id: 0,
	
	constructor: function() {
		this.instanceCount ++;
		this.id = this.instanceCount;
	}
	
	defaults: {
		xtype: 'label',
		//width: '100%',
		layout : 'fit',
		bodyPadding: 15
	},
	
})
