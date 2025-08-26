// 1. Data
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// 2. Sélection DOM
const bannerImg = document.querySelector(".banner-img");
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const dots = Array.from(document.querySelectorAll(".dots .dot"));

// 3. Variable globales
const basePath = "./assets/images/slideshow/";
let index = 0;

// 4. Fonction (afficher img + texte + dots)
function render() {
	console.log ("===RENDER===");
	console.log ("Index actuel :", index);
	console.log ("image à afficher :", slides[index].image);
	const targetSrc = basePath + slides[index].image;

	if (bannerImg.getAttribute("src") !== targetSrc){
		console.log ("changement d'image");
		bannerImg.setAttribute("src", targetSrc);
	}

	else{
		console.log ("Aucun changement effectué (même image)");
	}
}

// 5. Fonctions navigation flèches
function prev(){
	console.log("===PREV===");
	console.log("Ancien index :", index);
	index = (index - 1 + slides.length) % slides.length;
	console.log("Nouvel index", index);
	render()
}

leftArrow.addEventListener("click", () => {
	console.log("Clic flèche GAUCHE");
	prev()
})

function next(){
	console.log("===NEXT===");
	console.log("Ancien index :", index);
	index = (index + 1) % slides.length;
	console.log("Nouvel index :", index);
	render();
}

rightArrow.addEventListener("click",() => {
	console.log("Clic flèche DROITE");
	next();
})

