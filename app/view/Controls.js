Ext.define('RiskiMarket.view.Controls', {
    extend: 'Ext.container.Container',
    xtype: 'app-controls',
    requires: [
        'Ext.grid.column.Number',
        'Ext.panel.Panel',
        'Ext.form.Panel',
        'Ext.toolbar.TextItem',
        'Ext.form.field.Display'
    ],

    layout: 'vbox',
    height: '100%',
    disabled: true,
    maskOnDisable: false,
    defaults: {
        width: '100%'
    },

    items: [
        {
            xtype: 'form',
            itemId: 'info',
            title: 'Tuotetiedot',
            bodyPadding: '10 20 5 20',
            margin: '10 5 5 5',
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
                    value: '--',
                    renderer: function (value) {
                        var number = parseFloat(value);
                        if (isNaN(number)) {
                            return value;
                        } else {
                            return number.toFixed(2) + ' €';
                        }
                    }
                }
            ],
            tools: [{
                xtype: 'tbtext',
                text: 'Muokkaa painamalla enter',
                hidden: true,
                style: { color: '#888' }
            }]
        },
        {
            xtype: 'grid',
            title: 'Ostoskori',
            flex: 1,
            margin: 5,
            viewConfig: {
                emptyText: 'Ostoskori on tyhjä',
                deferEmptyText: false
            },
            columns: [
                {
                    header: 'Nimi',
                    dataIndex: 'name',
                    flex: 1,
                    sortable: false,
                    draggable: false,
                    hideable: false,
                    resizable: false
                },
                {
                    xtype: 'numbercolumn',
                    header: 'Hinta / €',
                    dataIndex: 'price',
                    format: '0.00',
                    align: 'right',
                    width: 100,
                    sortable: false,
                    draggable: false,
                    hideable: false,
                    resizable: false
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
            xtype: 'form',
            title: 'Summa',
            bodyPadding: '10 20 5 20',
            margin: '5 5 10 5',
            items: [
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Yhteensä',
                    name: 'sum',
                    value: '--',
                    renderer: function (value) {
                        var number = parseFloat(value);
                        if (isNaN(number)) {
                            return value;
                        } else {
                            var balance = this.up('form')
                                              .query('[name=balance]')[0]
                                              .getValue();
                            if (balance > number) {
                                return number.toFixed(2) + ' €';
                            } else {
                                return '<span style="color: red">'
                                    + number.toFixed(2) + ' €'
                                    + '</span>';
                            }
                        }
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Tilin saldo',
                    name: 'balance',
                    value: '--',
                    renderer: function (value) {
                        var number = parseFloat(value);
                        if (isNaN(number)) {
                            return value;
                        } else {
                            return number.toFixed(2) + ' €';
                        }
                    }
                }
            ]
        }
    ]
});
