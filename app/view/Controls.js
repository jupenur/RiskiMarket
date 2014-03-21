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
            xtype: 'grid',
            flex: 1,
            columns: [
                { header: 'Nimi',      dataIndex: 'name',  flex: 1 },
                { header: 'Hinta / €', dataIndex: 'price', xtype: 'numbercolumn', format: '0.00', align: 'right', width: 100 },
            ],
            store: Ext.create('Ext.data.Store', {
                model: 'RiskiMarket.model.Product',
                autoLoad: true,
                autoSync: true,
                proxy: 'memory'
            })
        },
        {
            html: 'total',
            height: 100
        }
    ]
});
