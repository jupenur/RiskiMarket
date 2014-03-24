/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when upgrading.
*/

Ext.application({
    name: 'RiskiMarket',
    extend: 'RiskiMarket.Application',
    autoCreateViewport: true,
    reset: function () {
        localStorage.clear();
        RiskiMarket.app.getStore('Users').add({
            key     : 'AAAAAAAA',
            name    : 'Admin',
            balance : 0.00,
            admin   : true
        });
        location.reload();
    }
});
