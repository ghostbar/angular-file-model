//
// angular-file-model
// ==================
//
// Directive that makes the inputs with type `file` to be
// available in the `$scope` and be assigned to a model.
//
(function () {
  'use strict';

  angular.module('angular-file-model', [])

    .directive('fileModel', [
      function () {
        return {
          restrict: 'A',
          scope: {
            fileModel: '='
          },
          link: function(scope, element) {
            element.bind('change', function(event){
              var files = event.target.files;
              var file = files[0];

              scope.fileModel = file ? file.name : undefined;

              scope.$apply();
            });
          }
        };
      }
    ]
  );

})();
