Ext.define('RiskiMarket.controller.Main', {
    extend: 'Ext.app.Controller',

    views: [ 'Main' ],
    requires: [
        'RiskiMarket.controller.Controls',
        'RiskiMarket.controller.Help',
        'RiskiMarket.controller.Products',
        'RiskiMarket.controller.Login',
        'RiskiMarket.controller.User',
        'RiskiMarket.controller.Product',
        'RiskiMarket.controller.InputFallback'
    ],

    inputMode: 'id',

    init: function () {
        // child controllers
        this.getController('Controls');
        this.getController('Help');
        this.getController('Products');
        this.getController('Login');
        this.getController('User');
        this.getController('Product');
        this.getController('InputFallback');

        // input modes
        var inputBuffer = '', controller = this;
        document.documentElement.addEventListener('keydown', function (e) {
            if (controller.inputMode === 'id') {
                var char = String.fromCharCode(e.keyCode);
                if (e.keyCode === 13) { // enter
                    controller.fireEvent('input', inputBuffer);
                    inputBuffer = '';
                    e.stopPropagation();
                } else if (char.match(/^[A-Za-z0-9]$/)) {
                    inputBuffer += char;
                    e.stopPropagation();
                } else {
                    e.preventDefault();
                    controller.fireEvent('specialKey', e.keyCode);
                }
            }
        }, true);

        this.listen({
            controller: {
                '*': {
                    formopen: function () {
                        this.inputMode = 'normal';
                    },

                    formclose: function () {
                        this.inputMode = 'id';
                    }
                }
            }
        });
    }
});
