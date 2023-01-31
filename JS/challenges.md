## Challenge 1 : Quizz Mathématique (v1)

- Vous allez créer un programme qui permet de tester les connaissances de l'utilisateur sur les opérations mathématiques de l'addition, la soustraction et la multiplication.
- Le quizz devra comprendre au moins cinq questions dans la forme suivante: `Q1: 2 + 2 = ?`
- Une fois le quizz terminé, vous afficherez à l'écran toutes les réponses de l'utilisateur dans l'ordre et séparées d'une virgule.
- Vous utiliserez la fonction JS `prompt` et votre programme devra être contenu dans une fonction.

### Déclarer et éxecuter une fonction

- Pour déclarer une fonction, il faut utiliser le mot clé `function` suivi du nom de la fonction, suivi d'une paire de parenthèses, suivi d'une paire d'accolades.
- Pour définir une fonction, il suffit d'insérer le code voulu à l'intérieur des accolades.
- Pour exécuter une fonction, il suffit d'écrire le nom de la fonction suivi d'une paire de parenthèses.
- Ex:

```
function hello(){
    console.log("Hello")
}
hello() // retourne "Hello"
```

### La fonction prompt

- La fonction `prompt` permet de capturer ce qu'écrit l'utilisateur.
- Elle prend comme argument du texte à afficher à l'utilisateur.
- Elle retourne comme valeur le texte saisi par l'utilisateur
- Ex:

```
let input = prompt("What's your name?")

console.log(input) // retourne {nom saisi par l'utilisateur}

```

## Challenge 1 : Quizz Mathématique (v2)

- Au lieu d'afficher les réponses de l'utilisateur à la fin du quizz, vous lui indiquerez si sa réponse est juste, ou si sa réponse est fausse. Si elle est juste, vous le féliciterez. Si elle est fausse, vous lui donnerez la bonne réponse.
- A la fin du quizz vous donnerez à l'utilisateur sa note dans la forme x/z, ex: 3/4

## Challenge 2 : Convertisseur de note

- Le convertisseur de note permet à l'utilisateur de convertir une note sur 20 en une note du système anglo-saxon.
- Voici les équivalences : A+ (16-20), A (15), A- (14), B+ (13), B (12), B- (11) et ainsi de suite jusqu'à F qui correspond à la note 4/20.
- Pour les notes en dessous de 4 et au dessus de 20, il faudra informer à l'utilisateur qu'il n'existe pas de notation.

## Challenge 3 : Convertisseur celsius/fahrenheit

- Le convertisseur celsius/fahrenheit permet de convertir les degrés d'une échelle à l'autre.
