$(document).ready(function () {
    var owlOptions1 = {
      nav: true,
      navText: ["<i class='fas fa-chevron-circle-left'  style='color: #E9004C;'></i>", "<i class='fas fa-chevron-circle-right' style='color: #E9004C;'></i>"],
      dots: true, // Habilita los puntos de navegación
      loop: true,
      margin: 10,
      center: true,
      autoplay: false, // Activar el autoplay
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 1
        },
        768: {
          items: 1
        },
        992: {
          items: 3
        }
      }
    };

    var owlOptions2 = {
      nav: false,
      // navText: ["<i class='fas fa-chevron-circle-left'  style='color: #E9004C;'></i>", "<i class='fas fa-chevron-circle-right' style='color: #E9004C;'></i>"],
      dots: true, // Habilita los puntos de navegación
      loop: true,
      margin: 10,
      center: true,
      autoplay: false, // Activar el autoplay
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 1
        },
        768: {
          items: 1
        },
        992: {
          items: 3
        }
      }
    };
    $("#carousel1").owlCarousel(owlOptions1);
    $("#carousel2").owlCarousel(owlOptions2);
  });


  let questions = document.querySelectorAll(".faq_question");

      questions.forEach((question) => {
        let icon = question.querySelector(".icon-shape");

        question.addEventListener("click", (event) => {
          const active = document.querySelector(".faq_question.active");
          const activeIcon = document.querySelector(".icon-shape.active");

          if (active && active !== question) {
            active.classList.toggle("active");
            activeIcon.classList.toggle("active");
            active.nextElementSibling.style.maxHeight = 0;
          }

          question.classList.toggle("active");
          icon.classList.toggle("active");

          const answer = question.nextElementSibling;

          if (question.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
          } else {
            answer.style.maxHeight = 0;
          }
        });
      });


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

 // Obtener el modal
 var modal = document.getElementById("myModal");
 var modalBtn = document.getElementById("myModalBtn");


 // Obtener el botón que abre el modal
 var btn = document.querySelector(".open-modal-btn");
 var btnModal = document.querySelector(".BtnModal");

 // Obtener el elemento <span> que cierra el modal
 var span = document.getElementsByClassName("close")[0];
 var spanBtn = document.getElementsByClassName("closeBtn")[0];

 // Cuando el usuario hace clic en el botón, abre el modal
 btn.onclick = function() {
     modal.style.display = "block";
 }
 btnModal.onclick = function() {
  modalBtn.style.display = "block";
}

 // Cuando el usuario hace clic en <span> (x), cierra el modal
 span.onclick = function() {
     modal.style.display = "none";
     modalBtn.style.display = "none";
 }
 spanBtn.onclick = function() {
  modalBtn.style.display = "none";
}

 // Cuando el usuario hace clic fuera del modal, cierra el modal
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }

 window.onclick = function(event) {
  if (event.target == modalBtn) {
      modalBtn.style.display = "none";
  }
}