Ext.define('RiskiMarket.controller.Products', {
    extend: 'Ext.app.Controller',

    stores: [ 'Products' ],
    refs: [{ ref: 'productsGrid', selector: 'app-products' }],

    init: function () {
        this.listen({
            controller: {
                '*': {
                    input: function (input) {
                        var product = this.getProductsStore().findRecord(
                            'key', input, 0, false, true, true);
                        if (product != null) {
                            var selectionModel = this.getProductsGrid()
                                                     .getSelectionModel();
                            selectionModel.deselectAll();
                            selectionModel.select(product);
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
