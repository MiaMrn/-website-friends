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

function afficherOnglet(a) {
    const li = a.parentNode;
    const div = a.parentNode.parentNode.parentNode;
    const actif = div.querySelector(".tabs .active");
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
}