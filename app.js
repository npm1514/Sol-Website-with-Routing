angular.module('solSiteRouter', ['ui.router']).config(function($urlRouterProvider, $stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home/home.html',
      controller: 'homeCtrl'
    })
    .state("about", {
      url: "/about",
      templateUrl: "about/about.html",
      controller: 'aboutCtrl'
    })
    .state("contact", {
      url: "/contact",
      templateUrl: "contact/contact.html",
      controller: 'contactCtrl'
    })
    .state("quotation", {
      url: "/quotation",
      templateUrl: "quotation/quotation.html",
      controller: 'quotationCtrl'
    })
    .state("services", {
      url: "/services",
      templateUrl: "services/services.html",
      controller: 'servicesCtrl'
    });

  $urlRouterProvider
    .otherwise('/');
});
