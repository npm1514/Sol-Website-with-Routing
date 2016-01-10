angular.module("solSiteRouter").controller("emailCtrl", function($scope, emailServ) {
  $scope.responseMessage = '';
  $scope.sendEmail = function(name, email, message) {
    emailServ.sendEmail(name, email, message);
  };
  console.log($scope.responseMessage);
});
