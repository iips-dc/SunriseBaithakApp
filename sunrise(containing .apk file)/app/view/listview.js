 Ext.define('Sunrise.view.listview', {
    extend: 'Ext.dataview.List',
    alias: 'widget.listview',
 
    config: {
         flex:1,
       store            :  {fields         : ['bithak_date','baithak_timing', 'baithak_location','baithak_head','baithak_remark'],
				    proxy            : {
      type           : "ajax",
      url            : "http://suryodaya.comyr.com/touch-2.3.1/datap.php",
      reader         : {
          type         : "json",
          rootProperty : "users"
        }
      },
	  autoLoad         : true   },
	   itemTpl          : "<b>{bithak_date}</b> and timing is <br><br> <b>{baithak_timing} </b> which is held at {baithak_location}"
		
    }
});