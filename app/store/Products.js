Ext.define('RiskiMarket.store.Products', {
    extend: 'Ext.data.Store',
    requires: [ 'Ext.data.proxy.LocalStorage' ],

    model: 'RiskiMarket.model.Product',

    autoLoad: true,
    autoSync: true,

    proxy: {
        type: 'localstorage',
        id: 'products'
    }
});
