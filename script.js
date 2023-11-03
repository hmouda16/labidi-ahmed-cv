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
    "Bonjour, je me présente je m'appelle Ahmed . Ayant obtenu mon titre de Développeur Web et Web Mobile, je souhaite poursuivre dans cette voie en alternance, avec pour objectif de continuer à évoluer et à développer mes compétences."
  ],
  typeSpeed: 5,
  backSpeed: 0,
  loop: true,
});

//compteur
// let compteur = 0;

// $(window).scroll(function () {
//   const top = ($(".counter").offset().top = window.innerHeight);

//   if (compteur == 0 && $(window).scrollTop() > top) {
//     $(".counter-value").each(function () {
//       let $this = $(this),
//         countTo = $this.attr("data-count");
//       $({
//         countNum: $this.text(),
//       }).animate(
//         {
//           countNum: countTo,
//         },
//         {
//           duration: 10000,
//           easing: "swing",
//           step: function () {
//             $this.text(Math.floor(this.countNum));
//           },
//           complete: function () {
//             $this.text(this.countNum);
//           },
//         }
//       );
//     });
//     compteur = 1;
//   }
// });


/*EXPERIENCE*/

window.addEventListener("scroll", function () {
  var section = document.getElementById("experience");
  var position = section.getBoundingClientRect();

  /* Si la section est dans la vue, ajoutez la classe d'animation */
  if (position.top >= 0 && position.bottom <= window.innerHeight) {
    section.classList.add("fadeIn");
  }
});


/*********************** AOS *****************/
AOS.init();
