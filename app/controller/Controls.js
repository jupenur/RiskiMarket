Ext.define('RiskiMarket.controller.Controls', {
    extend: 'Ext.app.Controller',

    refs: [
        {
            ref: 'controls',
            selector: 'app-controls'
        },
        {
            ref: 'cart',
            selector: 'app-controls > grid'
        },
        {
            ref: 'productInfo',
            selector: 'app-controls > #info'
        },
        {
            ref: 'editHint',
            selector: 'app-controls > #info tbtext'
        },
        {
            ref: 'sumField',
            selector: 'app-controls > form > displayfield[name=sum]'
        },
        {
            ref: 'balanceField',
            selector: 'app-controls > form > displayfield[name=balance]'
        }
    ],

    user: null,

    init: function () {
        this.control({
            'app-controls > grid': {
                selectionchange: function (_, selection) {
                    if (selection.length > 0) {
                        this.getProductInfo().loadRecord(selection[0]);
                    } else {
                        this.getProductInfo().getForm().reset();
                    }
                },

                render: function () {
                    this.getProductsStore().on('datachanged', function () {
                        var store = this.getProductsStore();
                        var count = store.getCount();
                        if (count === 0) {
                            this.getSumField().setValue('--');
                        } else {
                            var sum = 0;
                            for (var i = 0; i < count; i++) {
                                sum += store.getAt(i).get('price');
                            }
                            this.getSumField().setValue(sum);
                        }
                    }, this);
                }
            }
        });

        this.listen({
            controller: {
                '*': {
                    login: function (user) {
                        this.user = user;
                        this.getEditHint().setVisible(user.get('admin'));
                        this.getBalanceField().setValue(user.get('balance'));
                        this.getControls().enable();
                    },

                    logout: function (user) {
                        this.user = null;
                        this.getEditHint().setVisible(false);
                        this.getBalanceField().setValue('--');
                        this.getControls().disable();
                    },

                    product: function (product) {
                        if (this.getControls().isDisabled()) {
                            this.setActiveProduct(product);
                        } else {
                            this.addProduct(product.copy());
                        }
                    },

                    input: function (input) {
                        if (input === '' && this.user
                            && this.user.get('admin')) {
                            var product = this.getActiveProduct();
                            if (product !== null) {
                                this.fireEvent('editproduct',
                                    product.get('key'));
                                return false;
                            }
                        }
                    },

                    specialKey: function (key) {
                        if (key === 8) { // backspace
                            this.removeProduct();
                            return false;
                        }
                    }
                }
            }
        });
    },

    getProductsStore: function () {
        return this.getCart().getStore();
    },

    setActiveProduct: function (product) {
        this.getCart().getSelectionModel().select(product);
    },

    getActiveProduct: function (product) {
        var selection = this.getCart().getSelectionModel().getSelection();
        if (selection.length === 0) {
            return null;
        } else {
            return selection[0];
        }
    },

    addProduct: function (product) {
        var store = this.getProductsStore();
        store.insert(store.count(), product);
        this.setActiveProduct(product);
    },

    removeProduct: function () {
        this.getProductsStore().remove(this.getActiveProduct());
        this.getCart().getSelectionModel()
                      .select(this.getProductsStore().count() - 1);
    }
});
