angular.module("solSiteRouter").directive('emailDir',function(){
  return {
    restrict: 'E',
    controller: 'emailCtrl',
    template: '<div class="emailResponse"><h1>{{responseMessage}}</h1></div>'
  };
});
