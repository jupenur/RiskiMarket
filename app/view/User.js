Ext.define('RiskiMarket.view.User', {
    extend: 'Ext.window.Window',
    requires:[ 'Ext.form.Panel' ],

    title: 'Käyttäjä',
    closable: false,
    draggable: false,
    resizable: false,
    width: 400,
    layout: 'fit',
    items: {
        xtype: 'form',
        border: false,
        modal: true
    }
});
