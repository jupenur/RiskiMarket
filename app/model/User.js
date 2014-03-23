Ext.define('RiskiMarket.model.User', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'key',     type: 'string' },
        { name: 'name',    type: 'string' },
        { name: 'balance', type: 'float'  },
        { name: 'admin',   type: 'bool'   }
    ]
});
