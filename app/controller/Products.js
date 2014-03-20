Ext.define('RiskiMarket.controller.Products', {
    extend: 'Ext.app.Controller',

    stores: [ 'Products' ],
    refs: [{ ref: 'productsGrid', selector: 'app-products' }],

    init: function () {
        this.listen({
            controller: {
                '*': {
                    input: function (input) {
                        var product = this.getProductsStore()
                                          .findRecord('key', input);
                        if (product != null) {
                            this.getProductsGrid()
                                .getSelectionModel()
                                .select(product);
                            return false;
                        }
                    }
                }
            }
        });

        this.control({
            'app-products': {
                select: function (_, product) {
                    this.fireEvent('product', product);
                }
            }
        });
    }
});
