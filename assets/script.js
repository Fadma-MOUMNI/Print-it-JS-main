const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
//Les Variables 
const arrowLeft = document.querySelector(".arrow_left");// creer la variable "arrowLeft"
const arrowRight = document.querySelector(".arrow_right");// creer la variable "arrowRight"
const image = document.getElementById("imageSlide");
const tagText = document.getElementById("textSlide");

//changer le curseur de la souris lorsqu'il survole les flèches du diaporama.
arrowLeft.addEventListener("mouseover", () => {
  arrowLeft.style.cursor = "pointer";
});

arrowRight.addEventListener("mouseover", () => {
  arrowRight.style.cursor = "pointer";

});



// les points
const Dots = document.querySelector(".dots"); // récupération de la div ".dots"
// Ajout automatiquement d'un point pour chaque diapositive
for (let i = 0; i < slides.length; i++) {
  const point = document.createElement("span"); // creation d'un span
  Dots.appendChild(point); // ajout de point au div parent// Prends(point) et mets-le dans (Dots).
  point.classList.add("dot"); //ajout de la class "dot"
}

// Récupération des points
const LesPoint = Dots.querySelectorAll(".dot");// tout les element avec la class ".dot"
let activeDot = 0;
// Ajout de la classe "dot_selected" sur le premier point
LesPoint[activeDot].classList.add("dot_selected");

//mettre à jour visuellement les points indicateurs lorsque la diapositive change.
function updateDote(prev, activeSlide) {
  LesPoint[prev].classList.remove("dot_selected");
  LesPoint[activeSlide].classList.add("dot_selected");
}



//les slides 
let activeSlide = 0;// Initialise une variable pour suivre l'index de la diapositive actuellement active,
// en commençant par la première diapositive (index 0).



//mettre à jour l'image et le texte affichés en fonction de l'indice de slide active
function updateSlide(activeSlide) {
  //mettre à jour l'image en remplaçant la source de l'image par celle de la diapositive active dans le tableau slides.
  image.setAttribute('src', './assets/images/slideshow/' + slides[activeSlide].image);
  //mettre à jour le texte en remplaçant le contenu HTML(tagText) par le texte de la diapositive active dans le tableau slides. 
  tagText.innerHTML = slides[activeSlide].tagLine;

}
//****slide suivant
function nextSlide() {
  // index de l'element precedent 
  let prev = activeSlide;//crée la variable 'prev' qui stocke l'index de la diapositive actuellement active avant de changer d'index.
  activeSlide++;// incrémente la valeur de activeSlide de 1
  console.log(activeSlide);
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  updateSlide(activeSlide);//mettre à jour l'image et le texte affichés en fonction de l'indice de la diapositive active.
  updateDote(prev, activeSlide);
}


//  slide précédent
function prevSlide() {

  let prev = activeSlide;//crée la variable 'prev' qui stocke l'index de la diapositive actuellement active avant de changer d'index.
  activeSlide--;// décrémentation de l'index pour passer à la diapositive précédente
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;// revenir à la dernière diapositive si on est sur la première diapositive
  }
  console.log(activeSlide);

  updateSlide(activeSlide);// mise à jour de l'affichage avec la nouvelle diapositive active
  updateDote(prev, activeSlide);// mise à jour des points indicatifs avec la nouvelle diapositive active

}





// le défilement automatique
setInterval("nextSlide()", 5000);



