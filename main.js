
const SendMail=()=>{
    let params ={
        user_name:document.getElementById('user_name').value,
        user_email:document.getElementById('user_email').value,
        message:document.getElementById('message').value
    }
    emailjs.send('service_9b7ik8d','template_0inbgai', params).then(function(res){
        alert('successful' + res.status);
    })
};

document.addEventListener("DOMContentLoaded", function () {
  let navbar = document.getElementById("sidemenu");

  function openNavbar() {
    navbar.style.right = "0";
  }

  function closeNavbar() {
    navbar.style.right = "-200px";
  }

  window.closeNavbar = closeNavbar;
  window.openNavbar = openNavbar;

  // ... (rest of your code)
});




document.addEventListener("DOMContentLoaded", function () {
    let tablinks = document.getElementsByClassName("tab-links");
    let tabcontents = document.getElementsByClassName("tab-contents");

    const opentab = (tabname) => {
        for (tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    };

    // Assigning the opentab function to the onclick event of each tab link
    for (tablink of tablinks) {
        tablink.onclick = function (event) {
            opentab(this.getAttribute("data-tabname"));
        };
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let navbar = document.getElementById("navbar");
    let navHeader = document.querySelector(".nav-header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("nav-scroll");
            navHeader.classList.add("no-border");
        } else {
            navbar.classList.remove("nav-scroll");
            navHeader.classList.remove("no-border");
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
  const messageIcon = document.getElementById('messageIcon');
  const socialIcons = document.getElementById('socialIcons');

  messageIcon.addEventListener('click', function (event) {
    event.stopPropagation(); // Prevent the click event from reaching the document click listener
    // Toggle the social icons visibility
    socialIcons.style.display =
      socialIcons.style.display === 'flex' ? 'none' : 'flex';
  });

  // Close the social icons when clicking outside
  document.addEventListener('click', function () {
    socialIcons.style.display = 'none';
  });
});




