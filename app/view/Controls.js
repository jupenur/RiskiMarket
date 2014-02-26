Ext.define('RiskiMarket.view.Controls', {
    extend: 'Ext.container.Container',
    requires:[
        'RiskiMarket.view.Login',
        'RiskiMarket.view.Cart'
    ],

    xtype: 'app-controls',

    layout: {
        type: 'card'
    },
    
    items: [
        { xtype: 'app-login' },
        { xtype: 'app-cart' }
    ]
});
