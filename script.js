//NAVBAR
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 42) {
    navbar.style.top = "-50px";
  } else {
    navbar.style.top = "0";
  }
});

// TYPED
var typed = new Typed(".typed", {
  strings: [
    "Bonjour, je me présente je m'appelle Ahmed . Actuellement en formation au GRETA depuis le 7 novembre 2022 en développement web & web mobile, je viens vers vous pour une demande de stage .En formation nous apprenons les languages suivant  : HTML/CSS, JAVASCRIPT, PHP et MYSQL."
  ],
  typeSpeed: 5,
  backSpeed: 0,
  loop: true,
});

//compteur
let compteur = 0;

$(window).scroll(function () {
  const top = ($(".counter").offset().top = window.innerHeight);

  if (compteur == 0 && $(window).scrollTop() > top) {
    $(".counter-value").each(function () {
      let $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 10000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });
    compteur = 1;
  }
});

/*********************** AOS *****************/
AOS.init();
