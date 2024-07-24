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
 var btnModal2 = document.querySelector(".BtnModal2");

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
btnModal2.onclick = function() {
  modalBtn.style.display = "flex";
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


function getRegistrationForm() {
  return `
    <form class="row" method="post" action="" id="form-registrarme" data-ic-profiling-form="FORM_MS" validate>
      <div class="col-md-12 my-1 my-md-2">
          <input type="text" class="w-100 form-group form-control py-1 px-3" placeholder="Nombres" name="firstname" id="firstname" required>
      </div>
      <div class="col-md-12 my-1 my-md-2">
          <input type="text" class="w-100 form-group form-control py-1 px-3" placeholder="Apellidos" name="lastname" id="lastname" required>
      </div>
      <div class="col-md-12 my-1 my-md-2">
          <input type="text" class="w-100 form-group form-control py-1 px-3" placeholder="Teléfono" name="phone" id="phone" required>
      </div>
      <div class="col-md-12 my-1 my-md-2">
          <input type="text" class="w-100 form-group form-control py-1 px-3" placeholder="Correo electrónico" name="email" id="email" required>
      </div>
      <div class="col-md-12 my-1 my-md-2">
          <select name="program" id="program" class="form-control py-1 px-3 w-100" required>
              <option value="">Selecciona un programa</option>
              <option id="P65" value="P65">Pregrado en Derecho online</option>
              <option id="P63" value="P63">Pregrado en Contabilidad online</option>
              <option id="P62" value="P62">Pregrado en Administración online</option>
              <option id="P64" value="P64">Pregrado en Economía online</option>
          </select>
      </div>
      <div class="col-md-12 mt-3 text-left">
          <input type="checkbox" name="contactByWhatsapp" id="contactByWhatsapp">
          &nbsp;
          <label for="contactByWhatsapp">¿Acepta ser contactado por WhatsApp?</label>
      </div>
      <div class="col-md-12 text-left btnAcepto">
          <input type="checkbox" name="termsAndConditionsAccepted" id="termsAndConditionsAccepted" value="true" required>
          &nbsp;
          <label for="termsAndConditionsAccepted" class="aceptoP">
              He leído y acepto la 
              <a href="https://www.ucss.edu.pe/terminos-condiciones" target="_blank" rel="noopener noreferrer" class="politicas">
                      <u> Política de Privacidad.</u>
              </a>
          </label>
      </div>
      <input name="habeasDataAccepted" id="habeasDataAccepted" style="display: none;" value="true">
      <label for="habeasDataAccepted" style="display: none;">Habeasdata</label>
      <input name="academicLevel" id="academicLevel" style="display:none;" value="PR">
      <label style="display:none;">academicLevel</label>
      <div class="col-4 col-md-2 mt-3">
          <button type="submit" class="" id="submit-btn"  >ENVIAR</button>
      </div>
  </form>
`;
}

// Función para renderizar el formulario en un contenedor específico
function renderForm(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = getRegistrationForm();
}

// Llamada a la función para renderizar el formulario en un contenedor con ID 'form-container'
renderForm('form-container1');
renderForm('form-container2');


document.getElementById('submit-btn').addEventListener('click', function() {
  // Validar el formulario antes de enviarlo
  if (document.getElementById('form-registrarme').checkValidity()) {
      // Si el formulario es válido, redirigir a la página especificada
      window.location.href = "https://virtual.ucss.edu.pe/t/p/B_Posgrados/content";
  } else {
      // Si el formulario no es válido, mostrar mensajes de error si es necesario
      alert('Por favor, completa todos los campos requeridos.');
  }
});