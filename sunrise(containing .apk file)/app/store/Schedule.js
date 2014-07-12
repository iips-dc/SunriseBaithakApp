Ext.define('Sunrise.store.Schedule', {
    extend: 'Ext.data.TreeStore',
     
    config: {
     model: 'Sunrise.model.Schedule',
	 data       : [ {text:'John',Time:'11:00'}, //Pairs
                     {text:'Jill1' ,Time:'11:00'},
                     {text:'Susan',Time:'11:00' },
                     {text:'Alex',Time:'11:00' }
                   ]

    
    }    
 
});