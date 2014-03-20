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
        { key: '1234', name: 'Hapansilakka, 1 kg', price: 39.95 },
        { key: '5678', name: 'Turducken',          price:  2.50 },
        { key: '9012', name: 'Mämmiroppinen',      price: 13.37 },
        { key: '3456', name: 'Piimä, 1 l',         price:   225 },
        { key: '7890', name: 'Kengänpohja, 2 kpl', price:  5.00 }
    );

    RiskiMarket.app.getStore('Users').add(
        { key: 'qwerty', name: 'Juho Nurminen', balance:  85.72 },
        { key: 'asdfgh', name: 'Mikko Lainio',  balance: 132.05 },
        { key: 'zxcvbn', name: 'Eero Pihkala',  balance:  97.99 }
    );
}
