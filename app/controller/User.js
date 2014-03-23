Ext.define('RiskiMarket.controller.User', {
    extend: 'Ext.app.Controller',

    views: [ 'User' ],
    models: [ 'User' ],
    stores: [ 'Users' ],
    requires: [ 'Ext.util.KeyMap' ],

    refs: [
        { ref: 'form',         selector: 'app-user > form'  },
        { ref: 'saveButton',   selector: 'app-user #save'   },
        { ref: 'cancelButton', selector: 'app-user #cancel' }
    ],

    user: null,

    init: function () {
        this.view = this.getUserView().create();

        this.keyMap = new Ext.util.KeyMap({
            target: document,
            binding: [
                {
                    key: [ 10, 13 ],
                    fn: function () {
                        this.getSaveButton().btnEl.dom.click();
                    },
                    scope: this
                },
                {
                    key: [ 27 ],
                    fn: function () {
                        this.getCancelButton().btnEl.dom.click();
                    },
                    scope: this
                }
            ]
        });
        this.keyMap.disable();

        this.control({
            'app-user': {
                show: function () {
                    this.fireEvent('formopen');
                    this.keyMap.enable();
                },
                hide: function () {
                    this.fireEvent('formclose');
                    this.keyMap.disable();
                }
            },

            'app-user #save': {
                click: function () {
                    this.view.hide();
                    this.getForm().updateRecord();
                    var user = this.getForm().getRecord();
                    if (user.phantom) {
                        this.getUsersStore().add(user);
                    }
                    this.getForm().getForm().reset();
                }
            },

            'app-user #cancel': {
                click: function () {
                    this.view.hide();
                    this.getForm().getForm().reset();
                }
            }
        });

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
                            this.fireEvent('edituser', input);
                            return false;
                        }
                    },

                    edituser: function (key) {
                        this.view.show();
                        var user = this.getUsersStore().findRecord(
                            'key', key, 0, false, true, true);
                        if (user === null) {
                            user = this.getUserModel().create();
                            user.set('key', key);
                        }
                        this.getForm().loadRecord(user);
                    }
                }
            }
        });
    }
});
