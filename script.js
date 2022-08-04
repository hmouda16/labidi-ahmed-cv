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
    "Bonjour,je me présente je m'appelle Ahmed . De formation professionnelle en climatisation et livraison . Aujourd'hui je souhaiterais m'orienter vers une profession qui conviendrait à mes objectifs personnels. Depuis près de 6 mois j'ai décidé de me lancer en autodidacte dans l'apprentissage du code après mon travail dont j'ai démissionnée aujourd'hui pour pouvoir me former et acquérir plus d'expérience dans le domaine et en faire mon métier . Aujourd'hui Je suis actuellement à la recherche d'une entreprise pour une  alternance en développement web & web mobile.",
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
