  
const SUPERBE_TABLEAU = [
    {
        nom: 'C#',
        type: 'backend'
    },
    {
        nom: 'Java',
        type: 'backend'
    },
    {
        nom: 'Javascript',
        type: 'fronted+backend',
        swag: 'infini'
    }
];

// Utiliser map
const stringTab = SUPERBE_TABLEAU.map(t => t.nom);
console.log(stringTab);

// filtrer les backend only
const filtered = SUPERBE_TABLEAU.filter( obj => obj.type === 'backend');
console.log(filtered);

//Reduce
const concatenationReduce = SUPERBE_TABLEAU.reduce((prev, current, currIndex) => currIndex === 0 ? current.nom : `${prev}:${current.nom}`, '');
console.log(concatenationReduce);

const concatenationJoin = SUPERBE_TABLEAU.map(t => t.nom).join(':');
console.log(concatenationJoin);


const simpleInter = _.intersection([2, 1], [2, 3]);
console.log(simpleInter);

const interBy = _.intersectionBy([{x:1, y:'Tomate'}, {x:2, y:'Carotte'}], [{x:2, y:'Carotte'}, {x:3, y:'Aubergine'}], item => item.x);
console.log(interBy);

const interWith = _.intersectionWith([{x:1, y:'Tomate'}, {x:2, y:'Carotte'}], [{x:2, y:'Carotte'}, {x:3, y:'Aubergine'}], (item1, item2) => item1.x === item2.x);
console.log(interWith);

const superbeObjet = { 
  name: 'Rodrigo',
  direBonjour(){
    console.log(`Bonjour ${this.name}`)
  }
};

superbeObjet.direBonjour();
superbeObjet.direBonjour.call({});
superbeObjet.direBonjour.call({name: 'Thomas'});

const bonjourFunc = function bonjour() { console.log(`Bonjour ${this.prenom}!`)};
bonjourFunc();
bonjourFunc.bind({prenom:'Amelie'})(); // {prenom:'Amelie'}::bonjourFunc(); /* Norme ES 7 */
bonjourFunc();

const team = ['Amélie', 'Thomas', 'Guénolé', 'Pierre'];
team.forEach(current => superbeObjet.direBonjour.call({name: current}));

Promise.resolve('Un message dans promise').then(msg => console.log('Message:'+ msg));
console.log('Apres');

const exPromise = Promise.resolve({nom : 'Bazire', statut : 'Stagiaire', entreprise: 'Klee'});
exPromise.then(({nom, ...others}) => {return {nom, autre: { ...others}}; }).then(item => console.log(item));
                                                           
const ex2Promise = Promise.resolve([{nom : 'Bazire', statut : 'Stagiaire', entreprise: 'Klee'}, {nom : 'Pierre', statut : 'FocusPapa', entreprise: 'Klee'}, {nom:'Stan', statut :'Mascotte', entreprise:'Ailleurs'}]);          
ex2Promise.then(items => items.filter(item => item.entreprise ==='Klee'))
.then(items => items.map(({nom, ...others}) => {return {nom, autre:{...others}}}))
  .then(item => console.log(item));
