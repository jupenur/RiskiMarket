Ext.define('RiskiMarket.view.Controls', {
    extend: 'Ext.container.Container',
    xtype: 'app-controls',
    requires: [ 'Ext.grid.column.Number' ],

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
			emptyText: 'Ostoskori on tyhjä',
            columns: [
                { header: 'Nimi', dataIndex: 'name', flex: 1 },
                {
                    xtype: 'numbercolumn',
                    header: 'Hinta / €',
                    dataIndex: 'price',
                    format: '0.00',
                    align: 'right',
                    width: 100
                },
            ],
            store: Ext.create('Ext.data.Store', {
                model: 'RiskiMarket.model.Product',
                autoLoad: true,
                autoSync: true,
                proxy: 'memory'
            })
        },
        {
            xtype: 'panel',
            title: 'Total',
            items: [
                {
                    xtype: 'displayfield',
                    fieldlabel: 'saldo',
                    value: '12345',
                    height: 100
                }
            ]
        }
    ]
});
