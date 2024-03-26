# Test initial de connaissances

- https://www.w3schools.com/python/python_quiz.asp

# Activité: Création d'un Serveur Web Simple avec Flask

## Objectifs

- Apprendre à installer et utiliser le micro-framework Flask.
- Développer une application web simple qui répond à des requêtes HTTP.

## Instructions

### Étape 1: Installation de Flask

- Ouvrez un terminal ou une invite de commande.
- Installez Flask en utilisant pip, le gestionnaire de paquets Python, avec la commande suivante: `pip install flask`

### Étape 2: Création de votre première application Flask

- Créez un nouveau dossier pour votre projet Flask.
- À l'intérieur de ce dossier, créez un fichier nommé `app.py`.
- Ouvrez app.py dans votre éditeur de texte ou IDE et écrivez le code suivant:

```python
from flask import Flask
app = Flask(**name**)

@app.route('/')
def home():
return 'Bonjour, World!'

if **name** == '**main**':
app.run(debug=True)
```

### Étape 3: Exécution de l'Application

- Retournez à votre terminal ou invite de commande.
- Naviguez jusqu'au dossier contenant app.py.
- Exécutez l'application en tapant la commande suivante: `python app.py`

- Ouvrez un navigateur web et allez à l'adresse http://127.0.0.1:5000/. Vous devriez voir le message "Hello, World!".

### Étape 4: Exploration et Extension

- Tâche 1: Modifiez le message de bienvenue pour inclure votre nom. Par exemple, "Hello, World! Je suis [VotreNom]."
- Tâche 2: Créez une nouvelle route /about qui renvoie un texte parlant brièvement de vous ou du site.
- Tâche 3: (Optionnel) Expérimentez avec le renvoi de HTML au lieu de texte. Par exemple, renvoyez une petite page HTML qui utilise des balises comme `<h1>`, `<p>`, et `<a>` dans votre fonction.
- Tâche 4: qu'est-ce qu'un environnement virtuel et pourquoi est-il préférable de développer dans un environnement virtuel ?
- Tâche 5: le server écoute les requêtes sur le port 5000, modifiez l'application afin que le server écoute sur le port 3000
