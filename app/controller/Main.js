Ext.define('RiskiMarket.controller.Main', {
    extend: 'Ext.app.Controller',

    views: [ 'Main' ],
    requires: [
        'RiskiMarket.controller.Controls',
        'RiskiMarket.controller.Help',
        'RiskiMarket.controller.Products',
        'RiskiMarket.controller.Login'
    ],

    statics: {
        InputMode: { TEXT: 0, ID: 1 }
    },

    inputMode: undefined,

    init: function () {
        // child controllers
        this.getController('Controls');
        this.getController('Help');
        this.getController('Products');
        this.getController('Login');

        // input modes
        this.inputMode = RiskiMarket.controller.Main.InputMode.ID;
        var inputBuffer = '', controller = this;
        document.documentElement.addEventListener('keydown', function (e) {
            if (controller.inputMode
                === RiskiMarket.controller.Main.InputMode.ID) {
                var char = String.fromCharCode(e.keyCode);
                if (e.keyCode === 13) { // enter
                    controller.fireEvent('input', inputBuffer);
                    inputBuffer = '';
                    e.stopPropagation();
                } else if (char.match(/^[A-Za-z0-9]$/)) {
                    inputBuffer += char;
                    e.stopPropagation();
                } else {
                    controller.fireEvent('specialKey', e.keyCode);
                }
            }
        }, true);
    }
});
