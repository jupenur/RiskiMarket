Ext.define('RiskiMarket.view.Help', {
    extend: 'Ext.panel.Panel',
    requires: [ 'Ext.layout.container.Table' ],

    selected: 1,


    xtype: 'app-help',
    title: 'Ohje',
    margin: '10 10 10 5',
    layout: 'vbox',

    selectedColor: '#65EBBE',

    defaults: {
        width: '100%',
        bodyPadding: '0 20 5 20',
        border: false
    },

    items: [
        {
            html: '<h3>1. Kirjaudu Sisään</h3>'
                + '<p><b>Lue avainkortti</b> kortinlukijalla.'
        },
        {
            html: '<h3>2. Valitse tuote</h3>'
                + '<p><b>Lue tuotteen viivakoodi</b> lisätäksesi se '
                + 'ostoskoriin. Voit myös <b>kirjautua ulos</b> lukemalla '
                + 'avainkorttisi uudelleen.'
        },
        {
            html: '<h3>3. Vahvista tai jatka</h3>'
                + '<p><b>Lisää</b> tuotteita ostoskoriin lukemalla niiden '
                + 'viivakoodit. <b>Vahvista</b> ostokset lukemalla '
                + 'avainkorttisi. Voit <b>poistaa tuotteita</b> painamalla '
                + 'askelpalautinta.'
        },
        {
            html: '<h3>4. Kiitos ostoksistasi!</h3>'
                + 'Valitsemiesi tuotteiden hinta veloitetaan tililtäsi ja '
                + 'sinut kirjataan ulos automaattisesti.'
        }
    ],

    changeSelection : function(value) {
        this.getComponent(value-1)
            .setBodyStyle('background', this.selectedColor);
        if (value != this.selected) {
            this.getComponent(this.selected-1).setBodyStyle('background', null);
        }
        this.selected = value;
    }

});
