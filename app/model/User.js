/*
 * File: app/model/MyModel.js
 *
 * This file was generated by Sencha Architect version 2.2.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Sunrise.model.User',{
     extend: 'Ext.data.Model',
     alias: 'model.User',
 
       config: {
           fields: [
           {
              name: 'FirstName'
           },
           {
              name: 'LastName'
           },
            {
              name: 'Email'
           },
           {
              name: 'Contact'
           },
            {
              name: 'Address'
			  
           },
		    {
              name: 'Occupation'
			  
           }
           ],
           validations: [
           {
              type: 'presence',
              field: 'FirstName'
           },
           {
              type: 'presence',
              field: 'LastName'
           },
           {
              type: 'presence',
              field: 'Email'
           },
           {
              type: 'presence',
              field: 'Contact'
           },
		    {
              type: 'presence',
              field: 'Address'
           },{
              type: 'presence',
              field: 'Occupation'
           },
           {
              type: 'format',
              field: 'FirstName',
              matcher: /[A-Za-z]{6,15}/,
              message: 'Username should be albhabatic'
           },
            {
              type: 'length',
              field: 'LastName',
              min: 3,
            message: 'Last Name length'
           },
            {
              type: 'email',
              field: 'Email',
            message: 'Email format is invalid'
           }]
     }
});