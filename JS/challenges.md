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
