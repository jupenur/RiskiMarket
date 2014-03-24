Ext.define('RiskiMarket.view.Product', {
    extend: 'Ext.window.Window',
    xtype: 'app-product',
    requires:[
        'Ext.form.Panel',
        'Ext.form.field.Hidden',
        'Ext.form.field.Text',
        'Ext.form.field.Number',
        'Ext.toolbar.Toolbar'
    ],

    defaultFocus: 'name',
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
                fieldLabel: 'Tuotekoodi',
				name: 'key',
				
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Nimi',
				itemId: 'name',
                name: 'name',				
            },
            {
                xtype: 'numberfield',
                fieldLabel: 'Hinta',
                name: 'price'
            }
        ]
    },

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        ui: 'footer',
        defaultType: 'button',
        items: [
            {
                itemId: 'delete',
                text: 'Poista'
            },
            '->',
            {
                itemId: 'cancel',
                text: 'Peruuta'
            },
            {
                itemId: 'save',
                text: 'Tallenna'
            }
        ]
    }]
});
