Ext.define('Sunrise.view.SchedulePanel', {
    extend: 'Ext.dataview.NestedList',
    alias : 'widget.SchedulePanel',
     
    config: {
     store : 'Countries',
     title: 'Schedule',
	  iconCls: 'compose',
      cls: 'home',
	  getItemTextTpl: function(node) {
  return '<span>{text,Time}</span>';
},
       
          
     detailCard: {
            html: 'You can see detail information here!'
        } 
     
    } 
});