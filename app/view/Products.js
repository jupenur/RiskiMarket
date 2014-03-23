Ext.define('RiskiMarket.view.Products', {
    extend: 'Ext.grid.Panel',
    xtype: 'app-products',
    requires: [ 'Ext.grid.column.Number' ],

    margin: '10 5 10 10',
    viewConfig: {
        stripeRows: true,

    },
    columns: [
        { header: 'Nimi',      dataIndex: 'name',  flex: 1 },
        {
            xtype: 'numbercolumn',
            header: 'Hinta / €',
            dataIndex: 'price',
            width: 100,
            align: 'right',
            format:'0.00'
        },
    ],
    store: 'Products'
});
