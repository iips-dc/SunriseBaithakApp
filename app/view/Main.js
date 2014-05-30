Ext.define('Sunrise.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Sunrise App'
                },

                html: [
                    "This App is for the registration Purpous in the Suryodaya Baithak ",
                    "Fill the form and get the token number in your mail ",
                    "and refresh to change what's rendered here."
                ].join("")
            },
           
			       {
			        title: 'Registration',
                    iconCls: 'user',
                    xtype: 'FormPanel',
                    layout: 'vbox'
					},
					 {
			        title: 'Schedule',
                    iconCls: 'compose',
                    xtype: 'Schedule',
                    layout: 'vbox'
					}
        ]
    }
});
