# Introduction à Javascript

## Javascript c'est quoi ?

(recueil des représentations initiales)

- un langage de programmation
- côté client, permet de rendre une page web **interactive** (animations, boutons, popup, menus etc). Permet de manipuler les éléments d'une page.
- côté server, permet de communiquer avec une base de données, le système etc. Permet de **répondre à des requêtes** envoyées par le client.

## Comment exécuter du Javascript ?

(recueil des représentations initiales)

- côté client, par le biais d'un fichier html contenant un lien vers un fichier Javascript
- côté client, dans la console d'un navigateur
- côté server, grâce à NodeJs.

Javascript a été conçu pour être utilisé côté client. Toutefois, des développeurs ont jugé pertinent d'offrir la possibilité d'utiliser Javascript comme langage server. De là est né NodeJs.

### Travaux pratiques

Exécuter le code suivant : `console.log("Hello, world!")`

#### Exécuter du Javascript dans un navigateur

- ouvrir la console et imprimer "Hello World!"

#### Exécuter du Javascript dans un fichier html

- grâce à une balise script
- grâce à un lien vers un fichier Javascript

#### Exécuter du Javascript grâce à NodeJs

- exécuter le fichier JS

## Les variables

- Les variables correspondent à l'association d'un nom et d'une valeur. C'est une façon commode de stocker des valeurs, pour y accéder par le biais d'un nom.
- Le nommage des variables est une partie cruciale de l'exercice de programmation. Un bon nommage rend la lecture du code plus facile et plus agréable.
- Les valeurs stockées dans les variables peuvent être de plusieurs types. Les nombres et les chaînes de caractères en font partie.

https://www.jschallenger.com/javascript-basics/variables/introduction

### Déclarer un variable

- On utilise le mot clé `let`, `var` ou `const` suivi du nom de la variable.
- ex: `let varName;`

### Initialiser une variable

- On utilise le signe `=` pour assigner une valeur à la variable.
- ex: `varName = 2;`
- On peut également déclarer et assigner en même temps, ex: `let varName = 2;`
- Lorsque l'on cherche à accéder à une variable qui n'a pas été initialisée, on obtient `undefined`

### Evaluer une variable

- Evaluer une variable signifie accéder à sa valeur. Pour accéder à la valeur d'une variable, il suffit d'y faire référence.
