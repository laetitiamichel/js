document.addEventListener("DOMContentLoaded",(e)=>{
// DOM = interface qui sert à manipuler 
// (e)= fonction qui contient un paramètre = evènement qui permet de charger la page
    console.log(e.target);
    let elements = "titre de ma page";
    console.log(elements);
    const number = 0; // constante qu'on ne pourra jamais modifier
    elements = "javascript";

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
   
})