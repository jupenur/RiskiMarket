Ext.define('RiskiMarket.controller.User', {
    extend: 'Ext.app.Controller',

    views: [ 'User' ],
    models: [ 'User' ],
    stores: [ 'Users' ],
    refs: [{ ref: 'form', selector: 'app-user > form' }],

    user: null,

    init: function () {
        this.view = this.getUserView().create();

        this.listen({
            controller: {
                '*': {
                    login: function (user) {
                        if (user.get('admin') === true) {
                            this.user = user;
                        } else {
                            this.user = null;
                        }
                    },

                    logout: function (user) {
                        this.user = null;
                    },

                    input: function (input) {
                        if (   this.user
                            && input.length === 8
                            && input.match(/\D/)
                            && this.user.get('key') !== input) {
                            this.view.show();
                            this.fireEvent('formopen');
                            var user = this.getUsersStore().findRecord(
                                'key', input, 0, false, true, true);
                            if (user === null) {
                                user = this.getUserModel().create();
                            }
                            this.getForm().loadRecord(user);
                        }
                    }
                }
            }
        });
    }
});
