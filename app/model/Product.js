Ext.define('RiskiMarket.model.Product', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'key',   type: 'string' },
        { name: 'name',  type: 'string' },
        { name: 'price', type: 'float'  }
    ]
});
