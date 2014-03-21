Ext.define('RiskiMarket.view.Login', {
    extend: 'Ext.window.Window',

    title: 'Kirjaudu sisään',
    closable: false,
    draggable: false,
    resizable: false,
    width: 250,
    layout: 'fit',
    items: {
        html: '<p>Lue avainkortti kirjautuaksesi sisään ja tehdäksesi ostoksia.</p>',
        bodyPadding: '0 20 0 20',
        border: false
    }
});
