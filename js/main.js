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





//------------------------------------------------------Characters modals
const btnModal = document.querySelectorAll(".buttons__spoiler");

btnModal.forEach(button => {
    button.addEventListener("click", openModal);
})







//------------------------------------------------------Functions
function afficherOnglet(a) {
    const li = a.parentNode;
    const div = a.parentNode.parentNode.parentNode;
    const actif = div.querySelector(".tabs .active");

    if (li.classList.contains("active")) {
        return false;
    }
    actif.classList.remove("active");
    li.classList.add("active");
    div.querySelector(".tab__content.active").classList.remove("active");
    div.querySelector(a.getAttribute("href")).classList.add("active");

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

function openModal(e) {
    e.preventDefault;
    const target = document.querySelector(e.target.getAttribute("href"));
    console.log(target);
}