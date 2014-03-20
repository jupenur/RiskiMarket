Ext.define('RiskiMarket.view.Products', {
    extend: 'Ext.grid.Panel',
    xtype: 'app-products',

    border: false,
    viewConfig: {
        stripeRows: true
    },
    columns: [
        { header: 'Nimi',      dataIndex: 'name',  flex: 1 },
        { header: 'Hinta / €', dataIndex: 'price', width: 100 },
    ],
    store: 'Products'
});
