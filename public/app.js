angular.module('solSiteRouter', ['ui.router'])
.config(function($urlRouterProvider, $stateProvider) {
  $stateProvider
    .state('Home', {
      url: '/',
      templateUrl: 'templates/home.html'
      // controller: 'homeCtrl'
    })
    .state("About", {
      url: "/about",
      templateUrl: "templates/about.html"
      // controller: 'aboutCtrl'
    })
    .state("Contact", {
      url: "/contact",
      templateUrl: "templates/contact.html"
      // controller: 'contactCtrl'
    })
    .state("Quotation", {
      url: "/quotation",
      templateUrl: "templates/quotation.html"
      // controller: 'quotationCtrl'
    })
    .state("Services", {
      url: "/services",
      templateUrl: "templates/services.html"
      // controller: 'servicesCtrl'
    });

  $urlRouterProvider
    .otherwise('/');
});
