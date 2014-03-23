Ext.define('RiskiMarket.view.InputDisambiguator', {
    extend: 'Ext.window.Window',
    xtype: 'app-inputdisambiguator',
    requires:[
        'Ext.button.Button',
        'Ext.panel.Panel'
    ],

    title: 'Luettua koodia ei tunnistettu',
    closable: false,
    draggable: false,
    resizable: false,
    modal: true,
    layout: 'fit',
    items: {
        xtype: 'panel',
        layout: 'hbox',
        border: false,
        bodyPadding: 10,
        defaults: {
            xtype: 'button',
            margin: '0 5 0 5'
        },
        items: [
            {
                itemId: 'addProduct',
                text: 'Lisää tuote'
            },
            {
                itemId: 'addUser',
                text: 'Lisää käyttäjä'
            }
        ]
    }
});
