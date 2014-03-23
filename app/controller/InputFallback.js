Ext.define('RiskiMarket.controller.InputFallback', {
    extend: 'Ext.app.Controller',

    views: [ 'InputDisambiguator' ],
    requires: [ 'Ext.util.KeyMap' ],

    user: null,

    init: function () {
        this.view = this.getInputDisambiguatorView().create();

        this.keyMap = new Ext.util.KeyMap({
            target: document,
            binding: [
                {
                    key: [ 27 ],
                    fn: function () {
                        this.view.hide();
                    },
                    scope: this
                }
            ]
        });
        this.keyMap.disable();

        this.control({
            'app-inputdisambiguator': {
                show: function () {
                    this.fireEvent('formopen');
                    this.keyMap.enable();
                },
                hide: function () {
                    this.fireEvent('formclose');
                    this.keyMap.disable();
                }
            },

            'app-inputdisambiguator #addProduct': {
                click: function () {
                    this.view.hide();
                    this.fireEvent('editproduct', this.input);
                }
            },

            'app-inputdisambiguator #addUser': {
                click: function () {
                    this.view.hide();
                    this.fireEvent('edituser', this.input);
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
                        this.input = input;
                        if (   this.user
                            && input.length === 8
                            && input.match(/^\d+$/)) {
                            this.view.show();
                        } else if (input.length > 0) {
                            Ext.Msg.show({
                                title: 'Virhe',
                                msg: 'Syötettä ei tunnistettu, '
                                    + 'yritä uudelleen.',
                                icon: Ext.Msg.WARNING,
                                closable: false,
                                modal: false
                            });
                            setTimeout(function () {
                                Ext.Msg.hide();
                            }, 1000);
                        }
                        return false;
                    }
                }
            }
        });
    }
});
