// script.js

// emailjs.init("oeczAqi6w0uttZPIh");

// function sendEmail(event) {
//   event.preventDefault();

//   // Get the form element
//   const form = document.getElementById("contactForm");

//   // Send the form using EmailJS
//   emailjs.sendForm("service_inlr4va", "template_7hcp4rl", form)
//     .then(
//       (result) => {
//         console.log(result.text);
//         alert("Email sent successfully");
//         form.reset();
//       },
//       (error) => {
//         console.log(error.text);
//         alert("Failed to send email");
//       }
//     );
// }
const SendMail=()=>{
    let params ={
        user_name:document.getElementById('user_name').value,
        user_email:document.getElementById('user_email').value,
        message:document.getElementById('message').value
    }
    emailjs.send('service_9b7ik8d','template_0inbgai', params).then(function(res){
        alert('successful' + res.status);
    })
}
