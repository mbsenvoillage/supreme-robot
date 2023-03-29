# Les structures de données

## Recueil des représentations initiales

## Le tableau

- Un tableau (array) permet de stocker des valeurs. Chacune de ces valeurs est accessible grâce à un index. Un index est comme l'adresse de la valeur dans un tableau. C'est toujours un entier, et le premier index d'un tableau est toujours 0.
- Un tableau peut contenir autant de valeurs que le mémoire nous permet d'y stocker.
- Prenons pour exemple un tableau qui contiendrait les noms Ulysse, Yuna, Willy, Corinne, dans cet ordre. L'adresse du prénom Ulysse dans le tableau est 0, celle du prénom Yuna est 1 et ainsi de suite.

### Créer un tableau

- Voici comment créer un tableau vide : `let a = []`
- Voici comment créer un tableau avec les prénoms de la famille: `let famille = ['Ulysse', 'Willy', 'Corinne', 'Yuna']`

### Accéder aux éléments d'un tableau

- Reprenons notre tableau de prénoms : `let famille = ['Ulysse', 'Willy', 'Corinne', 'Yuna']`. Pour accéder au prénom Ulysse, je dois utiliser l'index qui lui correspond. Ulysse est le premier élément du tableau, et le premier index du tableau est toujours 0. Ainsi, pour y accéder il faudrait faire comme suit: `famille[0]`
- Je pourrais par exemple stocker cette valeur dans une variable: `let a = famille[0]`

#### Parcourir les éléments d'un tableau à l'aide d'une boucle

- Afin de parcourir les éléments d'un tableau à l'aide d'une boucle "for", je dois tout d'abord connaître le nombre d'éléments dans mon tableau. La propriété `length` me permet d'accéder à cette information.
- Pour connaître le nombre d'éléments du tableau famille ci-dessus, il me suffit de faire : `famille.length`. On peut utiliser la propriété `length` avec les tableaux mais aussi les chaînes de caractères.
- Voici comment afficher tous les prénoms du tableau famille à l'aide d'une boucle "for" :

```(js)
let famille = ['Ulysse', 'Willy', 'Corinne', 'Yuna'];
for (let i = 0; i < famille.length; i++) {
    console.log(famille[i]);
}
```

#### Challenges

- Afficher les éléments d'un tableau du dernier au premier
- Concaténer les éléments d'un tableau en une seule chaîne de caractères
- Créer un annuaire à partir d'une séquence nom-numéro
- https://www.hackerrank.com/challenges/simple-array-sum
- https://www.hackerrank.com/challenges/a-very-big-sum/
- https://leetcode.com/problems/concatenation-of-array/description/
- https://www.hackerrank.com/challenges/birthday-cake-candles
- https://leetcode.com/problems/final-value-of-variable-after-performing-operations/
- https://leetcode.com/problems/left-and-right-sum-differences/

## Les objets

### Introduction aux objets en JavaScript (15 minutes)

- Qu'est-ce qu'un objet ?
- Comment decririez-vous un objet telle que la voiture ?
- Comparaison avec des objets réels (ex. : une voiture avec des propriétés et des actions)

#### L'objet de la vie de tous les jours

- Un objet peut être vu, touché et utilisé. Un crayon est un objet. Il peut être de longueurs ou couleurs différentes. Son utilité première est l'écriture.

#### L'objet en programmation

- L'objet en programmation est une structure de données. L'objet possède des caractéristiques et peut accomplir un certain nombre d'actions.

#### Propriétés

- Les propriétés des objets sont comme des caractéristiques de cet objet. Elle permettent de décrire l'objet.

#### Méthodes

- Les méthodes des objets sont comme des actions que l'objet peut accomplir. Elles permettent à l'objet de remplir sa fonction.

### Création d'un objet simple (30 minutes)

#### Syntaxe pour créer un objet en JavaScript

- En JavaScript, il existe plusieurs façons de créer un objet. La syntaxe la plus courante pour créer un objet est d'utiliser des accolades {} et d'assigner les propriétés et leurs valeurs à l'intérieur. Voici un exemple :

```
let obj = {
  propriete1: 'valeur1',
  propriete2: 'valeur2',
  propriete3: 123
};

```

- Exemple d'un objet représentant un animal (ex. : un chat) :

```
let cat = {
    color: "black",
    size: "medium",
    breed: "siamese",
    name: "Felix",
    owner: "John John"
}
```

- Exercice pratique : créer un objet représentant votre animal préféré

### Accéder aux propriétés d'un objet (20 minutes)

#### Syntaxe pour accéder aux propriétés d'un objet

- En JavaScript, il y a deux façons courantes d'accéder aux propriétés d'un objet : la notation pointée (dot notation) et la notation entre crochets (bracket notation).

a. Notation pointée :

La notation pointée est la méthode la plus simple et la plus courante pour accéder aux propriétés d'un objet. Pour l'utiliser, il suffit d'écrire le nom de l'objet, suivi d'un point et du nom de la propriété :

```
let voiture = {
  marque: 'Toyota',
  modele: 'Corolla',
  annee: 2020
};

console.log(voiture.marque); // Résultat : 'Toyota'
console.log(voiture.modele); // Résultat : 'Corolla'
console.log(voiture.annee);  // Résultat : 2020
```

b. Notation entre crochets :

La notation entre crochets permet d'accéder aux propriétés d'un objet en utilisant des chaînes de caractères pour représenter le nom de la propriété. Pour ce faire, écrivez le nom de l'objet, suivi de crochets, et placez la chaîne de caractères représentant le nom de la propriété entre les crochets.

```
let voiture = {
  marque: 'Toyota',
  modele: 'Corolla',
  annee: 2020
};

console.log(voiture['marque']); // Résultat : 'Toyota'
console.log(voiture['modele']); // Résultat : 'Corolla'
console.log(voiture['annee']);  // Résultat : 2020
```

La notation entre crochets est particulièrement utile lorsque le nom de la propriété est stocké dans une variable ou lorsque le nom de la propriété contient des caractères spéciaux ou des espaces.

- Exemple avec l'objet chat créé précédemment

- Exercice pratique : afficher certaines propriétés de votre animal préféré

### Modification des propriétés d'un objet (20 minutes)

#### Syntaxe pour modifier les propriétés d'un objet

- La syntaxe de modification des propriétés d'un objet est identique à la syntaxe pour accéder aux propriétés d'un objet

a. Notation pointée :

```
let voiture = {
  marque: 'Toyota',
  modele: 'Corolla',
  annee: 2020
};

voiture.marque = "Peugeot";
voiture.modele = "405";
console.log(voiture.marque); // Résultat : 'Peugeot'
console.log(voiture.modele); // Résultat : '405'
```

b. Notation entre crochets :

```
let voiture = {
  marque: 'Toyota',
  modele: 'Corolla',
  annee: 2020
};

voiture.["marque"] = "Peugeot";
voiture.["modele"] = "405";
console.log(voiture.["marque"]); // Résultat : 'Peugeot'
console.log(voiture.["modele"]); // Résultat : '405'
```

- Exemple avec l'objet chat créé précédemment
- Exercice pratique : modifier certaines propriétés de votre animal préféré

### Introduction aux méthodes d'un objet (25 minutes)

- Explication de ce qu'est une méthode
- Syntaxe pour ajouter une méthode à un objet
- Exemple avec l'objet chat (ex. : une méthode pour faire miauler le chat)
- Exercice pratique : créer une méthode pour votre animal préféré (ex. : faire aboyer un chien, nager un poisson, etc.)

### Récapitulatif et conclusion (10 minutes)

- Résumé des concepts clés abordés
