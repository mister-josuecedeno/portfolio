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

// Add a Let's Connect Pop-up

// sweet button hire me
function sweetAlert() {
  Swal.fire({
    /* Popup window position, can be 'top', 'top-start', 'top-end', 
    'center', 'center-start', 'center-end', 'bottom', 'bottom-start', 
    or 'bottom-end'.*/
    position: 'center',
    //icon: 'success',
    showCloseButton: true,
    width: 400,
    title: 'Email Me:',
    html: '<form id="form" class="php-email-form">' +
      '<div class="form-group"><label>Your Name</label><input type="text" class="form-control" required name="from_name" /></div>' +
      '<div class="form-group"><label>Your Email</label><input type="email" class="form-control" name="reply_to" /></div>' +
      '<div class="form-group"><label>Subject</label><input type="text" name="subject" required class="form-control" /></div>' +
      '<div class="form-group"><label>Message</label><textarea type="text" class="form-control" required' +
      'name="message"></textarea></div>' +
      '<div class="form-group"><input id="button" type="submit" value="Send Email" class="btn btn-primary" /></div>' +
      '</form>',
    //html: '<form id="form"><div class="form-group"><label>Name</label><input type="text" class="form-control" required name="from_name" /></div><div class="form-group"><label>Email</label><input type = "email" class="form-control" name="reply_to" /></div><div class="form-group"><label>Subject</label><input type="text" name="subject" required class="form-control" /></div><div class="form-group"><label>Message</label><textarea type="text" class="form-control" required name="message"></textarea></div><div class="form-group"><input id="button" type="submit" value="Send Email" class="btn btn-primary" /></div></form>',
    showConfirmButton: false,
  });
}