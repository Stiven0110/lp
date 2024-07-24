
$(document).ready(function () {
    var owlOptions1 = {
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



function getRegistrationForm() {
  return `
    <form class="row" method="post" id="form-registrarme" data-ic-profiling-form="FORM_MS">
      <div class="col-md-12 my-1 my-md-2">
        <input type="text" class="w-100 form-group form-control py-1 px-3" placeholder="Nombres" name="firstname" id="firstname" required aria-required="true" required oninvalid="this.setCustomValidity('Por favor, ingrese su nombre')" oninput="this.setCustomValidity('')">
      </div>
      <div class="col-md-12 my-1 my-md-2">
        <input type="text" class="w-100 form-group form-control py-1 px-3" placeholder="Apellidos" name="lastname" id="lastname" required oninvalid="this.setCustomValidity('Por favor, ingrese su apellido')" oninput="this.setCustomValidity('')">
      </div>
      <div class="col-md-12 my-1 my-md-2">
        <input type="text" class="w-100 form-group form-control py-1 px-3" placeholder="Teléfono" name="phone" id="phone" required oninvalid="this.setCustomValidity('Por favor, ingrese su telefono')" oninput="this.setCustomValidity('')">
      </div>
      <div class="col-md-12 my-1 my-md-2">
        <input type="email" class="w-100 form-group form-control py-1 px-3" placeholder="Correo electrónico" name="email" id="email" aria-required="true" required oninvalid="this.setCustomValidity('Por favor, ingrese su correo')" oninput="this.setCustomValidity('')">
      </div>
      <div class="col-md-12 my-1 my-md-2">
        <select name="program" id="program" class="form-control py-1 px-3 w-100" required oninvalid="this.setCustomValidity('Por favor, seleccione un programa')" oninput="this.setCustomValidity('')">
          <option value="">Selecciona un programa</option>
          <option id="P72" value="P72">Maestría en Psicopedagogía y Orientación Tutorial Educativa online</option>
          <option id="P70" value="P70">Maestría en Gestión e Innovación Educativa online</option>
          <option id="P69" value="P69">Maestría en Administración de Negocios y Finanzas Internacionales - MBA Internacional online</option>
          <option id="P68" value="P68">Maestría en Administración Pública online</option>
          <option id="P71" value="P71">Maestría en Bioética y Bioderecho online</option>
        </select>
      </div>
      <div class="col-md-12 mt-3 text-left">
        <input type="checkbox" name="contactByWhatsapp" id="contactByWhatsapp">
        &nbsp;
        <label for="contactByWhatsapp">¿Acepta ser contactado por WhatsApp?</label>
      </div>
      <div class="col-md-12 text-left btnAcepto">
        <input type="checkbox" name="termsAndConditionsAccepted" id="termsAndConditionsAccepted" value="true" required oninvalid="this.setCustomValidity('Por favor, acepte los términos y condiciones')" oninput="this.setCustomValidity('')">
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
        <button type="submit" id="submit-btn" class="btn w-100 btn bg-verde blanco" >ENVIAR</button>
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


document.getElementById('form-registrarme').addEventListener('submit', function(event) {
  if (this.checkValidity()) {
    // Intentar redirigir
    window.location.href = "https://virtual.ucss.edu.pe/t/p/B_Posgrados/content";
  } else {
    // Si el formulario no es válido, evitar el envío
    event.preventDefault();
    alert('Por favor, completa todos los campos requeridos.');
  }
});