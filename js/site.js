const btn = document.getElementById('button');

let myForm = document.getElementById('form');
myForm.addEventListener('submit', function (event) {
  event.preventDefault();

  btn.value = 'Sending...';

  const serviceID = 'default_service';
  const templateID = 'template_gotos3l';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      // alert('Sent!');
      Swal.fire({
        title: 'Email Sent',
        text: 'Your email was sent successfully. I will respond within 24 hours.',
        icon: 'success',
        confirmButtonText: 'Excellent!'
      })
      myForm.reset();
    }, (err) => {
      btn.value = 'Send Email';
      Swal.fire({
        title: 'Error!',
        html: 'Looks like something went wrong! <hr /> I\'m always available on <a href="https://www.linkedin.com/in/josuecedeno/" target="_blank">LinkedIn</a>',
        icon: 'error',
        confirmButtonText: 'Try Again'
      })
      // alert(JSON.stringify(err));
    });
});