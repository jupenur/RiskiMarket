Ext.define('RiskiMarket.view.Controls', {
    extend: 'Ext.container.Container',
    xtype: 'app-controls',
    requires: [
        'Ext.grid.column.Number',
        'Ext.panel.Panel',
        'Ext.form.Panel',
        'Ext.toolbar.TextItem'
    ],

    layout: 'vbox',
    height: '100%',
    disabled: true,
    defaults: {
        width: '100%'
    },

    items: [
        {
            xtype: 'form',
            itemId: 'info',
            title: 'Tuotetiedot',
            bodyPadding: '10 20 5 20',
            items: [
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Nimi',
                    name: 'name',
                    value: '--'
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Hinta',
                    name: 'price',
                    value: '--'
                }
            ],
            tools: [{
                xtype: 'tbtext',
                text: 'Muokkaa painamalla enter',
                style: { color: '#888' }
            }]
        },
        {
            xtype: 'grid',
            flex: 1,
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
