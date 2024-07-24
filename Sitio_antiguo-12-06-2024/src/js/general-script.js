document.addEventListener("DOMContentLoaded", function() {
    var popup_post = document.getElementById("popup_post");
    var closeButton = document.getElementById("close_post");
    var clausulaLink = document.getElementById("clausula_link");

    // Cerrar el popup al hacer clic en el botón de cierre
    closeButton.addEventListener("click", function() {
        popup_post.style.display = "none";
    });

    // Cerrar el popup al hacer clic fuera de él
    window.addEventListener("click", function(event) {
        if (event.target === popup_post) {
            popup_post.style.display = "none";
        }
    });

    // Mostrar el popup al hacer clic en el enlace de Cláusula
    clausulaLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        popup_post.style.display = "block";
    });
});


function eliminarCookies() {
	document.cookie.split(";").forEach(function(c) {
	  document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
	});
  }

$(document).ready(function () {
	eliminarCookies();
	var carousel_index = $('#carousel-index');
	var carousel_img = $('#carousel-img');
	var carousel_circles = $('#carousel-circles');
	var carousel_beneficios = $('#carousel-beneficios-mobile');
	var carousel_beneficios_desk = $('#carousel-beneficios-desktop');
	var carousel_aliados = $('#carousel-aliados');


	carousel_index.owlCarousel({
		loop: false,
		margin: 10,
		dots: false,
		autoplay: false,
		mouseDrag: false,
		responsive: {
			0: {
				items: 1
			}
		}
	});

	carousel_img.owlCarousel({
		loop: true,
		margin: 10,
		dots: true,
		autoplay: true,
		autoplayTimeout: 7000,
		smartSpeed: 6000,
		responsive: {
			0: {
				items: 1
			}
		}

	});

	carousel_circles.owlCarousel({
		mouseDrag: false,
		loop: false,
		margin: 5,
		dots: false,
		autoplay: false,
		autoplayTimeout: 7000,
		smartSpeed: 6000,
		mouseDrag: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 3
			}
		}
	});
	carousel_beneficios.owlCarousel({
		loop: true,
		margin: 10,
		dots: true,
		autoplay: false,
		autoplayTimeout: 7000,
		smartSpeed: 6000,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 4
			}
		}
	});
	carousel_beneficios_desk.owlCarousel({
		loop: true,
		margin: 10,
		dots: true,
		autoplay: false,
		autoplayTimeout: 7000,
		smartSpeed: 6000,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 4
			}
		}
	});
	carousel_aliados.owlCarousel({
		loop: false,
		margin: 10,
		dots: true,
		autoplay: false,
		autoplayTimeout: 7000,
		smartSpeed: 6000,
		responsive: {
			0: {
				items: 4
			}
		}
	});

	var carousel_acreditaciones = $('#acreditaciones-c');

	carousel_acreditaciones.owlCarousel({
		loop: false,
		margin: 20,
		dots: true,
		autoplay: false,
		mouseDrag: true,
		responsive: {
			0: {
				items: 2,
				margin: 10
			},
            768: {
                items: 5
            }
		}
	});
	$('.fa-bars').click(function() {
		$('.menu-content').toggleClass('active');
		$('#fa-bars').toggleClass('fa-bars');
		$('#fa-bars').toggleClass('fa-close');
	});

	let cards = document.querySelectorAll(".accordian-item");
	[...cards].forEach((card) => {
		card.addEventListener("click", function () {

			
			$(".accordian-item .answer")
				.not($(this).find(".answer"))
				.removeClass("open");

			$(".accordian-item i")
				.not($(this).find("i"))
				.removeClass("fa-plus")
				.addClass("fa-plus");
			$(this).find(".accordian-link , .answer").toggleClass("open");
			$(this).find("i").toggleClass("fa-plus");
			$(this).find("i").toggleClass("fa-minus");

		});
	});
	
	$('.btn-show-hide').click(function() {
		if($(this).attr('id') == 'cs-btn') {
			$('.cards-carreras').css('display', 'none');
			$('.cards-carreras.ciencias-salud').css('display', 'block');
		} else if ($(this).attr('id') == 'ce-btn') {
			$('.cards-carreras').css('display', 'none');
			$('.cards-carreras.ciencias-economicas').css('display', 'block');
			
		}else if ($(this).attr('id') == 'dycp-btn') {
			$('.cards-carreras').css('display', 'none');
			$('.cards-carreras.derecho-ciencias').css('display', 'block');

		}else if ($(this).attr('id') == 'all-btn') {
			$('.cards-carreras').css('display', 'block');
		}
	});

	$('.categoria').click(function() {
		$('.categoria').find('i').removeClass('fa-minus-circle');
		$('.categoria').find('i').addClass('fa-plus-circle');
		$(this).find('i').toggleClass('fa-plus-circle');
		$(this).find('i').addClass('fa-minus-circle');
		if($(this).attr('id') == 'title-cs') {
			$('.cards-desktop').css('display', 'none');
			$('.cards-desktop.cs').css('display', 'block');
		} else if ($(this).attr('id') == 'title-ce') {
			$('.cards-desktop').css('display', 'none');
			$('.cards-desktop.ce').css('display', 'block');
			
		}else if ($(this).attr('id') == 'title-cp') {
			$('.cards-desktop').css('display', 'none');
			$('.cards-desktop.cp').css('display', 'block');
		}
	});
	
	$("a").click(function (event) {
		if ($(this).attr('href', $(this).attr('href'))) {
			
		} else {
			event.preventDefault();
			// event.preventDefault();
		}

		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top - 20
		}, 500);
	});

	$('#carousel-index').hover(function(){
		$('.links-c.maestrias').css('display','none');
		$('.links-c.pregrados').css('display','none');
		
	});
	$('.pregrados-c.pregrados').hover(function(){
		$('.links-c.maestrias').css('display','none');
		$('.links-c.pregrados').css('display','block');
		
	});
	$('.pregrados-c.postgrados').hover(function(){
		$('.links-c.pregrados').css('display','none');
		$('.links-c.maestrias').css('display','block');
	});


	$('.pregrados-hover').click(function(){
		$('.pregrados-hover .fa ').toggleClass('fa-plus');
		$('.pregrados-hover .fa ').toggleClass('fa-minus');
		
		$('.pregrados-submenu').toggleClass('active');
	})
	$('.posgrados-hover').click(function(){
		$('.posgrados-hover .fa ').toggleClass('fa-plus');
		$('.posgrados-hover .fa ').toggleClass('fa-minus');
		
		$('.posgrados-submenu').toggleClass('active');
	})
	$(document).ready(function () {
		var $pregradoNav = $('.pregrados-c.pregrado-nav');
		var $postgradoNav = $('.pregrados-c.postgrado-nav');
		var $linksPregrados = $('.links.pregrados');
		var $linksPostgrados = $('.links.postgrados');
		var $carouselIndex = $('#carousel-index');
	
		// Función para mostrar el menú de pregrado y ocultar el de postgrado
		function mostrarMenuPregrado() {
			$linksPregrados.show();
			$linksPostgrados.hide();
		}
	
		// Función para mostrar el menú de postgrado y ocultar el de pregrado
		function mostrarMenuPostgrado() {
			$linksPregrados.hide();
			$linksPostgrados.show();
		}
	
		// Evento mouseenter para mostrar el menú de pregrado
		$pregradoNav.hover(mostrarMenuPregrado);
	
		// Evento mouseenter para mostrar el menú de postgrado
		$postgradoNav.hover(mostrarMenuPostgrado);
	
		// Evento mouseleave para ocultar todos los menús
		$carouselIndex.mouseleave(function () {
			$linksPregrados.hide();
			$linksPostgrados.hide();
		});
	
		// Evento scroll para ocultar los menús al hacer scroll
		$(window).scroll(function () {
			$linksPregrados.hide();
			$linksPostgrados.hide();
		});
	
		// Evento mouseleave para ocultar los menús cuando el mouse está fuera de la ventana
		$(document).mouseleave(function (event) {
			if (event.clientY < 0) {
				$linksPregrados.hide();
				$linksPostgrados.hide();
			}
		});
	
		// Ocultar todos los menús al cargar la página
		$linksPregrados.hide();
		$linksPostgrados.hide();
	});
	

});
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
});