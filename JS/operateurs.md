## Les expressions et les opérateurs

### Recueil des représentations initiales

### Définitions

- **Expression** : unité de code valide qui peut être évaluée, c'est-à-dire une unité de code qui résulte en une valeur.
- ex: `let a = 36` ou encore `9 + 8`
- **Opérateur** : symbole qui signifie une opération.
- ex: `+` lorsqu'il est opérateur arithmétique permet d'effectuer une addition. Lorsqu'il est opérateur pour les chaînes de caractères, il permet d'attacher une chaîne à une autre (concaténation).
- **Valeur logique** : appellée aussi valeur booléenne, elle permet de représenter une valeur de vérité, c'est-à-dire soit vrai, soit faux (true ou false).

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

#### Affectation après addition (+=)

- Cet opérateur permet de calculer la somme (ou concaténation) de ses deux termes avant d'affecter le résultat de cette somme à la variable que représente le terme de gauche.

```
let a = 2;
a += 3; // 5
```

#### Affectation après soustraction (-=)

- Cet opérateur permet d'effectuer la soustraction entre ses deux termes avant d'affecter le résultat de cette soustraction à la variable que représente le terme de gauche.

```
let a = 2;
a -= 3; // -1
```

#### Affectation après multiplication (\*=)

```
let a = 2;
a *= 3; // 6
```

#### Affectation après division (/=)

```
let a = 2;
a /= 2; // 1
```

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
- L'opérateur reste `%` renvoie le reste d'une division. Ex: `const a = 8 % 6 // renvoie 2`
- L'opérateur puissance `**` renvoie le résultat de l'exponentiation de l'opérande de gauche par l'opérande de droite. Ex: `const a = 2**2 // renvoie 4`
- L'opérateur incrément `++` permet d'ajouter un à la variable devant ou derrière laquelle il est placé. Ex: `let a = 1; a++ // 2`
- L'opérateur décrément `++` permet de retirer un à la variable devant ou derrière laquelle il est placé. Ex: `let a = 1; a-- // 0`

### Les opérateurs pour les chaînes de caractères

- L'opérateur de concaténation `+` permet d'attacher deux chaînes de caractères ensemble.
- Ex: `'bon' + 'jour'` résultera dans la valeur `'bonjour'`

### Les opérateur logiques

- L'opérateur logique permet de composer une expression et de savoir si cette expression est vraie ou fausse.
- Une opération logique peut comporter un ou plusieurs opérandes.

#### L'opérateur ET (&&)

- Renvoie `true` si et seulement si les éléments à gauche et à droite de l'opérateur (les opérandes) ont une valeur à `true`. Dans les autres cas, l'opération renvoie `false`
- Ex: `true && true // renvoie true`
- Ex: `true && false // renvoie false`
- Ex: `const a = 1 + 1 == 2 && 2 + 2 == 4 // renvoie true`

#### L'opérateur OU (||)

- Renvoie `true` si au moins un des deux opérandes ont une valeur à `true`. Ne renvoie `false` que si les deux opérandes sont `false`
- Ex: `true || true // renvoie true`
- Ex: `true || false // renvoie true`
- Ex: `const a = 1 + 1 == 2 || 2 + 2 == 4 // renvoie true`
- Ex: `const a = 1 + 1 == 2 || 2 + 9 == 4 // renvoie true`

#### L'opérateur NON (!)

- Inverse la valeur de l'expression : renvoie `true` si l'expression est `false` et renvoie `false` si l'expression est `true`
- Ex: `!true // renvoie false`
- Ex: `!false // renvoie true`
- Ex: `const a = !(1 + 1 == 2) // renvoie false`

### Travaux pratiques

- Challenges variables (https://www.jschallenger.com/javascript-basics/operators)
