Ext.define('RiskiMarket.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'RiskiMarket.view.Products',
        'RiskiMarket.view.Controls',
        'RiskiMarket.view.Help',
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [{
        region: 'west',
        xtype: 'app-products',
        width: '33%'
    },{
        region: 'center',
        xtype: 'app-controls',
    },{
        region: 'east',
        xtype: 'app-help',
        width: '33%'
    }]
});
