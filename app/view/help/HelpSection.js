Ext.define('RiskiMarket.view.help.HelpSection',{
    extend: 'Ext.container.Container',
    xtype: 'app-helpsection',

    layout: {
        type: 'table',
        columns: 2,
        // rows: 1,
        tdAttrs: {
            width: 30,
            style: 'padding: 3px; '
        }

    },
    helpId: 42,
    helpText:'Lorem Fucking Ipsum!',
    selectedColor: '#65EBBE',
    backgroundColor: '#333333',
    // baseCls: 'x-plain',

    statics: {
        instanceCount: 0
    },


    constructor: function() {
        // console.log(this.helpId);
        this.statics().instanceCount ++;
        this.helpId = this.statics().instanceCount;
        this.callParent(arguments);
        // console.log(Ext.getDisplayName(arguments.callee)+": helpsection #"+this.helpId);
        // this.getItems()[0].setText(this.helpId);
        // this.initConfig(arguments);
    },

    initComponent: function() {
        this.callParent(arguments);
        var label = this.getComponent('idLabel');
        var text = this.getComponent('textPanel');
        var labelString = "<h1>"+this.helpId+"</h1>";
        console.log(Ext.getDisplayName(label));
        console.log(Ext.getDisplayName(text));
        label.html = labelString;
        text.html = this.helpText;
        // text.bodyCls = 'background:red;';
        // text.addBodyCls('background:red;');
        // text.setStyle(background, '#62F53D');

    },

    defaults: {
        // width: '100%',
        layout : 'fit',
        bodyPadding: 2
    },
    items: [
        {
            itemId: 'idLabel',
            xtype: 'label',
            // width: '150%',
            width: 30,
            html: "<h1>99</h1>",
            // html: '0',

            // text: this.helpId
        },
        {
            itemId: 'textPanel',
            xtype: 'panel',
            style: {
                borderColor:'#000000',
                borderStyle:'solid',
                borderWidth:'3px'
            },

            bodyStyle: {
                backgroundColor: '#333333'
            },

            width: 320,
            html: "Default teksti homonaama!"
        }
    ],

    select: function() {
        var text = this.getComponent('textPanel');
        text.setBodyStyle("backgroundColor", this.selectedColor);
        // console.log(this.selectedColor);
    },

    unselect: function() {
        var text = this.getComponent('textPanel');
        text.setBodyStyle("backgroundColor", this.backgroundColor);
        // console.log(this.selectedColor);
    }
});
