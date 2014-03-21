Ext.define('RiskiMarket.view.Products', {
    extend: 'Ext.grid.Panel',
    xtype: 'app-products',

    border: false,
    viewConfig: {
        stripeRows: true,

	},
    columns: [
        { header: 'Nimi',      dataIndex: 'name',  flex: 1 },
        { header: 'Hinta / €', dataIndex: 'price', xtype: 'numbercolumn', width: 100, align: 'right', format:'0.00' },
    ],
    store: 'Products'
});
