function envioCorreo(messagePara,messageBuceo,messagePReal,messageTReal,messagePTabla,messageTTabla,messageGRep){
var data = {
  service_id: 'service_46usxmj',
  template_id: 'template_prxy9mh',
  user_id: 'user_j2TxB8ZQtFXXf8WKVEqYO',
  template_params: {
      'from_name': 'BuceoCoder',
      'to_name': messagePara,
      'buceo': messageBuceo,
      'preal':messagePReal,
      'treal':messageTReal,
      'ptabla':messagePTabla ,
      'ttabla':messageTTabla,
      'grep':messageGRep,
    }
};

$.ajax('https://api.emailjs.com/api/v1.0/email/send', {
  type: 'POST',
  data: JSON.stringify(data),
  contentType: 'application/json'
}).done(function() {
  console.log('Your mail is sent!');
}).fail(function(error) {
  console.log('Oops... ' + JSON.stringify(error));
})
}

