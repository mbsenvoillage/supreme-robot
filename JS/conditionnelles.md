## Les instructions conditionnelles

### Définitions

- **Instruction**: c'est une opération élémentaire dans un programme informatique. C'est en quelque sorte une étape du programme. L'instruction est comme un ordre que l'ordinateur doit accomplir. En Javascript toutes les instructions sont séparées par un point virgule.
- **Bloc**: un bloc permet de regrouper un ensemble d'instructions. Un bloc est délimité par une paire d'accolade. Le bloc est utilisé pour les instructions conditionnelles.

### L'instruction `if...else`

- Les instructions conditionnelles permettent de rendre un programme intéractif, en réagissant notamment aux actions de l'utilisateur.
- L'instruction conditionnelle est un ensemble d'instruction qui est exécuté si une condition donnée est vérifiée.
- La condition à vérifier est une condition logique, c'est-à-dire que sa valeur est soit `true` soit `false`
- En Javascript, il existe deux instructions conditionnelles : `if...else` et `switch`

- Voici un exemple de programme en pseudo-code utilisant des instructions conditionnelles :

```
temperature = 30
si (temperature > 30) {
    resterAlamaison()
} sinon {
    sortir()
}
```

- Voici le même programme en Javascript :

```
let temperature = 30;

if (temperature > 30) {
    stayHome()
} else {
    goOut()
}
```

Si la première condition vaut `true` (ce qui est le cas dans notre exemple) alors le code dans le premier bloc sera exécuté. Si elle est `false` alors le code dans le deuxième bloc sera excécuté.

Il est aussi possible d'exécuter plusieurs tests de conditions les uns à la suite des autres. Dans ce cas-là, le faut utiliser la construction `if...else if...else` :

```
let temp = 30;

if (temp > 30) {
    goTotTheBeach()
} else if (temp > 20) {
    goForAWalk()
} else {
    stayHome()
}

```

L'exécution d'un bloc de code dans une instruction conditionnelle est exclusif. Cela signifie que tous les autres blocs ne seront pas exécutés.

### Travaux pratiques

https://www.jschallenger.com/javascript-basics/conditionals

### Coding Challenge

[Go here](./challenges.md)
