Ext.define('RiskiMarket.view.Help', {
    extend: 'Ext.container.Container',

    xtype: 'app-help',

    layout: {
        type: 'table',
		columns: 2,
		rows: 10,
		tdAttrs: { style: 'padding: 3px; ' }
    },
	defaults: {
		xtype: 'panel',
		//width: '100%',
		layout : 'fit',
		bodyPadding: 10
	},	
	items: [
		{
			xtype: 'label',
			width: 30,
			html:"<p style = 'font-size:20px'> 1.</p>"			
		},
		{
			frame: true,
			title: "Help",
			//width: '80%',
			html: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
			
		},
		{
			xtype: 'label',
			width: 30,
			html:"<p style = 'font-size:20px'> 2.</p>",
		},
		{
			//frame: true,
			//title: "Help",
			//width: '80%',
			html: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
		},
		{
			xtype: 'label',
			width: 30,
			html:"<p style = 'font-size:20px'> 3.</p>",
		},
		{
			//frame: true,
			//title: "Help",
			//width: '80%',
			html: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
		}
	]
	
});
