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
        },
        {
            ref: 'helloPanel',
            selector: 'app-controls > #hello'
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
                        this.setUserGreeting(user);
                    },

                    logout: function (user) {
                        var sum = parseFloat(this.getSumField().getValue());
                        if (!isNaN(sum)) {
                            if ( user.get('balance') >= sum ) {
                                user.set('balance', user.get('balance') - sum);
                                Ext.Msg.show({
                                    title: 'Ostokset veloitettu',
                                    msg: 'Ostokset on veloitettu tililtäsi. '
                                        + 'Saldo: '+ user.get('balance').toFixed(2) + ' €<br> '
                                        + 'Sinut on kirjattu ulos automaattisesti',
                                    icon: Ext.Msg.INFO,
                                    closable: false,
                                    modal: false
                                }).setPosition(undefined, 20);
                                setTimeout(function () {
                                    Ext.Msg.hide();
                                }, 5000);
                            }
                            else {
                                Ext.Msg.show({
                                    title: 'Saldo ei riitä!',
                                    msg: 'Ostoksia ei veloitettu tililtäsi, koska tilin saldo ei riitä.<br>'
                                        + 'Sinut on kirjattu ulos automaattisesti',
                                    icon: Ext.Msg.INFO,
                                    closable: false,
                                    modal: false
                                }).setPosition(undefined, 20);
                                setTimeout(function () {
                                    Ext.Msg.hide();
                                }, 5000);
                            }
                        }
                        this.user = null;
                        this.getEditHint().setVisible(false);
                        this.getBalanceField().setValue('--');
                        this.getCart().getStore().removeAll();
                        this.getControls().disable();
                        this.setUserGreeting(null);
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
            },
            store: {
                '#Products' : {
                    datachanged: function (store) {
                        var cart = this.getCart().getStore();
                        cart.each(function (rec) {
                            var match = store.findRecord(
                                'key',rec.get('key'), 0, false, true, true);
                            if (match != null) {
                                rec.set('name', match.get('name'));
                                rec.set('price', match.get('price'));
                            } else {
                                cart.remove(rec);
                            }
                        });

                        var info = this.getProductInfo().getForm().getRecord();
                        if (info) {
                            info = store.findRecord(
                                'key',info.get('key'), 0, false, true, true);
                            if (info) {
                                this.getProductInfo().loadRecord(info);
                            } else {
                                this.getCart().getSelectionModel().select(
                                    this.getProductsStore().count() - 1);
                            }
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
        var product = this.getActiveProduct();
        if (product !== null) {
            this.getProductsStore().remove(product);
            this.getCart().getSelectionModel()
                          .select(this.getProductsStore().count() - 1);
        }
    },

    setUserGreeting: function(user) {
        var username = ((user != null) ? user.get('name') : null);
        var helloStart = "<h2 align='center'>";
        var helloUserStart = 'Hei ';
        var helloUserEnd = '! ';
        var helloEnd = 'Tervetuloa RiskiMarketiin!</h2>';
        var panel = this.getHelloPanel()
        var string;

        if (user != null) {
            string = helloStart
                + helloUserStart
                + username
                + helloUserEnd
                + helloEnd;
        } else {
            string = helloStart + helloEnd;
        }
        panel.update(string);
        this.getControls().setGreetBackground(user);
    }
});
