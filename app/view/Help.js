Ext.define('RiskiMarket.view.Help', {
    extend: 'Ext.container.Container',

    xtype: 'app-help',

    layout: {
        type: 'table',
		columns: 1,
		rows: 10,
		tdAttrs: { style: 'padding: 10px; ' }
    },
	defaults: {
		xtype: 'panel',
		width: '100%',
		bodypadding: 10
	},	
	items: [
		{
			frame: true,
			title: "Help",
			html: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
		},
		{
			//frame: true,
			//title: "Help",
			html: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
		},
		{
			//frame: true,
			//title: "Help",
			html: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
		}
	]
	
});
