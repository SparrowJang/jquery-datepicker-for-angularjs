
(function( angular ){

  var app = angular.module( "jquery-ui", [] );

  app.directive( "jqueryUiDatepicker", function(){


    return {

      restrict: "A",

      require: 'ngModel',

      scope:{
        "value":"=ngModel",
        "minDate":"=minDate",
        "maxDate":"=maxDate"
      },

      link:function( scope, elem, attrs ){

        var clearListeners = [];

        var clearListener = scope.$watch( "ready", function(){


          elem.datepicker({

            defaultDate:new Date( scope.value ),

            onSelect:function(){
              scope.value = $(this).datepicker( "getDate" );
              scope.$apply();
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

