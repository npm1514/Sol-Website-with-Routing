angular.module("solSiteRouter").service("emailServ", function($http) {
  var toUrl = 'npm1514@gmail.com';
  this.sendEmail = function(name, email, message) {
    if (name && email && message) {
      return $http({
          method: 'POST',
          url: 'https://mandrillapp.com/api/1.0/messages/send.json',
          data: {
            'key': 'kLu16ufqZK6L8u1zYNyj6Q',
            'message': {
              'from_email': email,
              'to': {
                'email': toUrl,
                'name': 'Sol Innovations',
                'type': 'to'
              },
              'autotext': 'true',
              'subject': 'Customer Inquiry - ' + name,
              'html': 'to Nick' +
                'from ' + name +
                message
            }
          }
        })
        .then(function(response) {
          return response;
        });
    }
  };
});
