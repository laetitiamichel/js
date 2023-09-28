document.addEventListener("DOMContentLoaded",(e)=>{
// DOM = interface qui sert à manipuler 
// (e)= fonction qui contient un paramètre = evènement qui permet de charger la page
    console.log(e.target);
    let elements = "titre de ma page";
    console.log(elements);
    const number = 0; // constante qu'on ne pourra jamais modifier
    elements = "javascript";

    let section = document.querySelector("section")

    let x = 100;
    let age = 20;
    let ages = 10;
    let bool = true;
    console.log( " tu as" + age + "ans") // ancienne version
    console.log(`tu as  ${age} ans`); // nouvelle version batcot = altgr + 7
    // puis le $ pour afficher la variable

    //conditions:
    if ( age === ages) // === pour comparer le type et la valeur
        {console.log("c'est vrai")}
    else{
        console.log("c'est faux")
    }

    // condition ternaire :
    age === ages ? console.log("c'est vrai") : console.log("c'est faux")
    // conditons ? instruction du IF et 2nd réponse avec : = else

    //tableau:
    const tableau = ["HTML", "CSS", true]
    let noms = ["tom", "bb", true]
    let noms_lang = [...tableau, ...noms] //spread opérateur = " ..." pour concaténer
    console.log(tableau.length) // length permet de compter tout le tableau
    //console.log([0])
    //console.table(tableau)
    //console.table(noms_lang)

    for (let i=0; i < noms_lang.length; i++){
        console.log( `${i} : ${noms_lang[i]}`)
    }
// la propiété = une clé 
// ici => nom = propriété / clé et les : pour affecter une valeur
// tableau d'objet =
le_nom_du_tableau =({
    nom : " lili", 
    prénom : "tim",
    ville : "toulouse",
    pays : "fr",
})
//pour demander la valeur d'une propriété=
console.table(Object.values(le_nom_du_tableau))


// pour créer dynamiquement une liste UL dans le HTML via JS:
let user = document.createElement("ul")
section.appendChild(user)
//afficher dans la console les éléments de la section du html
console.log(section.children)
for(data in le_nom_du_tableau){
    console.log(`${data} : ${le_nom_du_tableau[data]}`)
    //pour rajouter un élément dans la liste UL => innerHTML
    // rajouter avec altgr 7 ``
    user.innerHTML +=`<li>${data} : ${le_nom_du_tableau[data]}</li>`
}
  

//afficher un tableau d'objet avec une image:
let tableauObject = ({
    logo : "./asset/logo.png",
    intro : "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives et à ce titre est une partie essentielle des applications web. Avec les langages HTML et CSS, JavaScript est au cœur des langages utilisés par les développeurs web. Wikipédia",
    Conçu: "Brendan Eich",
    Date: "Mai 1996",
    Version : "13 - ECMA-262 (Juin 2022)",
    Développeurs : "Netscape Communications Corporation, Mozilla Foundation",
    Extension : "js",
    Normes : "ECMA-262; ISO/CEI 16262",
    Paradigme : "Multi-paradigmes: script, orienté objet (orienté prototype), impératif, fonctionnel",

})
for (let i=0; i < tableauObject.length; i++){
    console.log( `${i} : ${tableauObject[i]}`)
}
    console.table(tableauObject)
    console.table()
})