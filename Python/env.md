# Tutoriel rapide : Comment créer un environnement virtuel Python

Un environnement virtuel est comme une petite boîte où vous pouvez installer des paquets Python sans affecter le reste de votre ordinateur. C'est très pratique pour garder vos projets bien organisés. Suivez ces étapes simples :

## 1. Installation de `venv`

La plupart du temps, Python a déjà un outil appelé `venv` pour créer des environnements virtuels. Si ce n'est pas le cas, il faut d'abord installer Python.

## 2. Ouvrir le terminal

## 3. Créer un répertoire pour votre projet

Avant de créer l'environnement virtuel, créez un dossier où vous allez mettre votre projet. Puis, allez dans ce dossier.

## 4. Créer l'environnement virtuel

Maintenant, tapez cette commande pour créer l'environnement virtuel :

```sh
python -m venv env
```

Cela va créer un dossier appelé env. C'est là que tous les fichiers de l'environnement virtuel seront stockés. Vous n'êtes pas dans l'obligation de nommer ce dossier "env".

## 5. Activer l'environnement virtuel

Pour utiliser l'environnement virtuel, vous devez l'activer.

```sh
source env/bin/activate
```

Après cela, vous devriez voir le nom de votre environnement virtuel dans le terminal, comme ceci `env`

## 6. Installer des paquets

Maintenant que votre environnement virtuel est activé, vous pouvez installer des paquets. Par exemple, pour installer numpy, tapez :

```sh
pip install numpy
```

## 7. Désactiver l'environnement virtuel

Quand vous avez fini de travailler, vous pouvez désactiver l'environnement virtuel en tapant :

```sh
deactivate
```
