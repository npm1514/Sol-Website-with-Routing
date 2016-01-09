angular.module("solSiteRouter").directive('pageDir',function(){
  return {
    restrict: 'E',
    scope: {
      viewPage:'='
    },
    template: '<title>{{viewPage}} - Sol Innovations Ltd.</title>'
  };
});
