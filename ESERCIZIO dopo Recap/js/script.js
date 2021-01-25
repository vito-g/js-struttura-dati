/*TRACCIA
Organizzare un array di carte (oggetti) Magic  (almeno 5 all'inizio), con tutte le loro proprietà. Partite dalla base che abbiamo definito qui https://github.com/ott-fogliata/boolean-code/blob/main/js-struttura-dati/js/script.js
Visualizzare nell'html la lista di queste carte mostrando SOLO il nome della carta. Non grafichiamo nulla.
Creaiamo una select nell'html per filtrare le carte attraverso la proprietà power, per un valore che va da 1 a 5. (anche se in Magic è diverso)
Superpoweredbonus. E se volessi un'altra select e filtrare gli elementi attraverso la proprietà che abbiamo chiamato cardType?*/


// --------------------------------------------------------------------------------
const fieldCodes = [
  'W', 'U', 'B', 'R', 'G'
]

const cardTypes = [
  'terre',
  'creature',
  'incantesimi',
  'artefatti',
  'instantanei',
  'stregonerie'
]

// Abbiamo creato un oggetto di oggetti, come riferimento
// di una edizione. Se ad esempio scrivo editions['SP']
// allora otterrò tutto un oggetto che descrive
// con più dettagli l'edizione.
// come oggetto di oggetti, può essere navigato solo con il for-in
const editions = {

  'BL': {
      edition: 'Boolean',
      rarity: 'blue'
  },

  'SP': {
      edition: 'Special',
      rarity: 'red'
  }

}

//Qui di seguito le Cards-------------------------------------------------------
const cards = [
  {

  cardName: 'Grizzly Bears',

  cost: {
    genericCostNumber: 1,
    costFields: [ // colors array con riferimento a fieldCodes
      fieldCodes[0],  // 'W',  - un suo riferimento
      fieldCodes[2]   // 'B'
    ],
  },

  picture: 'images/i.png',
  cardType: cardTypes[1],
  cardObject: 'Bear',

  editionType: editions['BL'],

  description: 'Lorem ipsum',
  story: 'Naltro Lorem Ipsum',

  score: {
    power: 2,  // filtrarlo per power
    toughness: 2
  }

  },
  {

    cardName: 'Sviluppatore guerriero',

    cost: {
      genericCostNumber: 3,
      costFields: [ // colors array con riferimento a fieldCodes
        fieldCodes[2],
        fieldCodes[3]
      ],
    },

    picture: 'images/g.png',  // da inserire immagine
    cardType: cardTypes[1],
    cardObject: 'Tiger',

    editionType: editions['BL'],

    description: 'Lo sviluppatore guerriero spezza i byte in bit!',
    story: 'Lo sviluppatore guerriero è una forma di essere umano evoluto.',

    score: {
      power: 5,  // r
      toughness: 3
    }

  },
  {

    cardName: 'Sviluppatore stanco',

    cost: {
      genericCostNumber: 1,
      costFields: [ // colors array con riferimento a fieldCodes
        fieldCodes[2],
        fieldCodes[1]
      ],
    },

    picture: 'images/f.png',  // da inserire immagine
    cardType: cardTypes[2],
    cardObject: 'Bradipo',

    editionType: editions['BL'],

    description: 'Lo sviluppatore stanco è sempre in de-bit d\'ossigeno',
    story: 'Lo sviluppatore stanco è una forma di essere umano in estinzione.',

    score: {
      power: 1,  // r
      toughness: 1
    }

  },
  {

    cardName: 'Sviluppatore abile',

    cost: {
      genericCostNumber: 6,
      costFields: [ // colors array con riferimento a fieldCodes
        fieldCodes[3],
        fieldCodes[4]
      ],
    },

    picture: 'images/h.png',  // da inserire immagine
    cardType: cardTypes[5],
    cardObject: 'Cat',

    editionType: editions['BL'],

    description: 'Lo sviluppatore abile moltiplica i bit in byte!',
    story: 'Lo sviluppatore abile è una forma di essere umano ricercato.',

    score: {
      power: 5,  // r
      toughness: 5
    }

  },
  {

    cardName: 'Beep-Beep',

    cost: {
      genericCostNumber: 5,
      costFields: [ // colors array con riferimento a fieldCodes
        fieldCodes[0],
        fieldCodes[3]
      ],
    },

    picture: 'images/l.png',  // da inserire immagine
    cardType: cardTypes[1],
    cardObject: 'Road-runner',

    editionType: editions['BL'],

    description: 'Il Road-runner ti mostra sempre la schiena!',
    story: 'Il Road-runner non è mai stato guardato in volto da nessuno.',

    score: {
      power: 4,  // r
      toughness: 2
    }

  },
]

console.log(cards);
// --------------------------------------------------------------------------------
/*Quello che occorre fare è provare, quanto più possibile, ad atomizzare tutte le funzioni che ci occorreranno nello script.
La loro atomizzazione le renderà abili ad accogliere, di volta in volta, i diversi valori degli argomenti che andranno a popolare, all\'occorenza,
i loro parametri*/

//Creiamo, dapprima una funzione per il FILTRAGGIO dei DATI:
//La FX di Filtraggio sarà, tipicamente, innescata dai valori selezionati dall'utente relativi alle opzioni di una Select.
//I parametri che, dunque, le occorrerannno saranno il "Valore Selezionato" e l'"Array" da filtrare.
//Inizialmente, dovremo Filtrare le Cards attraverso la proprietà "power":
// function filterByPower(powerValue, array) {
//   //Innanzitutto mi occorrerà una Cost in cui salvare l'Array Filtrato a partire dall'Array iniziale. In esso sistemeremo i soli Valori Possibili per la proprietà Power (element.score.power):
//   const filteredArray = array.filter((element) => {
//     return element.score.power === powerValue;
//   });
//   //Siamo all'interno di una funzione, dobbiamo inserire l'istruzione di return per restituire esternamente l'array elaborato
//   return (filteredArray);
//   }

// ----
  //La FX può esser snellita eliminando dichiarazione e assegnazione di cost e "RITORNANDOLA" direttamente
  function filterByPower(powerValue, array) {
    return array.filter((element) => {
      return element.score.power === powerValue;
    });
  }
  //Vediamo cosa accade filtrando manualmente le carte per un valore di power pari a 5
  console.log(filterByPower(5, cards));
// ----
//Ora mi occorre una FX che vada a Salvare la Posizione di un El del DOM In una Cost per poi andare a Stampare in essa del Codice HTML. Stamperemo una Lista dei Nomi delle Cards. Questa FX avrà, dunque, per parametri, l'ID dell'elemento del DOM oggetto del nostro interesse e l'array che andremo a ciclare con un forEach per recuperare le info che ci occorre visualizzare a schermo. Prima dobbiamo preparare nell'index l'elemento che accoglierà il codice strutturato in javascript:
function render(DOMelementId, array) {
  const cardListHTMLelement = document.getElementById(DOMelementId);

  array.forEach((element) => {
    cardListHTMLelement.innerHTML += `<li>${element.cardName}</li>`;
  });
}

//Proviamo la FX, passando lei come argomenti l'id dell' El del DOM selezionato e l'array da analizzare
render('ListaCarte', cards);
