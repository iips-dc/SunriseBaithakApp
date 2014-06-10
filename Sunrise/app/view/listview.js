 Ext.define('Sunrise.view.listview', {
    extend: 'Ext.dataview.List',
    alias: 'widget.listview',
 
    config: {
         flex:1,
       store            :  {fields         : ['id','name', 'age'],
				    proxy            : {
      type           : "ajax",
      url            : "http://localhost/touch-2.3.1/data.php",
      reader         : {
          type         : "json",
          rootProperty : "users"
        }
      },
	  autoLoad         : true   },
	   itemTpl          : "<b>{name}</b> is<br><br> <b>{age}</b>"
		
    }
});
