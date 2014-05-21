SunriseBaithakApp
=================

This is a HTML 5 Mobile APP for Sunrise Baithak which have three function 1. Registration 2. View Schedule 3.Reminder(optional).

What is Sencha Touch?

Sencha Touch is an HTML5 framework for developing mobile applications. 
It allows you to develop mobile applications that would have the same look and feel as a native application. 
Sencha Touch supports Android, iOS, Windows Phone, Microsoft Surface Pro and RT, and Blackberry devices.


Features

UI components (Panels, Tab bar, Navigation view, buttons, pickers)
Components can be themed depending on the target devices
Access device capabilities like camera, accelerometer etc, with the help of PhoneGap frameworks.



How to Start

Download the free Sencha Touch SDK and Sencha Cmd from the Sencha website. Note that Sencha Cmd will also install Ant, Ruby, Sass, and Compass, all or some of which will be useful for building applications.

You will also need a web server running locally on your computer, for example XAMPP.

The Sencha website advises “If you are running the IIS web server on Windows, manually add  application/x-json as a MIME Type for Sencha Touch to work properly. 
For information on adding this MIME type see the following link: http://stackoverflow.com/a/1121114/273985“.



Sencha Touch Project

Index.html – page where your application will be hosted from.
App Directory – the application in general is a collection of Models,Views, Controllers, Stores and Profiles
Model: represents the type of data that should be used/stored in the application
View: displays data to the user with the help of inbuilt Sencha UI components/custom components
Controller: handles UI Interactions and the interaction between the model and the view.
Store: responsible for loading data into the application
Profile: helps in customizing the UI for various phone and tablets.
Resources Directory – contains images, css and other media assets
App.js
Global settings of the application
Contains the app name, references to all the models, views, controllers, profiles and stores
Contains the app launch function that is called after the models, views, controllers, profiles and stores are loaded. App launch function is the starting point of the application wherein the first view gets instantiated and loaded.
Touch directory – Contains the Sencha Touch framework files.
