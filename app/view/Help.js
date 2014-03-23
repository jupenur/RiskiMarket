Ext.define('RiskiMarket.view.Help', {
    extend: 'Ext.container.Container',
    requires: [ 'Ext.layout.container.Table' ],

    selected: 1,
	

    xtype: 'app-help',
    layout: {
        type: 'table',
        columns: 1,
        rows: 40
    },

    requires: ['RiskiMarket.view.help.HelpSection'],
	
	
    defaults: {
        xtype: 'panel',
        // width: '100%',
        width: 200,
        // layout : 'fit',
        bodyPadding: 5
    },
    items: [
        {
            xtype: 'app-helpsection',
            helpText: '<h3>Kirjaudu Sisään</h3>'
                + 'Lue avainkortti avainkortinlukijalla'
        },
		{
            xtype: 'app-helpsection',
            helpText: '<h3>Ostoskori on tyhjä</h3>'
                + 'Lue tuotteen viivakoodi lisätäksesi se ostoskoriin'
        },
        {
            xtype: 'app-helpsection',
            helpText: '<h3>Vahvista tai jatka</h3>'
                + '<b>Lisää</b> tuotteita ostoskoriin lukemalla niiden '
                + 'viivakoodit, tai<br> <b>Vahvista</b> ostokset lukemalla '
                + 'avainkorttisi.'
        },
        {
            xtype: 'app-helpsection',
            helpText: '<h3>Virheellinen koodi!</h3>'
                + 'Yritä uudestaan!<br>'                
        },        
        {
            xtype: 'app-helpsection',
            helpText: '<h3>Saldo ei riitä!</h3>'
                + 'Valitse toinen tuote, tai tee saldotalletus lähimmän '
                + 'adminin avustuksella.'
        },
        {
            xtype: 'app-helpsection',
            helpText: '<h3>Kiitos ostoksestasi!<br></h3> '
                + '</h4>Olet nyt kirjautunut ulos järjestelmästä. '
                + 'Tervetuloa uudestaan!</h4>'
        }

    ],
    changeSelection : function(value) {
        this.getComponent(value-1).select();

        if (value != this.selected)
            this.getComponent(this.selected-1).unselect();
        this.selected = value;

    }

});
