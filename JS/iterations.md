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
for ([point de départ]; [point d'arrivée]; [mesure de progrès])
    instruction
```

- Le point de départ est une variable, le point d'arrivée est une condition, la mesure de progrès est ce qui va permettre de passer du point de départ jusqu'au point d'arrivée. Une fois le point d'arrivée dépassé, on sort de la boucle.

- On utilise la boucle for lorsque l'on connaît par avances le nombre des répétitions. Par exemple, si je connais le nombre de carottes dans le sac, je peux dire : épluche les carottes de la première à la vingtième. Si je connais pas ce nombre, il faudrait utilise un autre type de boucle, qui consiste à dire : épluche les carottes tant qu'il y en a dans le sac.

- Voici à quoi pourrait ressembler la boucle for qui va me permettre d'éplucher toutes les carottes :

```
for (carotte = 1; carotte <= 20; carotte + 1)
    éplucher(carotte)
```

- En javascript, voici à quoi cela ressemble :

```
for (let carotte = 1; carotte <= 20; carotte += 1) {
 eplucher(carotte)
}
```

- On reconnaît dans cette construction les accolades, les mêmes que l'on utilise dans les conditionnelles. Elles permettent de regrouper une série d'instructions à exécuter.

- Le point de départ est une expression. On l'utilise pour initialiser un compteur, c'est-à-dire lui donner sa valeur de départ.

- Le point d'arrivée est une condition. Cette condition est évaluée à chaque tour. Si cette condition est remplie (elle vaut true), alors les instructions contenues dans la boucle sont exécutées. (Attention: si cette condition est absente, elle est considérée comme remplie, ce qui est une façon de créer une boucle infinie).

- La mesure de progrès est généralement une opération effectuée sur l'expression de départ, afin qu'au terme de chaque boucle on se rapproche du point d'arrivée. Dans la mesure de progrès dans l'exemple ci-dessus consiste à ajouter un à la variable carotte. Ainsi cette boucle ne permettra d'éplucher les carottes de la première à la vingtième. Si l'on avait voulu éplucher que la moitié du sac, il aurait suffit de définir la mesure de progrès comme suit : carotte += 2;

#### Challenges

- programmer une boucle qui permette d'afficher les nombres de 1 à 20 inclus.
- programmer une boucle qui permette d'afficher 10 fois la chaîne de caractère "Piatti, c'est la vie".
- programmer une boucle qui permette d'afficher les nombres de 20 à 1 inclus.
- programmer une boucle qui permette d'afficher les nombres impairs de 1 à 20.
- programmer une boucle qui permette d'afficher les nombres pairs de 0 à 20.
- programmer une boucle qui permette d'additionner tous les nombres de 1 à 20 inclus.
- programmer une boucle qui permette d'effectuer la multiplication suivante (10 x 25).
