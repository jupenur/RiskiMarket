Ext.define('RiskiMarket.controller.User', {
    extend: 'Ext.app.Controller',

    views: [ 'User' ],
    models: [ 'User' ],
    stores: [ 'Users' ],
    refs: [{ ref: 'form', selector: 'app-user > form' }],

    admin: null,
    user: null,

    init: function () {
        this.view = this.getUserView().create();

        this.listen({
            controller: {
                '*': {
                    login: function (user) {
                        if (user.get('admin') === true) {
                            this.admin = user;
                        } else {
                            this.user = null;
                        }
                    },

                    logout: function (user) {
                        this.user = null;
                    },

                    input: function (input) {
                        if (   this.admin
                            && input.length === 8
                            && input.match(/\D/)
                            && this.admin.get('key') !== input) {
                            this.view.show();
                            this.fireEvent('formopen');
                            this.user = this.getUsersStore().findRecord(
                                'key', input, 0, false, true, true);
                            if (this.user === null) {
                                this.user = this.getUserModel().create();
                            }
                            this.getForm().loadRecord(this.user);
                        }
                    }
                }
            }
        });
    }
});
