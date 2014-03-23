Ext.define('RiskiMarket.view.Product', {
    extend: 'Ext.window.Window',
    xtype: 'app-product',
    requires:[
        'Ext.form.Panel',
        'Ext.form.field.Hidden',
        'Ext.form.field.Text',
        'Ext.form.field.Number'
    ],

    title: 'Tuote',
    closable: false,
    draggable: false,
    resizable: false,
    modal: true,
    layout: 'fit',
    items: {
        xtype: 'form',
        border: false,
        bodyPadding: 10,
        items: [
            {
                xtype: 'hiddenfield',
                name: 'key'
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Nimi',
                name: 'name'
            },
            {
                xtype: 'numberfield',
                fieldLabel: 'Hinta',
                name: 'price'
            }
        ]
    },

    buttons: [
        {
            itemId: 'cancel',
            text: 'Peruuta'
        },
        {
            itemId: 'save',
            text: 'Tallenna'
        }
    ]
});
