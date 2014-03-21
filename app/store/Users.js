Ext.define('RiskiMarket.store.Users', {
    extend: 'Ext.data.Store',
    requires: [ 'Ext.data.proxy.LocalStorage' ],

    model: 'RiskiMarket.model.User',

    autoLoad: true,
    autoSync: true,

    proxy: {
        type: 'localstorage',
        id: 'users'
    }
});
