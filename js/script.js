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
// //Creo un array che ha per elementi i differenti valori associati alla chiave cardName presente negli oggetti dell'array cards.
// const nameList = [];
// cards.forEach((element) => {
//   if(!nameList.includes(element.cardName)) {
//     nameList.push(element.cardName);
//   }
// });
//
//
// console.log(nameList);
//
//
// //Vado a crearmi una cost in cui salvare la posizione dell'elemento "select" del DOM di modo da strutturare poi,in esso, qui in javascript, le opzioni che lo riguarderanno e che ho salvato in nameList attraverso il forEach applicato all'array cards:
// const elSelector = document.getElementById('selector');
//
// /*Il forEach() sottostante ciclando sull'array "nameList" eseguirà una funzione su ciascun suo elemento (valori di cardName di cards) di modo che nel DOM si generino tutti i tag "option", all'interno dell'elemento "select" di id "selector" (salvato in "elSelector"), che abbiano come valore e contenuto proprio i cardName.*/
// nameList.forEach((element) => {  // element è la stringa type
//   elSelector.innerHTML += `
//     <option value="${element}">${element}</option>
//   `
// });
// -------------------------------------------------------------------------------------------------------------------------------------
//Creo un array che ha per elementi i differenti valori associati alla chiave "power" della chive "score",presente negli oggetti dell'array cards.
const powerList = [];
cards.forEach((element) => {
  if(!powerList.includes(element.score.power)) {
    powerList.push(element.score.power);
  }
});


console.log(powerList);


//Vado a crearmi una cost in cui salvare la posizione dell'elemento "select" del DOM di modo da strutturare poi,in esso, qui in javascript, le opzioni che lo riguarderanno e che ho salvato in powerList attraverso il forEach applicato all'array cards:
const elSelector = document.getElementById('selector');

/*Il forEach() sottostante ciclando sull'array "powerList" eseguirà una funzione su ciascun suo elemento (valori di power di cards) di modo che nel DOM si generino tutti i tag "option", all'interno dell'elemento "select" di id "selector" (salvato in "elSelector"), che abbiano come valore e contenuto proprio i cardName.*/
powerList.forEach((element) => {  // element è la stringa type
  elSelector.innerHTML += `
    <option value="${element}">${element}</option>
  `
});
// -------------------------------------------------------------------------------------------------------------------------------------------
/*Attraverso il forEach e il template literal, visualizzo nell'html la lista di queste carte mostrando SOLO il nome della carta.*/

//Quel che mi occorre è una costante in cui salvare la posizione dell'elemento del DOM di classe "container"
const elContainer = document.getElementsByClassName('container')[0];

/*Applico il forEach all'array di oggetti "cards", in modo da andare a ciclare su ogni oggetto dell'array. Recupero, così, i nomi delle card e genero la lista corrispondente in HTML */

cards.forEach((element) => {
  elContainer.innerHTML += `
    <ul>
      <li>${element.cardName}</li>
    </ul>
  `
});
// ----------------------------------------------------------------------------------------------------------------------------------------
//Quel che mi occorre, ora, è rendere funzionante il select precedentemente creato di moda da filtrare i nomi in base alla selezione delle opzioni di power



//a mezzo JQUERY, opportunamente caricato nell'head del file index:
const elementSelector = $('#selector');

//Salvo nella const "elContainer" la posizione nel DOM relativa all'elemento di classe "container" in cui andrò poi a stampare i miei box.
// const elContainer = document.getElementsByClassName('container')[0];


//Attraverso il metodo CHANGE eseguo una FX che applico  all'elemento del DOM "select" di id "selector"(salvato nella costante elementSelector). Vado, cioè, a salvare, con la funzione, nella "let" di nome valore, il value dell'option selezionata (identificata dalla parola chiave "this"- con JQUERY $(this)) di select.
elementSelector.change(function() {
  let valore = $(this).val();

  elContainer.innerHTML = ``;// Mi consente di resettare il risultato di stampa in pagina dovuto alla scelta di selezione precedente


  //Creo un array inserendo in esso unicamente gli elementi di cards che hanno power di valore uguale
  let arrayPerPower = cards.filter((element)=>{ //(**)
  return element.score.power === valore
  });

  /*A questo punto, però, mi resta che la select risponda anche all'opzione ALL per la quale ho impostato nell'index.html value uguale a 'all'. Perchè le tre righe di codice che seguono funzionino, occorre mutare l'arrayPerPower da const a let: solo così posso garantirgli una nuova assegnazione--->(**)*/

  if (valore === 'all') {
    arrayPerPower = cards;
    console.log(arrayPerPower);
  }

  console.log(arrayPerPower);

  /*Vado a ciclare l'array creato di modo che per ciascun valore di power ,selezionato attraverso il select, stampi in pagina i nomi delle card relativi a quel valore di power*/
  arrayPerPower.forEach((element) => {  // element è la stringa cardName
    elContainer.innerHTML += `
    <ul>
      <li>${element.cardName}</li>
    </ul>
    `
  });
});
