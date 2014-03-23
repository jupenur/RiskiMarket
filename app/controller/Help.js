Ext.define('RiskiMarket.controller.Help', {
    extend: 'Ext.app.Controller',

    refs: [
        { ref: 'helpview', selector: 'app-help' }
    ],

    state: null,

    init: function() {
        this.listen({
            controller: {
                '*' : {
                    login: function () { this.changeHelpState(2); },

                    logout: function() {
                        if (this.state === 2) {
                            this.changeHelpState(1);
                        } else if (this.state === 3) {
                            this.changeHelpState(4);
                            var self = this;
                            setTimeout(function () {
                                self.changeHelpState(1);
                            }, 1000);
                        }
                    },

                    product: function () {
                        this.changeHelpState(3);
                    }
                }
            }
        });
        this.control({
            'app-help': {
                afterrender: function() {
                    this.changeHelpState(1);
                }
            }
        });
    },

    changeHelpState: function(state) {
        this.state = state;
        this.getHelpview().changeSelection(state);
    }
});
