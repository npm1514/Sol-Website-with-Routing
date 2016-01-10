angular.module("solSiteRouter").service("emailServ", function($http) {

  this.sendEmail = function(name, email, message) {
    if (name && email && message) {
      return $http({
          method: 'POST',
          url: 'https://mandrillapp.com/api/1.0/messages/send.json',
          data: {
            'key': 'kLu16ufqZK6L8u1zYNyj6Q',
            'message': {
              'from_email': 'npmarucci@sol-innovations.com',
              'to': [{
                'email': 'npm1514@gmail.com',
                'name': 'Sol Innovations',
                'type': 'to'
              }],
              'autotext': 'true',
              'subject': 'Customer Inquiry - ' + name + " @ " + email,
              'text': message
            }
          }
        })
        .then(function itWorked(response) {
          return "Your email has been received. We will get back to you within the next 48 hours.";
        }, function itDidntWork(response){
          return "Woops! Something went wrong. Please contact us via email or give us a call.";
        });
    }
  };
});
