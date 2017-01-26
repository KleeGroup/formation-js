# Arrays, map, filter et reducer

```javascript
[
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
        type: 'frontend+backend',
        swag: 'infini'
    }
]
```

1 - Ecrire une fonction qui prend en entrée le tableau précédent, et retourne un tableau de string des noms des langages

2 - Ecrire une fonction qui prend en entrée le tableau précédent, et retourne un tableau filtré sur les langages backend uniquement

3- Ecrire une fonction qui prend en entrée le tableau précédent et retourne les noms des langages concaténés, séparés par ':' .

# Lodash

1 - En utilisant lodash, écrire une fonction qui réalise l'intersection de deux tableaux ([2, 1], [2, 3] -> [2])

2 - En utilisant lodash, écrire une fonction qui réalise l'intersection de deux tableaux ([{x:2, y:'Tomate'}, {x:2, y:'Carotte'}], [{x:2, y:'Carotte'}, {x:3, y:'Aubergine'}] -> [{x:2, y:'Carotte'}])

# Closure
1 - Exécutez ces lignes de code :
```javascript
const superbeObjet = { 
  name: 'Rodrigo',
  direBonjour(){
    console.log(`Bonjour ${this.name}`)
  }
};

superbeObjet.direBonjour();
superbeObjet.direBonjour.call({});
superbeObjet.direBonjour.call({name: 'Thomas'});
```
Comment expliquez-vous les résultats obtenus ?

2 - Ecrire une fonction disant bonjour à l'équipe Focus (['Amélie', 'Thomas', 'Guénolé', 'Pierre']), en utilisant le superbeObjet.

# Promise + destruct

1 - Exécutez ces lignes de code :
```javascript
Promise.resolve('Un message dans promisse').then(msg => console.log('Message', msg));
console.log('Apres');
```
Qu'observez-vous ?

2 - Ecrire une fonction recevant en entrée la promesse suivante,
```javascript
Promise.resolve({nom : 'Bazire', statut : 'Stagiaire', entreprise: 'Klee'})
```
et qui renvoie une promesse du type 
```javascript
Promise.resolve({nom : 'Bazire', autre: {statut : 'Stagiaire', entreprise: 'Klee'}})
```

3 - Ecrire une fonction recevant en entrée la promesse suivante,
```javascript
Promise.resolve([{nom : 'Bazire', statut : 'Stagiaire', entreprise: 'Klee'}, {nom : 'Pierre', statut : 'FocusPapa', entreprise: 'Klee'}, {nom:'Stan', statut :'Mascotte', entreprise:'Ailleurs'}])
```
et qui renvoie une promesse du type 
```javascript
Promise.resolve([{nom : 'Bazire', autre: {statut : 'Stagiaire', entreprise: 'Klee'}}, {nom : 'Pierre', statut : 'FocusPapa', entreprise: 'Klee'}])
```
(filtrage sur l'entreprise + chgt de la structure de l'objet)
