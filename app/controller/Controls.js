Ext.define('RiskiMarket.controller.Controls', {
    extend: 'Ext.app.Controller',
    
    views: [ 'Controls' ],
    
    refs: [
        { ref: 'controls', selector: 'app-controls' }
    ],
    
    setActiveView: function (index) {
        this.getControls().getLayout().setActiveItem(index);
    },
    
    showLoginView: function () {
        this.setActiveView(0);
    },
    
    showCartView: function () {
        this.setActiveView(1);
    }
});
