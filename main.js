
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
    let sidemenu = document.getElementById("sidemenu");

    function openmenu() {
        sidemenu.style.right = "0";
    }

    function closemenu() {
        sidemenu.style.right = "-200px";
    }

    window.closeMenuOnClick = closemenu; 
    window.openmenu = openmenu; 
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


// main.js

// document.addEventListener('DOMContentLoaded', function () {
//   var dynamicContent = document.getElementById('dynamicContent');

//   var names = ['Abdullah', 'John', 'Jane', 'Doe']; // Add more names as needed

//   var swiper = new Swiper('.swiper-container', {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: true,
//     autoplay: {
//       delay: 3000,
//     },
//     on: {
//       slideChange: function () {
//         var currentIndex = swiper.activeIndex % names.length;
//         dynamicContent.innerText = names[currentIndex];
//       },
//     },
//   });
// });

