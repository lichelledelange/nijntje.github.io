//afbeelding ophalen
var nijntjeAfbeelding = document.querySelector('#nijntje-afbeelding')
console.log(nijntjeAfbeelding)

//haal de teksten op
var nijntjeGroetParagraaf = document.querySelector('#nijntje-groet')
var energieMelding = document.querySelector('#energie-melding')

//alle knoppen ophalen
var spelenKnop = document.querySelector('#spelen-knop')
var etenKnop = document.querySelector('#eten-knop')
var lezenKnop = document.querySelector('#lezen-knop')
var moeKnop = document.querySelector('#moe-knop')
var dansenKnop = document.querySelector('#dansen-knop')
var willekeurigKnop = document.querySelector('#willekeurig-knop')

//alle activiteiten van nijntje
var arrayAlleActiviteiten = ['spelen', 'eten', 'moe', 'lezen', 'dansen']

//begin de energieteller op 0
var energieTeller = 0

//functies die uitgevoerd worden wanneer een event gebeurt
function spelen() {
    nijntjeAfbeelding.src = 'style/afbeeldingen/spelen.svg' //verander foto src in de html
    energieTeller++ //tel 1 op bij de energieteller
    checkEnergie() //check of nijntje al moe is

}
function eten() {
    nijntjeAfbeelding.src = 'style/afbeeldingen/eten.svg' //verander foto src in de html
    energieTeller++ //tel 1 op bij de energieteller
    checkEnergie() //check of nijntje al moe is
}
function slapen() {
    nijntjeAfbeelding.src = 'style/afbeeldingen/moe.svg' //verander foto src in de html
    energieTeller = 0 //zet de teller weer op 0 wanneer nijntje gaat slapen
    checkEnergie() //check of nijntje al moe is
}
function lezen() {
    nijntjeAfbeelding.src = 'style/afbeeldingen/lezen.svg' //verander foto src in de html
    energieTeller++ //tel 1 op bij de energieteller
    checkEnergie() //check of nijntje al moe is
}
function dansen() {
    nijntjeAfbeelding.src = 'style/afbeeldingen/dansen.svg' //verander foto src in de html
    energieTeller++ //tel 1 op bij de energieteller
    checkEnergie() //check of nijntje al moe is
}

//zet een willekeurige foto neer doormiddel van de gemaakte array met alle activiteiten
function random() {
    var randomGetalTussenNulEnVier = Math.floor(Math.random() * 5)
    var willekeurigeAfbeeldingen = arrayAlleActiviteiten[randomGetalTussenNulEnVier]
    nijntjeAfbeelding.src = 'style/afbeeldingen/' + willekeurigeAfbeeldingen + '.svg'
}
//zet de class steeds aan en uit
function groetNijntje() {
    nijntjeGroetParagraaf.classList.toggle('toon-nijntje-groet')
}

//check of nijntje moe is, ze is moe wanneer de teller 5 is of hoger
function checkEnergie() {
    if (energieTeller >= 5) {
        energieMelding.textContent = "Ik ben moe :("
    }
    else {
        energieMelding.textContent = "Ik ben energiek"
    }
}

//voeg de klik evenementen toe + voer achterstaande functie uit wanneer er geklikt wordt
spelenKnop.addEventListener('click', spelen)
etenKnop.addEventListener('click', eten)
lezenKnop.addEventListener('click', lezen)
moeKnop.addEventListener('click', slapen)
dansenKnop.addEventListener('click', dansen)
willekeurigKnop.addEventListener('click', random)

//voeg evenementen toe doe afgaan wanneer je met je muis over het plaatje gaat en er weer vanaf gaat
nijntjeAfbeelding.addEventListener('mouseenter', groetNijntje)
nijntjeAfbeelding.addEventListener('mouseleave', groetNijntje)
