const tabs = document.querySelectorAll(".tabs a");

tabs.forEach(tab => {
    tab.addEventListener("click", function (e) {
        const li = this.parentNode;
        const div = this.parentNode.parentNode.parentNode;
        const actif = div.querySelector(".tabs .active");
        // On sort de la fonction si l'onglet cliqué est déjà l'onglet actif
        if (li.classList.contains("active")) {
            return false;
        }
        // On retire la class active sur l'onglet qui l'avait
        actif.classList.remove("active");
        // On ajoute à la class active sur l'onglet cliqué
        tab.classList.add("active");
        // On retire la class active sur le contenu qui l'avait
        div.querySelector(".tab__content.active").classList.remove("active");
        // On ajoute la class active sur le contenu qui correspond à l'onglet cliqué
        div.querySelector(this.getAttribute("href")).classList.add("active");
    })
})