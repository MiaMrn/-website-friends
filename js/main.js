//------------------------------------------------------Tabs System

const tabs = document.querySelectorAll(".tabs a");
// Modification des Tabs au click
tabs.forEach(tab => {
    tab.addEventListener("click", function (e) {
        afficherOnglet(this);
    })
})
// Modification des Tabs en fonction de l'URL
let hash = window.location.hash;
let a = document.querySelector("a[href='" + hash + "']");
console.log(a);
if (a && !a.classList.contains("active")) {
    afficherOnglet(a);

}


//------------------------------------------------------Characters gallery
const characters = document.querySelectorAll('.character');
const pictures = [
    "images/rachel",
    "images/ross",
    "images/monica",
    "images/joey",
    "images/phoebe",
    "images/chandler",
];

const youngPictures = [...pictures].map(item => item + '.jpg');
const oldPictures = [...pictures].map(item => item + '-2020.jpg');

characters.forEach((character, index) => {
    const btnPerso = character.querySelector('.buttons__older');

    olderBackground(btnPerso, character, youngPictures[index], oldPictures[index]);
})

//------------------------------------------------------Functions
function afficherOnglet(a) {
    const li = a.parentNode;
    const div = a.parentNode.parentNode.parentNode;
    const actif = div.querySelector(".tabs .active");
    //const activeTab = div.querySelector(".tab__content.active");
    //const aAfficher = div.querySelector(a.getAttribute("href"));
    // On sort de la fonction si l'onglet cliqué est déjà l'onglet actif
    if (li.classList.contains("active")) {
        return false;
    }
    // On retire la class active sur l'onglet qui l'avait
    actif.classList.remove("active");
    // On ajoute à la class active sur l'onglet cliqué
    li.classList.add("active");
    // On retire la class active sur le contenu qui l'avait
    div.querySelector(".tab__content.active").classList.remove("active");
    // On ajoute la class active sur le contenu qui correspond à l'onglet cliqué
    div.querySelector(a.getAttribute("href")).classList.add("active");
    // activeTab.classList.add("fade");
    // activeTab.classList.remove("in");
    // activeTab.addEventListener("transitionend", function () {
    //     this.classList.remove("fade");
    //     this.classList.remove("active");
    //     aAfficher.classList.add("active");
    //     aAfficher.classList.add("fade");
    //     aAfficher.classList.add("in");
    // })
}

/*
 * 
 * @param {*} btn - Button qui trigger
 * @param {*} div - Div du personnage
 * @param {*} youngImage - L'image jeune
 * @param {*} oldImage - L'image vieille
 */
function olderBackground(btn, div, youngImage, oldImage) {
    btn.addEventListener("mousedown", function () {
        const parent = this.parentNode;
        const spoiler = parent.querySelector(".buttons__spoiler");
        spoiler.style.display = "none";
        div.style.backgroundImage = `url(${oldImage})`;

    });
    btn.addEventListener("mouseup", function () {
        const parent = this.parentNode;
        const spoiler = parent.querySelector(".buttons__spoiler");
        spoiler.style.display = "block";
        div.style.backgroundImage = `url(${youngImage})`;
    })
}