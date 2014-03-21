Ext.define('RiskiMarket.view.Controls', {
    extend: 'Ext.container.Container',
    xtype: 'app-controls',

    layout: 'vbox',
    height: '100%',
    disabled: true,
    defaults: {
        width: '100%'
    },

    items: [
        {
            html: 'product info',
            height: 100
        },
        {
            xtype: 'grid',
            flex: 1,
            columns: [
                { header: 'Nimi',      dataIndex: 'name',  flex: 1 },
                { header: 'Hinta / €', dataIndex: 'price', xtype: 'numbercolumn', format: '0.00', align: 'right', width: 100 },
            ],
            store: Ext.create('Ext.data.Store', {
                model: 'RiskiMarket.model.Product',
                autoLoad: true,
                autoSync: true,
                proxy: 'memory',
                append: function (product) {
                    this.insert(this.count(), product);
                }
            })
        },
        {
            html: 'total',
            height: 100
        }
    ],

    getGrid: function () {
        return this.getComponent(1);
    },

    getStore: function () {
        return this.getGrid().getStore();
    },

    setActiveProduct: function (product) {
        this.getGrid().getSelectionModel().select(product);
    },

    getActiveProduct: function (product) {
        var selection = this.getGrid().getSelectionModel().getSelection();
        if (selection.length === 0) {
            return null;
        } else {
            return selection[0];
        }
    },

    addProduct: function (product) {
        this.getStore().append(product);
        this.setActiveProduct(product);
    },

    removeProduct: function () {
        this.getStore().remove(this.getActiveProduct());
    }
});
