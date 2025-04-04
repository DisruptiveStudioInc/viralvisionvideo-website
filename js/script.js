/* ============================================== */
/* PRELOADER */
/* ============================================== */

window.addEventListener("load", () => {
  const progress = document.getElementById("progress");
  const data = document.getElementById("data");
  const preloader = document.getElementById("preloader");

  let index = 0;
  let interval = setInterval(() => {
    if (index >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        preloader.classList.add("hidden"); // Activa el fade out con CSS
        setTimeout(() => {
          preloader.style.display = "none"; // Oculta completamente después del fade
      }, 200);
    }, 200);
  } else {
      index++;
      data.innerText = `${index}%`;
      progress.style.background = `conic-gradient(
          #F42B43 ${index * 3.6}deg,
           #222 ${index * 3.6}deg
      )`;
  }
}, 15);
});

/* ============================================== */
/* IMAGE MOBILE */
/* ============================================== */

function cambiarImagen() {
    const imagenes = [
        { id: "img_duda", srcDesktop: "./images/body/duda.webp", srcMobile: "./images/body/duda_mobile.webp" },
        { id: "img_points", srcDesktop: "./images/body/img_points.webp", srcMobile: "./images/body/img_points_mobile.webp" },
        { id: "img_inversion", srcDesktop: "./images/body/inversion.webp", srcMobile: "./images/body/inversion_mobile.webp" }
    ];

    const isMobile = window.innerWidth < 768;

    imagenes.forEach(img => {
        const elemento = document.getElementById(img.id);
        if (elemento) {
            elemento.src = isMobile ? img.srcMobile : img.srcDesktop;
        }
    });
}

// Ejecutar al cargar la página
cambiarImagen();

// Escuchar cambios de tamaño en la ventana
window.addEventListener("resize", cambiarImagen);

$(document).ready(function () {
    /* ============================================== */
    /* MENU HAMBURGUER */
    /* ============================================== */
    $('.hamburguer').click(function () {
        $('.navigation .menu').toggleClass('active');
        $(this).toggleClass("active");
    });

    $('.navigation a').click(function () {
        $('.navigation .menu').removeClass('active');
        $('.hamburguer').removeClass("active");
    });

    /* ============================================== */
    /* LANGUAGE SELECTOR */
    /* ============================================== */
    document.addEventListener("click", function (e) {
        var opciones = document.querySelector(".lan");
        var lanLink = document.querySelector(".btn-lan");
        var menu = document.querySelector(".navigation .menu");
        var hamburguer = document.querySelector(".hamburguer");

        if (!opciones || !lanLink) return;

        if (e.target.closest(".btn-lan")) {
            opciones.classList.toggle("active-lan");
            lanLink.classList.toggle("open");

            // Cierra el menú hamburguesa si está abierto
            if (menu.classList.contains("active")) {
                menu.classList.remove("active");
                hamburguer.classList.remove("active");
            }
        } else if (!e.target.closest(".lan") && opciones.classList.contains("active-lan")) {
            opciones.classList.remove("active-lan");
            lanLink.classList.remove("open");
        }
    });
});

/* ============================================== */
/* NAVIGATION */
/* ============================================== */

$(document).ready(function () {
    // NAVIGATION
    var sections = $('.anchor');
    var nav = $('nav .navigation');

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();
        
        sections.each(function() {
            var top = $(this).parent().offset().top;
            var bottom = top + $(this).parent().outerHeight();
        
            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');
                
                $(this).addClass('active');
                nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        var id = $(this).attr('href');
        
        $('html, body').stop().animate({
            scrollTop: $(id).offset().top
        }, 500, 'swing'); // Elimina la resta de nav_height

        return false;
    });

    // NUMBER ANCHOR
    $(".anchor").each(function(index) {
        $(this).attr("id", "anchor" + (index + 1));
    });

    // MENU GO
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').stop().animate({
                    scrollTop: target.offset().top
                }, 500, 'swing'); // Elimina la resta de nav_height

                return false;
            }
        }
    });
});


/* ============================================== */
/* SCROLL-MAGIC */
/* ============================================== */

$(document).ready(function() {

    // initialize controller
    var controller = new ScrollMagic.Controller();

    // velocidad
    var animationSpeed = 1;

    // tipos de animacion
    var animationInOut = Power3.easeInOut;
    var animationIn = Expo.easeIn;
    var animationOut = Expo.easeOut;
    var animationInOutQuart = Expo.easeInOutQuart;
    var animationLinear = Linear.easeNone;

    //*------------- SECTION ONE
    if (window.innerWidth >= 768) {

    var SECTION_ONE = new TimelineMax();

    // Page
    var hero = $(".section-one");
    var page_hero = $(hero).find(".hero");

    SECTION_ONE
    .fromTo(page_hero,animationSpeed,{scale: 1}, {scale: 0.8, animationOut},0)

    // ScrollMagic Scene
    new ScrollMagic.Scene({
        triggerElement: '.section-one',
        duration: "100%",
        triggerHook: 0
    })

    .setTween(SECTION_ONE)
    //.addIndicators()
    .addTo(controller);

    //*------------- SECTION TWO

    var parallax = new ScrollMagic.Scene({
        triggerElement: '.section-two',
        duration: "100%",
        triggerHook: 0
    })

    .setTween(TweenMax.fromTo(
        '.section-two > div',animationSpeed,
        {position: "fixed"},
        {position: "relative",ease:animationLinear}))
    //.addIndicators()
    .addTo(controller);


    //*------------- SECTION THREE


    var SECTION_THREE = new TimelineMax();

    // Page
    var Page = $(".section-three");
    var PageLeft = $(Page).find(".left");
    var PageRight = $(Page).find(".right");
    var PageCenter = $(Page).find(".center");
    var Letters = $(PageCenter).find(".mw-768");

    new ScrollMagic.Scene({
        triggerElement: '.section-three',
        duration:'100%',
        triggerHook: 0
    })

    .setPin('.section-three')
    //.addIndicators()
    .addTo(controller);

    SECTION_THREE

    .fromTo(PageLeft,animationSpeed,{x: "0%"}, {x: "-100%", animationOut},0)
    .fromTo(PageRight,animationSpeed,{x:  "0%"}, {x: "100%", animationOut},0)
    .fromTo(PageCenter,animationSpeed,{x: "0"}, {x: "0%", animationOut},0)
    .fromTo(Letters,animationSpeed,{opacity: 0, scale: 0.5}, {opacity: 1, scale: 1, animationOut},0)

    new ScrollMagic.Scene({
        triggerElement: '.section-three',
        duration: "100%",
        triggerHook: 0
    })

    .setTween(SECTION_THREE)
    //.addIndicators()
    .addTo(controller);


    //*------------- SECTION FOUR


    var SECTION_FOUR = new TimelineMax();

    var Card = $(".cards");
    var CardOne = $(Card).find(".card_one");
    var CardTwo = $(Card).find(".card_two");
    var CardThree = $(Card).find(".card_three");
    var CardFour = $(Card).find(".card_four");
    var CardFive = $(Card).find(".card_five");

    new ScrollMagic.Scene({
        triggerElement: '.cards',
        duration: '100%',
        triggerHook: 0
    })
    .setPin('.cards')
    //.addIndicators()
    .addTo(controller);

    var parallax = new ScrollMagic.Scene({
        triggerElement: '.img-points',
        duration: "100%",
        triggerHook: 1
    })
    .setTween(TweenMax.fromTo('.img-points > img',animationSpeed,{top: "-25%"},{top: "0%",ease:Power0.easeNone}))
    //.addIndicators()
    .addTo(controller);

    SECTION_FOUR
    .to('.img-points > img', 3, { scale: 1.2, ease: Power1.easeInOut }, 0)
    
    .fromTo(CardOne, animationSpeed, { opacity: 0, y: "10%" }, { opacity: 1, y: "-12%", ease: animationInOutQuart }, 0)
    .fromTo(CardTwo, animationSpeed, { opacity: 0, y: "10%",x: "3%" }, { opacity: 1, y: "-9%", ease: animationInOutQuart }, "+=1")
    .fromTo(CardThree, animationSpeed, { opacity: 0, y: "10%",x: "6%" }, { opacity: 1, y: "-6%", ease: animationInOutQuart }, "+=1")
    .fromTo(CardFour, animationSpeed, { opacity: 0, y: "10%",x: "9%" }, { opacity: 1, y: "-3%", ease: animationInOutQuart }, "+=1")
    .fromTo(CardFive, animationSpeed, { opacity: 0, y: "10%",x: "12%" }, { opacity: 1, y: "0%", ease: animationInOutQuart }, "+=1")
    .to('.img-points > img', 3, { scale: 1, ease: Power1.easeInOut }, "+=1");
        
    new ScrollMagic.Scene({
        triggerElement: '.cards',
        duration: '100%',
        triggerHook: 0
    })
    .setTween(SECTION_FOUR) // Añade la animación al ScrollMagic Scene
    //.addIndicators()
    .addTo(controller);


    //*------------- SECTION FIVE

        var Scene = new ScrollMagic.Scene({
            triggerElement: '.images_youtubers',
            duration: "90%",
            triggerHook: 0.8
            //reverse: false
        })
        .setClassToggle('.images_youtubers', 'fade-in')
        //.addIndicators()
        .addTo(controller);


    //*------------- SECTION SEVEN


    var Scene = new ScrollMagic.Scene({
        triggerElement: '.map',
        triggerHook: 0.6
    })
    .setClassToggle('.map', 'fade-in')
    //.addIndicators()
    .addTo(controller);

    var SECTION_SEVEN = new TimelineMax();

    var bg_grad = $(".bg_grad_sec");
    var map = $(bg_grad).find(".map");
    var text = $(bg_grad).find(".t-c");

    SECTION_SEVEN
        .fromTo(map, animationSpeed, { scale: 0.8 }, { scale: 1, ease: animationInOut }, 0)
        .fromTo(text, animationSpeed, { scale: 0.8, y:"0%" }, { scale: 1, y:"10%", ease: animationInOut }, 0)
        
    new ScrollMagic.Scene({
        triggerElement: '.bg_grad_sec',
        triggerHook: 0
    })
    .setTween(SECTION_SEVEN) // Añade la animación al ScrollMagic Scene
    //.addIndicators()
    .addTo(controller);


    //*------------- SECTION EIGHT


    var SECTION_EIGHT = new TimelineMax();

    var inversion = $(".inversion");
    var imginversion = $(inversion).find(".img-inversion");
    var textinversion = $(inversion).find(".text-inversion");

    SECTION_EIGHT
        .fromTo(imginversion, animationSpeed, { opacity:0, x: "20%" }, { opacity:1, x: "0%", ease: animationInOut }, 0)
        .fromTo(textinversion, animationSpeed, { opacity:0, x: "-20%" }, {opacity:1, x: "0%", ease: animationInOut }, 0)
        
    new ScrollMagic.Scene({
        triggerElement: '.inversion',
        duration: '50%',
        triggerHook: 0.8
    })
    .setTween(SECTION_EIGHT) // Añade la animación al ScrollMagic Scene
    //.addIndicators()
    .addTo(controller);

    //*------------- SECTION NINE

    var SECTION_NINE = new TimelineMax();

    var footer = $(".super-footer");
    var text_footer = $(footer).find(".h1-super");

    SECTION_NINE
        .fromTo(text_footer, animationSpeed, { opacity:0, y: "20%", scale: 0.5 }, { opacity:1, y: "0%", scale: 1, ease: animationIn }, 0)
        
    new ScrollMagic.Scene({
        triggerElement: '.super-footer',
        triggerHook: 0.5
    })
    .setTween(SECTION_NINE) // Añade la animación al ScrollMagic Scene
    //.addIndicators()
    .addTo(controller);

    }


});

/* ============================================== */
/* SLICK */
/* ============================================== */

$(document).ready(function() {
    $('.banner ul').slick({
        dots: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 500,
        fade: false,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false
    });
});

/* ============================================== */
/* MODAL */
/* ============================================== */

// Función para abrir el modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.classList.add('open'); // Muestra el modal
    document.body.classList.add('no-scroll'); // Bloquea el scroll
}

// Función para cerrar el modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.classList.remove('open'); // Oculta el modal
    checkModalsOpen(); // Verifica si hay otros modales abiertos
}

// Función para verificar si hay modales abiertos y desbloquear el scroll
function checkModalsOpen() {
    var openModals = document.querySelectorAll('.modal.open');
    if (openModals.length === 0) {
        document.body.classList.remove('no-scroll'); // Reactiva el scroll
    }
}

// Función para cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
    var modal = document.getElementById("Modal");
    if (event.target === modal) {
        closeModal("Modal");
    }
}

/* ============================================== */
/* MODAL VIDEOS */
/* ============================================== */

document.addEventListener("DOMContentLoaded", function () {
    function openVideoModal(modalId, videoId, videoSrc) {
        let modal = document.getElementById(modalId);
        let iframe = document.getElementById(videoId);

        iframe.setAttribute("src", videoSrc + "?autoplay=1"); // Activa autoplay
        modal.classList.add("open"); // Muestra el modal
        document.body.classList.add('no-scroll'); // Bloquea el scroll
    }

    function closeVideoModal(modalId, videoId) {
        let modal = document.getElementById(modalId);
        let iframe = document.getElementById(videoId);

        iframe.setAttribute("src", ""); // Detiene el video
        modal.classList.remove("open"); // Oculta el modal
        checkModalsOpen(); // Verifica si hay otros modales abiertos
    }

    function checkModalsOpen() {
        let anyModalOpen = document.querySelectorAll('.modal.open').length > 0;
        if (!anyModalOpen) {
            document.body.classList.remove('no-scroll'); // Habilita el scroll solo si no hay ningún modal abierto
        }
    }

    document.getElementById("openVideoModalBtn1").addEventListener("click", function (event) {
        event.preventDefault();
        openVideoModal("Modal_1", "videoFrame1", "https://player.vimeo.com/video/1070541336");
    });

    document.getElementById("openVideoModalBtn2").addEventListener("click", function (event) {
        event.preventDefault();
        openVideoModal("Modal_2", "videoFrame2", "https://player.vimeo.com/video/1070541310");
    });

    document.getElementById("openVideoModalBtn3").addEventListener("click", function (event) {
        event.preventDefault();
        openVideoModal("Modal_3", "videoFrame3", "https://player.vimeo.com/video/1071136766");
    });

    document.getElementById("openVideoModalBtn4").addEventListener("click", function (event) {
        event.preventDefault();
        openVideoModal("Modal_4", "videoFrame4", "https://player.vimeo.com/video/1071137426");
    });

    document.getElementById("openVideoModalBtn5").addEventListener("click", function (event) {
        event.preventDefault();
        openVideoModal("Modal_5", "videoFrame5", "https://player.vimeo.com/video/1071138521");
    });

    document.getElementById("openVideoModalBtn6").addEventListener("click", function (event) {
        event.preventDefault();
        openVideoModal("Modal_6", "videoFrame6", "https://player.vimeo.com/video/1071138744");
    });

    document.querySelectorAll(".icon-close").forEach(function (closeBtn, index) {
        closeBtn.addEventListener("click", function () {
            closeVideoModal(`Modal_${index + 1}`, `videoFrame${index + 1}`);
        });
    });

    document.querySelectorAll(".modal").forEach(function (modal, index) {
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                closeVideoModal(`Modal_${index + 1}`, `videoFrame${index + 1}`);
            }
        });
    });
});







