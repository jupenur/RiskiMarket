Ext.define('RiskiMarket.controller.Login', {
    extend: 'Ext.app.Controller',

    views: [ 'Login' ],
    models: [ 'User' ],
    stores: [ 'Users' ],

    user: null,

    init: function () {
        this.view = this.getLoginView().create();
        this.view.show();

        this.listen({
            controller: {
                '*': {
                    input: function (input) {
                        if (this.user === null) {
                            this.user = this.getUsersStore().findRecord(
                                'key', input, 0, false, true, true);
                            if (this.user !== null) {
                                this.fireEvent('login', this.user);
                                return false;
                            }
                        } else if (input === this.user.get('key')) {
                            this.fireEvent('logout', this.user);
                            this.user = null;
                            return false;
                        }
                    },

                    login: function (user) {
                        this.view.hide();
                    },

                    logout: function (user) {
                        this.view.show();
                    }
                }
            }
        });
    }
});
