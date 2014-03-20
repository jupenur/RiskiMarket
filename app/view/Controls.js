Ext.define('RiskiMarket.view.Controls', {
    extend: 'Ext.container.Container',
    xtype: 'app-controls',

    layout: 'vbox',
    height: '100%',
    disabled: true,
    defaults: {
        width: '100%'
    },

    items: [
        {
            html: 'product info',
            height: 100
        },
        {
            html: 'cart',
            flex: 1
        },
        {
            html: 'total',
            height: 100
        }
    ]
});
