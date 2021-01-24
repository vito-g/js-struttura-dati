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
      power: 5,  // r
      toughness: 2
    }

  },
]

console.log(cards);
// --------------------------------------------------------------------------------
//Creo un array che ha per elementi i differenti valori associati alla chiave cardName presente negli oggetti dell'array cards.
const nameList = [];
cards.forEach((element) => {
  if(!nameList.includes(element.cardName)) {
    nameList.push(element.cardName);
  }
});


console.log(nameList);


//Vado a crearmi una cost in cui salvare la posizione dell'elemento "select" del DOM di modo da strutturare poi,in esso, qui in javascript, le opzioni che lo riguarderanno e che ho salvato in nameList attraverso il forEach applicato all'array cards:
const elSelector = document.getElementById('selector');

/*Il forEach() sottostante ciclando sull'array "nameList" eseguirà una funzione su ciascun suo elemento (valori di cardName di cards) di modo che nel DOM si generino tutti i tag "option", all'interno dell'elemento "select" di id "selector" (salvato in "elSelector"), che abbiano come valore e contenuto proprio i cardName.*/
nameList.forEach((element) => {  // element è la stringa type
  elSelector.innerHTML += `
    <option value="${element}">${element}</option>
  `
});
