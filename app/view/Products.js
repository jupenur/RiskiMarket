Ext.define('RiskiMarket.view.Products', {
    extend: 'Ext.grid.Panel',
    xtype: 'app-products',
    requires: [ 'Ext.grid.column.Number' ],

    title: 'Hinnasto',
    margin: '10 5 10 10',
    viewConfig: {
        stripeRows: true,

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
            width: 100,
            align: 'right',
            format:'0.00',
            sortable: false,
            draggable: false,
            hideable: false,
            resizable: false
        },
    ],
    store: 'Products'
});
