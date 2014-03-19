Ext.define('RiskiMarket.controller.Main', {
    extend: 'Ext.app.Controller',
    
    views: [ 'Main' ],
    
    statics: {
        InputMode: {
            TEXT: 0,
            ID: 1
        }
    },
    
    init: function () {
        this.inputMode = RiskiMarket.controller.Main.InputMode.ID;
        var inputBuffer = '', controller = this;
        document.documentElement.addEventListener('keypress', function (e) {
            if (controller.inputMode === RiskiMarket.controller.Main.InputMode.ID) {
                var char = String.fromCharCode(e.charCode);
                if (e.keyCode === 13) { // enter
                    controller.fireEvent('input', inputBuffer);
                    inputBuffer = '';
                    e.stopPropagation();
                } else if (char.match(/^[A-Za-z0-9]$/)) {
                    inputBuffer += char;
                    e.stopPropagation();
                }
            }
        }, true);
    }
});
