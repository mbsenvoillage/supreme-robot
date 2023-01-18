## Les expressions et les opérateurs

### Recueil des représentations initiales

### Définitions

- **Expression** : unité de code valide qui peut être évaluée, c'est-à-dire une unité de code qui résulte en une valeur.
- ex: `let a = 36` ou encore `9 + 8`
- **Opérateur** : symbole qui signifie une opération.
- ex: `+` lorsqu'il est opérateur arithmétique permet d'effectuer une addition. Lorsqu'il est opérateur pour les chaînes de caractères, il permet d'attacher une chaîne à une autre (concaténation).

#### exemples d'expressions:

- `2+2`
- `const name = 'John'`
- `x = Math.PI`

### L'affectation (=)

- L'opérateur d'affectation, qui correspond au signe égal, permet de donner une valeur à une variable.
- Donner une valeur, ou encore assigner une valeur, suppose la présence de trois éléments : ce à quoi on assigne (le nom de la variable), le signe égal et enfin ce qui est assigné (la valeur).
- Dans une affectation, on donne à l'élément de gauche la valeur de l'élément de droite, par le biais du signe égal.
- Ex: `s = 36`. L'expression précédente affecte la valeur de 36 à s.
- Ex: `name = 'Mary'`. Ici la chaîne de caractère Mary est assignée à la variable du nom name.

### La comparaison

- L'opérateur de comparaison permet de comparer deux éléments. Le résultat de cette comparaison est une valeur logique (soit vrai, soit faux).
- En javascript ces deux valeurs logiques sont `true` ou `false`

#### L'égalité (==)

- Renvoie `true` si les deux éléments de la comparaison sont égaux.
- Attention : il n'est pas possible de comparer avec un simple signe égal puisqu'il sert à l'affectation uniquement.
- Ex: `2 + 2 == 4` renvoie `true`
- Ex: `'Mary' == 'Marie'` renvoie `false`
- Ex: `1 + 1 == 3` renvoie `false`

#### L'inégalité (!= )

- Renvoie `true`si les deux éléments de la comparaison sont inégaux.
- Ex: `2+2 != 3` renvoie `true`
- Ex: `'Mary' != 'Marie'` renvoie `true`

#### Supériorité stricte (>)

- Renvoie `true` si l'élément gauche de la comparaison est strictement supérieur à l'élément de droite.
- Ex: `3 > 2` renvoie `true`
- Ex: `3 > 9` renvoie `false`

#### Supériorité (>=)

- Renvoie `true` si l'élément gauche de la comparaison est supérieur ou égal à l'élément de droite.
- Ex: `3 >= 2` renvoie `true`
- Ex: `3 >= 3` renvoie `true`

#### Infériorité stricte (<)

#### Infériorité (<=)

### Les opérateurs arithmétiques

- Parmi ces opérateurs, on retrouve les symboles des opérations arithmétiques de base : `+` (addition), `-` (soustraction), `*` (multiplication) et enfin `/` (division)

### Les opérateurs pour les chaînes de caractères

- L'opérateur de concaténation `+` permet d'attacher deux chaînes de caractères ensemble.
- Ex: `'bon' + 'jour'` résultera dans la valeur `'bonjour'`

### Les opérateur logiques

### Travaux pratiques

- Challenges variables (https://www.jschallenger.com/javascript-basics/operators)
