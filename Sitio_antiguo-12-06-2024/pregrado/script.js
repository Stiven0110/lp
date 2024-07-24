$(document).ready(function () {
	var mostrarPopupBtn = document.getElementsByClassName("contenedorBtnAside")[0];
	eliminarCookies();
	$('.form-popup').click(function (event) {
		event.preventDefault();
		$('#popup-form').toggleClass('active');
	});
	$('.fa-close').click(function (event) {
		event.preventDefault();
		$('#popup-form').toggleClass('active');
		mostrarPopupBtn.style.display = "none"; 
	});
})



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

$(document).ready(function() {
	var carousel_cec = $('#cec-carousel');

	carousel_cec.owlCarousel({
		loop: false,
		margin: 20,
		dots: true,
		autoplay: false,
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
	var carousel_cs = $('#cs-carousel');

	carousel_cs.owlCarousel({
		loop: false,
		margin: 20,
		dots: true,
		autoplay: false,
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
	var carousel_cp = $('#cp-carousel');

	carousel_cp.owlCarousel({
		loop: false,
		margin: 20,
		dots: true,
		autoplay: false,
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
	var carousel_cs = $('#cs-carousel');

	carousel_cs.owlCarousel({
		loop: false,
		margin: 20,
		dots: true,
		autoplay: false,
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
	$("a").click(function (event) {
		if ($(this).attr('href', $(this).attr('href'))) {
			
		} else {
			event.preventDefault();
			// event.preventDefault();
		}

		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top - 300
		}, 500);
	});
})
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
});