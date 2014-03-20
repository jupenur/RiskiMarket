Ext.define('RiskiMarket.controller.Controls', {
    extend: 'Ext.app.Controller',

    refs: [
        { ref: 'controls', selector: 'app-controls' }
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
                    }
                }
            }
        });
    }
});
