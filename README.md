jquery-datepicker-for-angularjs
=================================

This is an [Angularjs](http://angularjs.org/) module that is jquery ui datepicker.

##Dependency

* angularjs
* jquery ui

#Install

```
bower install jqueryDatepickerForAngularjs
```

##Usage

###Include a jquery ui style
```
<link rel="stylesheet" href="/bower_components/jquery-ui/themes/ui-lightness/jquery-ui.min.css" />
```

###Include jquery、angular and jquery-datepicker-for-angularjs scripts
```
<script type="text/javascript" src="/bower_components/jquery/jquery.js"></script>
<script type="text/javascript" src="/bower_components/jquery-ui/ui/jquery-ui.js"></script>
<script type="text/javascript" src="/bower_components/angular/angular.js"></script>
script type="text/javascript" src="/src/jquery-datepicker-for-angularjs.js"></script>
```

###Create a datepicker element
```
<div jquery-ui-datepicker ng-model="date"></div>
```

###Set a model value

```
scope.date = new Date();
```

> Optionally, specify min and max dates:
```
<div jquery-ui-datepicker min-date="minDate" max-date="maxDate" ng-model="date" on-select="select()"></div>
```
```
scope.minDate = new Date(2013,9,9);
scope.maxDate = new Date(2013,10,9);
scope.select = function(){ console.log( "select" ); };
```

