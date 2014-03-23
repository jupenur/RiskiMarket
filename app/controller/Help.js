Ext.define('RiskiMarket.controller.Help', {
    extend: 'Ext.app.Controller',

    refs: [
        { ref: 'helpview', selector: 'app-help' }
    ],
	initialized: false,

    init: function() {		
        //this.changeHelpState(1);
		this.listen({
            controller: {
                '*' : {                    
					
					login: function() { this.changeHelpState(2);},
					logout: function() { this.changeHelpState(1);},
					product: function() { this.changeHelpState(3);}
                },
				
            }
        });
        this.control({
            'app-help': {
					beforerender: function() {
						if (!this.initialized){
							this.changeHelpState(1);
							this.initialized = true;
						}
						
					},
				}
        });
    },

    changeHelpState: function(state) {
        this.getHelpview().changeSelection(state);
    }
});
