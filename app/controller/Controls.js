Ext.define('RiskiMarket.controller.Controls', {
    extend: 'Ext.app.Controller',

    refs: [
        { ref: 'controls', selector: 'app-controls'        },
        { ref: 'cart',     selector: 'app-controls > grid' }
    ],

    init: function () {
        this.listen({
            controller: {
                '*': {
                    login: function (user) {
                        this.getControls().enable();
                    },

                    logout: function (user) {
                        this.getControls().disable();
                    },

                    product: function (product) {
                        if (this.getControls().isDisabled()) {
                            this.setActiveProduct(product);
                        } else {
                            this.addProduct(product.copy());
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
		this.getCart().getSelectionModel().select(this.getProductsStore().count() - 1);
    }
});
