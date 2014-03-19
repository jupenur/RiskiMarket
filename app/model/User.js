Ext.define('RiskiMarket.model.User', {
    extend: 'Ext.data.Model',
    
    fields: [ 'id', 'name', 'balance' ],
    idProperty: 'id',
    
    proxy: {
        type: 'localstorage',
        id: 'users'
    }
});
