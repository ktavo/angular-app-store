app.directive('installApp', function() {
  return {
    retrict: 'E',
    scope: {},
    templateUrl: 'js/directives/installApp.html',
    link: function(scope, element, attrs){
      scope.buttonText = 'Install',
      scope.installed = false,
      scope.downoload = function() {
        element.toggleClass('btn-active');
        if(scope.instaled)
        {
          scope.buttonText = 'Install';
          scope.installed = false;
        }
        else
        {
          scope.buttonText = 'Uninstall';
          scope.installed = true;
        }
      }  
    }
  }
});