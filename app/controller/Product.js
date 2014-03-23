Ext.define('RiskiMarket.controller.Product', {
    extend: 'Ext.app.Controller',

    views: [ 'Product' ],
    models: [ 'Product' ],
    stores: [ 'Products' ],
    requires: [ 'Ext.util.KeyMap' ],

    refs: [
        { ref: 'form',         selector: 'app-product > form'  },
        { ref: 'saveButton',   selector: 'app-product #save'   },
        { ref: 'cancelButton', selector: 'app-product #cancel' }
    ],

    user: null,

    init: function () {
        this.view = this.getProductView().create();

        this.keyMap = new Ext.util.KeyMap({
            target: document,
            binding: [
                {
                    key: [ 10, 13 ],
                    fn: function () {
                        this.getSaveButton().btnEl.dom.click();
                    },
                    scope: this
                },
                {
                    key: [ 27 ],
                    fn: function () {
                        this.getCancelButton().btnEl.dom.click();
                    },
                    scope: this
                }
            ]
        });
        this.keyMap.disable();

        this.control({
            'app-product': {
                show: function () {
                    this.fireEvent('formopen');
                    this.keyMap.enable();
                },
                hide: function () {
                    this.fireEvent('formclose');
                    this.keyMap.disable();
                }
            },

            'app-product #save': {
                click: function () {
                    this.view.hide();
                    this.getForm().updateRecord();
                    var product = this.getForm().getRecord();
                    if (product.phantom) {
                        this.getProductsStore().add(product);
                    }
                    this.getForm().getForm().reset();
                }
            },

            'app-product #cancel': {
                click: function () {
                    this.view.hide();
                    this.getForm().getForm().reset();
                }
            }
        });

        this.listen({
            controller: {
                '*': {
                    login: function (user) {
                        if (user.get('admin') === true) {
                            this.user = user;
                        } else {
                            this.user = null;
                        }
                    },

                    logout: function (user) {
                        this.user = null;
                    },

                    input: function (input) {
                        if (   this.user
                            && input.length !== 8
                            && input.match(/^\d+$/)) {
                            this.view.show();
                            var product = this.getProductsStore().findRecord(
                                'key', input, 0, false, true, true);
                            if (product === null) {
                                product = this.getProductModel().create();
                                product.set('key', input);
                            }
                            this.getForm().loadRecord(product);
                        }
                    }
                }
            }
        });
    }
});
