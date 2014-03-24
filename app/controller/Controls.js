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
						if (key === 45 && this.user && this.user.get('admin')) {	//Insert
							this.insertProduct();
							return false
						
						}
                    }
                }
            },
            store: {
                '#Products' : {
                    datachanged : function (store) {                        
                        console.log("data changed");
                        var cart = this.getCart().getStore();
                        var info = this.getProductInfo().getForm().getRecord();
                        console.log(info);
                        var match;
                        cart.each(function (rec) {
                            match = store.findRecord('key',rec.get('key'));
                            if (match != null) {
                                rec.set('name',match.get('name'));
                                rec.set('price',match.get('price'));
                            }
                        });
                        match = store.findRecord('key',info.get('key'));
                        console.log(match);                        
                        if (match != null)
                            this.getProductInfo().loadRecord(match);
                        
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
	
	insertProduct: function () {
		console.log("Inserting product");
		return false;
	},
	
	setUserGreeting: function(user) {
		var username = ((user != null) ? user.get('name') : null);
		var helloStart = "<h2 align='center'>";
		var	helloUserStart = 'Hei ';
		var	helloUserEnd = '! ';
		var	helloEnd = 'Tervetuloa RiskiMarketiin!</h2>';
		var panel = this.getHelloPanel()
		var string;
		
		console.log(Ext.getDisplayName(panel));
									
		if (user != null)		
			string = helloStart+helloUserStart+username+helloUserEnd+helloEnd;
		else
			string = helloStart+helloEnd;
		console.log(string);
		panel.update(string);
		this.getControls().setGreetBackground(user);
		
		
	}
});
