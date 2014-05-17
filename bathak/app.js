Ext.application({
    name: 'bathak',

    onReady: function() {
	
	var request = {
					url: 'http://localhost/touch-2.3.1/registration.php',
					method: 'POST',

					// commenting this out will simply send this form with normal params
					// when this is true new HTML5 FormData object is created to send all fields
					xhr2: true,

					success: function(form, response) {
						var out = Ext.getCmp("output");
						if(response) out.setHtml(response.message);
					},
					failure: function(form, response) {
						var out = Ext.getCmp("output");
						out.setHtml(response.message);
					}
				};
				
		 Ext.create("Ext.tab.Panel",
		{
            fullscreen: true,
            tabBarPosition: 'top',

            items: 
			[ {
                    title: 'Home',
                    iconCls: 'home',
                    cls: 'home',
                    html: [
                       '<h1>Welcome to Suryodaya</h1>',
                        "<p>Register using these app and get token",
                        "You can also see the schedule of Suryodaya Baithak</p>",
                        '<h2>and can also set the reminder of schedule</h2>'
                    ].join("")
                },{
                    title: 'Schedule',
					 iconCls:'compose',
                    
                    cls: 'home',
                    html: [
                       '<h1>Suryodaya Baithak Schedule</h1>'
                        
                    ].join("")
                },
				
			{
			        title: 'Registration',
                    iconCls: 'user',
                    xtype: 'formpanel',
                    layout: 'vbox',
					items:
					[
					   {
					        xtype: 'fieldset',
                            title: 'Registration',
                            instructions: '(All fields are mandatory.)',
                            height: 400,
                            items: [
                                {
                                    xtype: 'textfield',
                                    label: 'First Name',
									name: "firstName",
									placeHolder: 'Akanksha',
									required: true
                                },
								{
                                    xtype: 'textfield',
                                    label: 'Last Name',
									name: "lastName",
									placeHolder: 'Rathore',
									required: true
                                },
                                {
                                    xtype: 'emailfield',
                                    label: 'Email',
									name:"email",
									placeHolder: 'you@sencha.com',
									required: true
                                },
								{
                                    xtype: 'textfield',
                                    label: 'Contact No.',
									name:'cno',
									placeHolder: '8602518125',
									required: true
									
                                },
								
								/*{
                               xtype  : 'radiofield',
								name   : 'gender',
								value  : 'm',
								label  : 'M',
								checked: true
								},
								{
								xtype  : 'radiofield',
								name   : 'gender',
								value  : 'f',
								label  : 'F'
								},
								{
								xtype  : 'radiofield',
								name   : 'gender',
								value  : 'blue',
								label  : 'Blue'
								},*/
								{
          xtype  : 'selectfield',
          options: [
            {text: 'First Option' , value: 'first' },
            {text: 'Second Option', value: 'second'},
            {text: 'Third Option' , value: 'third' }
          ]
        },
								{
                                    xtype: 'textfield',
                                    label: 'Occupation',
									name:'occ',
									required: true
                                },
                                {
                                    xtype: 'textareafield',
                                    label: 'Address',
									name:'Add'
                                }
                            ] 
					},
					{
							xtype: 'toolbar',
							layout: {
								pack: 'center'
							},
							ui: 'plain',
							items: [
								{
									xtype: 'button',
									text: 'Submit',
									ui: 'confirm',
									handler: function() {
										var form = this.up("formpanel");
										form.submit(request);    
									}
								}
							]
						},
                    
					{
							xtype: "panel",
							id: "output",
							label:"user responce",
							scrollable: true,
							flex:1
					}
				]	
			}
					
		
			
	    ] 
	});
     Ext.Viewport.add({
	                title:"Registration",
					xtype:"formpanel",
					layout:"vbox",
					fullscreen:true,
					items: [
						{
							xtype: 'fieldset',
							title: 'Registeration Form',
							items: [
								{
									xtype: "textfield",
									name: "firstName",
									label: "First Name:",
									placeHolder: 'Ex. John',
									required: true
								},
								{
									xtype: "textfield",
									name: "lastName",
									label: "Last Name:",
									placeHolder: 'Ex Smith',
									required: true
								},
								{
                                    xtype: 'emailfield',
									name:"email",
                                    label: 'Email',
									placeHolder: 'you@sencha.com',
									required: true
                                },
								{
                                    xtype: 'textfield',
                                    label: 'Contact No.',
									name:'cno',
									placeHolder: '8602518125',
									required: true
									
                                },
								{
                                    xtype: 'textfield',
                                    label: 'Occupation',
									name:'occ',
									required: true
                                },
                                {
                                    xtype: 'textareafield',
                                    label: 'Address',
									name:'Add'
                                },
							]
						},
						{
							xtype: 'toolbar',
							layout: {
							pack: 'center'
							},
							ui: 'plain',
							items: [
								{
									xtype: 'button',
									text: 'Submit',
									ui: 'confirm',
									handler: function() {
										var form = Ext.Viewport.down("formpanel");
										form.submit(request);
									}
								}
							]
						},
						{
							xtype: "panel",
							id: "output",
							label:"user responce",
							scrollable: true,
							flex:1
						}
					]
				});
    }
});
