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
