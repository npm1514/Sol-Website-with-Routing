angular.module("solSiteRouter").directive('emailDir',function(){
  return {
    restrict: 'E',
    scope: {
      responseMessage: '='
    },
    controller: 'emailCtrl',
    link: function(scope,element,attrs) {
      scope.responseMessage = "";
    },
    template: '<div><h1>{{responseMessage}}</h1></div>'
  };
});
