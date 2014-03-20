Ext.define('RiskiMarket.controller.Login', {
    extend: 'Ext.app.Controller',

    views: [ 'Login' ],
    models: [ 'User' ],

    init: function () {
        this.view = this.getLoginView().create();
        this.view.show();
    }
});
