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
                     "<b>Baithak App is an approach to provide pre-registration using your mobile phones from anywhere</b><br> ",
                    "<b>You can see the schedule and according to this you can fill the Registration form and get the token number in your mail </b><br>",
                   '<img width="95%" src="http://suryodaya.comyr.com/touch-2.3.1/Sunrise/image/guruji.png" />'
                ].join("")
            },  {title: 'Schedule',
                    iconCls: 'compose',
					items:{ 
					docked: 'top',
                    xtype: 'titlebar',
                    title: 'Baithak Schedule'},
                   
                   xtype: 'listview',
                    
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
