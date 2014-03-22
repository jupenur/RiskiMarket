/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when upgrading.
*/

Ext.application({
    name: 'RiskiMarket',

    extend: 'RiskiMarket.Application',

    autoCreateViewport: true
});

function generateTestData() {
    localStorage.clear();

    RiskiMarket.app.getStore('Products').add(
        { key: '1234', name: 'Hapansilakka, 1 kg', price:  39.95 },
        { key: '5678', name: 'Turducken',          price:   2.50 },
        { key: '9012', name: 'Mämmiroppinen',      price:  13.37 },
        { key: '3456', name: 'Piimä, 1 l',         price: 225.00 },
        { key: '7890', name: 'Kengänpohja, 2 kpl', price:   5.10 }
    );

    RiskiMarket.app.getStore('Users').add(
        {
            key     : 'QWERTYUI',
            name    : 'Juho Nurminen',
            balance : 85.72,
            admin   : true
        },
        {
            key     : 'ASDFGHJK',
            name    : 'Mikko Lainio',
            balance : 132.05,
            admin   : true
        },
        {
            key     : 'ZXCVBNMM',
            name    : 'Eero Pihkala',
            balance : 97.99,
            admin   : false
        }
    );

    location.reload();
}
