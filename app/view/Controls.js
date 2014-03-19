Ext.define('RiskiMarket.view.Controls', {
    extend: 'Ext.container.Container',
    xtype: 'app-controls',

    layout: 'vbox',
    height: '100%',
    disabled: true,
    defaults: {
        width: '100%'
    },
    
    initComponent: function () {
        this.callParent(arguments);
        
        Ext.create('Ext.window.Window', {
            title: 'Kirjaudu sisään',
            closable: false,
            draggable: false,
            resizable: false,
            padding: '0 20 0 20',
            border: false,
            html: '<p>Lue avainkortti kirjautuaksesi sisään ja tehdäksesi ostoksia.</p>',
            height: 100,
            width: 250
        }).show();
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
