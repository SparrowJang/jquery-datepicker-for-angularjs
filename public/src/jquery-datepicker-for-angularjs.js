
(function( angular ){

  var app = angular.module( "jquery-ui", [] );

  app.directive( "jqueryUiDatepicker", function(){


    return {

      restrict: "A",

      require: 'ngModel',

      scope:{
        "value":"=ngModel",
        "minDate":"=minDate",
        "maxDate":"=maxDate",
        "onSelect":"&onSelect"
      },

      link:function( scope, elem, attrs ){

        var clearListeners = [];

        var clearListener = scope.$watch( "ready", function(){

          if ( scope.value == undefined ) scope.value = new Date();

          else if ( typeof scope.value == "number" ) scope.value = new Date( scope.value );

          elem.datepicker({

            defaultDate:scope.value,

            onSelect:function(){

              scope.value = $(this).datepicker( "getDate" );
              scope.$apply();

              if ( angular.isFunction( scope.onSelect ) ) scope.onSelect();
            }

          });

          clearListeners.push( scope.$watch( "minDate", function(){

            elem.datepicker( "option", "minDate", scope.minDate );

          }));

          clearListeners.push( scope.$watch( "maxDate", function(){

            elem.datepicker( "option", "maxDate", scope.maxDate );
          }));

          clearListener();
        });

        scope.$on( "$destroy", function(){

          for ( var i in clearListeners ) clearListeners[i]();
        });

      }

    };

  });

})( angular );

