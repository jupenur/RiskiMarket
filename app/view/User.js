Ext.define('RiskiMarket.view.User', {
    extend: 'Ext.window.Window',
    xtype: 'app-user',
    requires:[ 'Ext.form.Panel' ],

    title: 'Käyttäjä',
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
                fieldLabel: 'Saldo',
                name: 'balance'
            },
            {
                xtype: 'checkbox',
                fieldLabel: 'Ylläpitäjä',
                name: 'admin'
            }
        ]
    }
});
