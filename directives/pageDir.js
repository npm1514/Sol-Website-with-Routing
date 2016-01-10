angular.module("solSiteRouter").directive('pageDir',function(){
  return {
    restrict: 'E',
    scope: {
      viewPage:'='
    },
    template: '<link rel="shortcut icon" href="images/BetterLogo.ico"><title>{{viewPage}} - Sol Innovations Ltd.</title>'
  };
});
