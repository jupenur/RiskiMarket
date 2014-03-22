Ext.define('RiskiMarket.controller.Help', {
    extend: 'Ext.app.Controller',

    refs: [
        { ref: 'helpview', selector: 'app-help' }
    ],

    init: function() {
        this.listen({
            controller: {
                '*' : {
                    login: function() { this.changeHelpState(1);}
                }
            }
        });
        this.control({
            '*':{

            }
        });
    },

    changeHelpState: function(state) {
        this.getHelpview().changeSelection(state);
    }
});
