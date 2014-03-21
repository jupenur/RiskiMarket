Ext.define('RiskiMarket.view.Help', {
    extend: 'Ext.container.Container',

    xtype: 'app-help',
    layout: {
        type: 'table',
        columns: 1,
        rows: 40
    },

    requires: ['RiskiMarket.view.help.HelpSection'],

/*     layout: {
        type: 'table',
        columns: 1,
        rows: 10,
        tdAttrs: { style: 'padding: 3px; ' }
    }, */
    defaults: {
        xtype: 'panel',
        //width: '100%',
        width: 200,
        //layout : 'fit',
        bodyPadding: 10
    },
    items: [
        {
            xtype: 'app-helpsection',
            helpText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            xtype: 'app-helpsection',
            helpText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            xtype: 'app-helpsection',
            helpText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            xtype: 'app-helpsection',
            helpText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            xtype: 'app-helpsection',
            helpText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            xtype: 'app-helpsection',
            helpText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }

    ],
    changeSelection : function(value) {
        this.getComponent(value-1).selected();
    }

});
