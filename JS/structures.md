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
