## Itérations et boucles

### Recueil des représentations initiales

- Donner des exemples de boucles et de répétitions
- Automatisation et boucles

### Définition

- **Itération** : une itération correspond au fait de répéter un processus. Itérer, c'est donc répéter. En informatique, on utilise aussi le mot de boucle. Tout le pouvoir de l'informatique réside en quelques sortes dans ce concept.

- Répéter, oui mais quoi ? N'importe quel type d'opération. Imaginez un sac de carottes qu'il faudrait éplucher. Disons à présent que l'action d'éplucher a été programmée dans la fonction du même nom : eplucher. La boucle est cet élément qui va permettre d'éplucher toutes les carottes du sac de la façon suivante : pour chaque carotte du sac, exécuter la fonction éplucher.

- Répéter, oui mais combien de fois ? On peut répéter n'importe quel nombre de fois, et ce jusqu'à l'infini. Il existe deux façons de boucler. Soit le nombre des répétitions est connu l'avance, soit ce nombre est inconnu. A chaque cas de figure est associé un type particulier de boucle.

### La boucle for

- Elle permet d'exécuter une instruction jusqu'à ce qu'une condition donnée ne soit plus vraie. En voici la construction :

```
for ([j'initialise un compteur]; [je vérifie si je peux continuer]; [je fais progresser mon compteur])
    instruction
```

- Le point de départ de la boucle est une variable, qui me permet d'initialiser un compteur, c'est-à-dire, de lui donner une valeur de départ.

- A chaque tour, je fais progresser mon compteur, c'est-à-dire que je le lui donne une direction, mais aussi une vitesse.

- La boucle for tourne tant que la condition donnée est vraie. Ainsi, à chaque tour, je vérifie si je peux continuer, c'est-à-dire, si la condition est vraie. Si la condition est fausse, ma boucle cesse de s'exécuter, et je passe à la suite.

- On utilise la boucle for lorsque l'on connaît par avances le nombre des répétitions. Par exemple, si je connais le nombre de carottes dans le sac, je peux dire : épluche les carottes de la première à la vingtième. Si je connais pas ce nombre, il faudrait utiliser un autre type de boucle, qui consiste à dire : épluche les carottes tant qu'il y en a dans le sac.

- Voici à quoi pourrait ressembler la boucle for qui va me permettre d'éplucher toutes les carottes :

```
for (compteur = 1; compteur <= 20; compteur + 1)
    éplucher(carotte)
```

- En javascript, voici à quoi cela ressemble :

```
for (let i = 1; i <= 20; i += 1) {
 eplucher(carotte)
}
```

- On peut traduire cette structure de la façon suivante : je fais démarrer mon compteur à un, et tant que sa valeur est inférieur ou égale à 20, j'épluche une carotte. Une fois le tour de boucle terminé, j'ajoute un à mon compteur. Ainsi, à chaque tour, ce compteur se rapproche de 20. Lorsqu'il sera égal à 21, je sortirai de la boucle.

- On reconnaît dans cette construction les accolades, les mêmes que l'on utilise dans les conditionnelles. Elles permettent de regrouper une série d'instructions à exécuter.

#### Challenges

- programmer une boucle qui permette d'afficher les nombres de 1 à 20 inclus.
- programmer une boucle qui permette d'afficher 10 fois la chaîne de caractère "Piatti, c'est la vie".
- programmer une boucle qui permette d'afficher les nombres de 20 à 1 inclus.
- programmer une boucle qui permette d'afficher les nombres impairs de 1 à 20.
- programmer une boucle qui permette d'afficher les nombres pairs de 0 à 20.
- programmer une boucle qui permette d'additionner tous les nombres de 1 à 20 inclus.
- programmer une boucle qui permette d'effectuer la multiplication suivante (10 x 25).
