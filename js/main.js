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

// //Rachel
// const rachel = document.querySelector(".rachel");
// const btnRachel = document.querySelector(".rachel .buttons__older");
// const rachelYoungPicture = "images/rachel.jpg";
// const rachelOldPicture = "images/rachel-2020.jpg";

// if (rachel && btnRachel && rachelOldPicture && rachelYoungPicture) {
//     olderBackground(btnRachel, rachel, rachelYoungPicture, rachelOldPicture);
// }

// //Ross
// const ross = document.querySelector(".ross");
// const btnRoss = document.querySelector(".ross .buttons__older");
// const rossYoungPicture = "images/ross.png";
// const rossOldPicture = "images/ross-2020.jpg";

// if (ross && btnRoss && rossOldPicture && rossYoungPicture) {
//     olderBackground(btnRoss, ross, rossYoungPicture, rossOldPicture);
// }

// //Monica
// const monica = document.querySelector(".monica");
// const btnMonica = document.querySelector(".monica .buttons__older");
// const monicaYoungPicture = "images/monica.jpg";
// const monicaOldPicture = "images/monica-2020.jpg";

// if (monica && btnMonica && monicaOldPicture && monicaYoungPicture) {
//     olderBackground(btnMonica, monica, monicaYoungPicture, monicaOldPicture);
// }

// //Joey
// const joey = document.querySelector(".joey");
// const btnJoey = document.querySelector(".joey .buttons__older");
// const joeyYoungPicture = "images/joey.jpg";
// const joeyOldPicture = "images/joey-2020.jpg";

// if (joey && btnJoey && joeyOldPicture && joeyYoungPicture) {
//     olderBackground(btnJoey, joey, joeyYoungPicture, joeyOldPicture);
// }

// //Phoebe
// const phoebe = document.querySelector(".phoebe");
// const btnPhoebe = document.querySelector(".phoebe .buttons__older");
// const phoebeYoungPicture = "images/phoebe.jpg";
// const phoebeOldPicture = "images/phoebe-2020.jpg";

// if (phoebe && btnPhoebe && phoebeOldPicture && phoebeYoungPicture) {
//     olderBackground(btnPhoebe, phoebe, phoebeYoungPicture, phoebeOldPicture);
// }

// //Chandler
// const chandler = document.querySelector(".chandler");
// const btnChandler = document.querySelector(".chandler .buttons__older");
// const chandlerYoungPicture = "images/chandler.jpg";
// const chandlerOldPicture = "images/chandler-2020.jpg";

// if (chandler && btnChandler && chandlerOldPicture && chandlerYoungPicture) {
//     olderBackground(btnChandler, chandler, chandlerYoungPicture, chandlerOldPicture);
// }





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