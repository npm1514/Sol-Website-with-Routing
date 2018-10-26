angular.module("solSiteRouter").service("emailServ", function($http) {

  this.sendEmail = function(name, email, message) {
    var mess = `<p> Name: ${name} </p>
            <p> Email: ${email} </p>
            <p> Message: ${message} </p>`;
    if (name && email && message) {
      return $http({
          "method": "POST",
          "url": "https://mandrillapp.com/api/1.0/messages/send.json",
          "data": {
            "key": "m9WhwvP-pCZrAOmfEmMceg",
            "message": {
              "from_email": "npmarucci@sol-innovations.com",
              "to": [{
                "email": "npmarucci@sol-innovations.com",
                "name": "Sol Innovations",
                "type": "to"
              }],
              "autotext": true,
              "subject": "Customer Inquiry - " + name,
              "html": mess
            }
          }
        })
        .then(function itWorked(response) {
          return "Your email has been received. We will get back to you within the next 48 hours.";
        }, function itDidntWork(response){
          return "Whoops! Something went wrong. Please contact us via email or give us a call.";
        });
    }
  };
});
