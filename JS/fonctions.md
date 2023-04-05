# I. Introduction

## A. Le concept de fonction

Les fonctions en programmation sont des **blocs de code** qui peuvent **être appelés** à partir d'autres parties du programme. Les fonctions permettent d'**organiser le code** en le divisant en tâches plus petites et plus faciles à gérer.

## B. Intérêt des fonctions en programmation

Les fonctions facilitent beaucoup le travail du développeur. En écrivant des fonctions **réutilisables**, on peut **économiser beaucoup de temps** et d'efforts en évitant de répéter le même code plusieurs fois. Les fonctions permettent également de **rendre le code plus lisible** et plus facile à déboguer. En outre, les fonctions sont souvent utilisées pour résoudre des problèmes complexes en programmation, en **divisant le problème en tâches plus petites** et plus faciles à gérer.

# II. Définition de la fonction

## A. Utilisation du mot-clé `function`

En JavaScript, pour définir une fonction, on utilise le mot-clé `function` suivi du nom de la fonction, d'une paire de parenthèses et d'une paire d'accolades. La syntaxe générale est la suivante :

```js
function nomDeLaFonction() {
  // Instructions de la fonction
}
```

"Définir une fonction" en programmation signifie écrire le code de la fonction pour qu'elle puisse être utilisée dans d'autres parties du programme. Cela implique de créer une structure pour la fonction, de lui donner un nom, d'écrire les instructions qui seront exécutées lorsque la fonction est appelée, et éventuellement de définir les **paramètres** et la **valeur de retour** de la fonction.

La définition de la fonction permet de créer une **abstraction** pour une tâche spécifique que l'on souhaite exécuter plusieurs fois dans le programme. Elle permet de **définir une tâche unique** qui peut être appelée de manière répétée à partir de différents endroits du programme.

## B. Nommer une fonction

Il est important de donner un nom significatif à la fonction pour pouvoir l'appeler facilement dans le reste du programme. Cela permet aussi de vite comprendre ce qu'elle accomplit. Par exemple :

```js
function calculerSomme() {}
```

## C. Exemple de fonction simple

La fonction `direBonjour` lorsqu'elle est appelée affiche le message "Bonjour!"

```js
function direBonjour() {
  console.log("Bonjour !");
}
```

## Exercices

1. Écrivez une fonction qui affiche "Hello World!" dans la console.
2. Écrivez une fonction qui prend un nombre en argument et affiche sa table de multiplication de 1 à 10 dans la console.
3. Écrivez une fonction qui prend un tableau en argument et affiche chaque élément dans la console.

# III. Appel de la fonction

## A. Utilisation du nom de la fonction suivi de parenthèses

Pour appeler une fonction en JavaScript, il suffit d'utiliser son nom suivi de parenthèses. L'appel de la fonction déclenche l'exécution du code qui a été défini/écrit dans la fonction. Si la fonction prend des arguments, vous pouvez les inclure entre les parenthèses.

## B. Exemple d'appel de fonction simple

```js
// définition de la fonction
function direBonjour() {
  console.log("Bonjour !");
}

// appel de la fonction

direBonjour(); // "Bonjour !" est affiché dans la console
```

Dans cet exemple, nous avons **défini** une fonction nommée "direBonjour" qui affiche "Bonjour !" dans la console. Ensuite, nous avons **appelé** cette fonction en écrivant simplement son nom suivi de parenthèses. Lorsque la fonction est appelée, le message "Bonjour !" est affiché dans la console.

Il est important de noter que la fonction doit être définie avant qu'elle ne soit appelée. Si la fonction était appelée avant d'être définie, cela provoquerait une erreur et le programme ne fonctionnerait pas correctement.

## Exercices

1. Appelez la fonction "Hello World!" définie dans l'exercice 1 de la partie II.

# IV. Arguments et paramètres

## A. Explication de l'utilisation des arguments dans une fonction

Les arguments sont des valeurs que vous pouvez passer à une fonction pour qu'elle les utilise dans son code. Les arguments permettent à une fonction d'être plus flexible et de traiter des données différentes en fonction des valeurs qui lui sont passées. Par exemple, imaginons une fonction qui s'appelle "somme". Cette fonction permet d'additionner deux nombres. Demandons désormais à cette fonction d'additionner les nombres 2 et 6. Ici, les nombres 2 et 6 sont des arguments.

## B. Explication de la notion de paramètre

Les paramètres sont les noms donnés aux arguments dans la définition de la fonction. Les paramètres permettent à la fonction d'accéder aux valeurs des arguments qui lui sont passées. L'utilisation de paramètres permet de nommer les données qui sont passées à la fonction, ce qui rend le code plus lisible et plus facile à comprendre.

## C. Exemple de fonction avec des paramètres

```js
function calculerSomme(nombre1, nombre2) {
  var somme = nombre1 + nombre2;
  console.log(
    "La somme de " + nombre1 + " et " + nombre2 + " est égale à " + somme
  );
}

calculerSomme(5, 7);
```

Dans cet exemple, nous avons défini une fonction nommée "calculerSomme" qui prend deux paramètres : "nombre1" et "nombre2". Lorsque la fonction est appelée, elle calcule la somme des deux nombres en utilisant l'opérateur d'addition, puis affiche le résultat dans la console en utilisant une chaîne de caractères.

Dans l'appel de la fonction, nous passons les valeurs 5 et 7 comme arguments pour les paramètres "nombre1" et "nombre2". Lorsque la fonction est appelée, elle calcule la somme des deux nombres (5 + 7 = 12) et affiche le message "La somme de 5 et 7 est égale à 12" dans la console.

Il est important de noter que le nombre et les types des paramètres définis dans la fonction doivent correspondre aux arguments passés lors de l'appel de la fonction. Si un nombre différent d'arguments est passé ou si les types ne correspondent pas, cela peut provoquer des erreurs dans le code.

## Exercices :

1. Écrivez et exécutez une fonction qui prend un nombre en argument et affiche sa table de multiplication de 1 à 10 dans la console.
2. Écrivez et exécutez une fonction qui prend un tableau en argument et affiche chaque élément dans la console.
3. Écrivez et exécutez une fonction qui prend deux nombres en arguments et affiche le plus grand des deux.
4. Écrivez et exécutez une fonction qui prend un tableau en argument et affiche le premier élément du tableau.
5. Écrivez et exécutez une fonction qui prend un nombre en argument et affiche un message indiquant si le nombre est pair ou impair.

# V. Retour de la fonction

## A. Explication de la notion de retour de fonction

Le retour de fonction est la **valeur renvoyée par une fonction une fois qu'elle a terminé son exécution**. Cette valeur peut être utilisée pour effectuer d'autres tâches dans le programme ou pour être affichée dans la console. Le retour de fonction permet à une fonction de communiquer avec le reste du programme et de transmettre des informations importantes.

## B. Utilisation du mot-clé `return`

En JavaScript, le mot-clé `return` est utilisé pour renvoyer une valeur à partir d'une fonction. Lorsque la fonction atteint l'instruction `return`, elle renvoie la valeur spécifiée et quitte la fonction. Si une fonction ne contient pas d'instruction `return`, elle renvoie une valeur `undefined` par défaut.

## C. Exemple de fonction avec retour de valeur

Voici un exemple de fonction qui calcule la somme de deux nombres et renvoie le résultat en utilisant l'instruction `return` :

```js
function calculerSomme(nombre1, nombre2) {
  let somme = nombre1 + nombre2;
  return somme;
}

let resultat = calculerSomme(5, 7);
console.log("Le résultat est égal à " + resultat);
```

Dans cet exemple, nous avons défini une fonction nommée `calculerSomme` qui prend deux nombres en arguments et renvoie la somme des deux en utilisant l'instruction `return`.

Dans l'appel de la fonction, nous avons passé les valeurs 5 et 7 comme arguments pour les paramètres "nombre1" et "nombre2". Le résultat de la fonction est stocké dans une variable nommée `resultat`. Nous affichons ensuite le résultat dans la console en utilisant une chaîne de caractères.

Lorsque la fonction est appelée, elle calcule la somme des deux nombres (5 + 7 = 12) et renvoie cette valeur à l'aide de l'instruction `return`. Cette valeur est stockée dans la variable `resultat` et affichée dans la console en utilisant le message "Le résultat est égal à 12".

## Exercices

1. Écrivez et exécutez une fonction qui prend deux nombres en arguments et renvoie leur différence.
2. Écrivez et exécutez une fonction qui prend un tableau en argument et renvoie le nombre d'éléments dans le tableau.
3. Écrivez et exécutez une fonction qui prend une chaîne de caractères en argument et renvoie la longueur de la chaîne.

# Challenges

1. Écrivez une fonction qui prend deux nombres en arguments et renvoie leur somme.
2. Écrivez une fonction qui prend un tableau en argument et renvoie la somme de tous les éléments du tableau.
3. Écrivez une fonction qui prend une chaîne de caractères en argument et renvoie la chaîne en majuscules.
4. Écrivez une fonction qui prend un tableau en argument et renvoie le plus grand élément du tableau.
5. Écrivez une fonction qui prend une chaîne de caractères en argument et renvoie la longueur de la chaîne sans les espaces.
6. Écrivez une fonction qui prend un nombre en argument et renvoie le carré de ce nombre.
7. Écrivez une fonction qui prend un tableau en argument et renvoie un nouveau tableau qui contient uniquement les nombres pairs du tableau d'origine.
