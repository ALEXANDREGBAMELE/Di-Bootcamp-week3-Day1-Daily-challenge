
document.querySelector("body").style.backgroundColor="black"
let tout = document.body.lastChild
console.log(tout)
//Create an array which value is the planets of the solar system.
let systemeSolar = ["mercure","venus","mars","jupiter","saturne","uranus","nepture","terre","pluton"];


/*For each planet in the array, create a <div> using createElement. This div should 
    have a class named "planet".*/
    
    systemeSolar.forEach(element => {
        let createDiv = document.createElement("div")
        createDiv.classList.add("planet")
        let body = document.querySelector('body').appendChild(createDiv)
        
    });
   
    

    document.getElementsByClassName("planet")[0].classList.add("planetMercure")
    document.getElementsByClassName("planet")[1].classList.add("planetVenus")
    document.getElementsByClassName("planet")[2].classList.add("planetMars")
    document.getElementsByClassName("planet")[3].classList.add("planetJupiter")
    document.getElementsByClassName("planet")[4].classList.add("planetSaturne")
    document.getElementsByClassName("planet")[5].classList.add("planetUranus")
    document.getElementsByClassName("planet")[6].classList.add("planetNepture")
    document.getElementsByClassName("planet")[7].classList.add("planetTerre")
    document.getElementsByClassName("planet")[8].classList.add("planetPluton")


    
// 

console.log("Bonjour tout le monde")