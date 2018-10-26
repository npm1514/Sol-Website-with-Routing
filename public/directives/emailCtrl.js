angular.module("solSiteRouter").controller("emailCtrl", function($scope, emailServ) {
  $scope.responseMessage = '';
  $scope.badEmail ='';
  $scope.sendEmail = function(name, email, message) {
    if (email) {
    emailServ.sendEmail(name, email, message)
    .then(function(response){
      $scope.responseMessage = response;
    });
    }
    else {
      $scope.badEmail = "Please enter a valid email.";
    }
  };

});
