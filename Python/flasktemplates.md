# Cours simple sur l'utilisation des templates dans Flask

Les templates dans Flask permettent de séparer la logique de l'application et la présentation des données. Flask utilise Jinja2 comme moteur de template. Voici comment utiliser les templates dans Flask.

## 1. Installation de Flask

Assurez-vous d'avoir Flask installé en utilisant la commande suivante dans le terminal :

```sh
pip install flask
```

## 2. Structure de base du projet

Créez la structure de base de votre projet Flask :

```plaintext
mon_projet_flask/
│
├── app.py
├── templates/
│   ├── base.html
│   ├── index.html
│   └── about.html
```

## 3. Création du fichier `app.py`

Créez un fichier `app.py` avec le contenu suivant :

```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

if __name__ == '__main__':
    app.run(debug=True)
```

### Explication du code :

- `Flask(__name__)` : Crée une instance de l'application Flask.
- `@app.route('/')` : Définit une route pour la page d'accueil.
- `render_template('index.html')` : Rend le template `index.html` situé dans le dossier `templates`.
- `app.run(debug=True)` : Lance l'application en mode débogage.

## 4. Création des templates HTML

### `base.html`

Le fichier `base.html` servira de modèle de base pour les autres templates :

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Flask App</title>
  </head>
  <body>
    <header>
      <h1>Welcome to My Flask App</h1>
      <nav>
        <ul>
          <li><a href="{{ url_for('index') }}">Home</a></li>
          <li><a href="{{ url_for('about') }}">About</a></li>
        </ul>
      </nav>
    </header>
    <main>{% block content %}{% endblock %}</main>
  </body>
</html>
```

### `index.html`

Le fichier `index.html` héritera de `base.html` et remplira le bloc de contenu :

```html
{% extends 'base.html' %} {% block content %}
<h2>Home Page</h2>
<p>Welcome to the home page!</p>
{% endblock %}
```

### `about.html`

Le fichier `about.html` héritera également de `base.html` et remplira le bloc de contenu :

```html
{% extends 'base.html' %} {% block content %}
<h2>About Page</h2>
<p>This is the about page.</p>
{% endblock %}
```

## 5. Utilisation des variables dans les templates

Vous pouvez passer des variables de votre application Flask à vos templates.

### Mise à jour de `app.py`

Modifiez `app.py` pour passer des variables aux templates :

```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    user = {'username': 'Alice'}
    return render_template('index.html', user=user)

@app.route('/about')
def about():
    return render_template('about.html')

if __name__ == '__main__':
    app.run(debug=True)
```

### Mise à jour de `index.html`

Modifiez `index.html` pour utiliser la variable passée depuis `app.py` :

```html
{% extends 'base.html' %} {% block content %}
<h2>Home Page</h2>
<p>Welcome, {{ user.username }}!</p>
{% endblock %}
```

## 6. Boucles et conditions dans les templates

### Utilisation des boucles

Vous pouvez utiliser des boucles dans vos templates pour itérer sur des listes de données.

### Mise à jour de `app.py`

Ajoutez une liste d'éléments à passer au template :

```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    user = {'username': 'Alice'}
    posts = [
        {'author': 'Bob', 'content': 'Beautiful day in Portland!'},
        {'author': 'Charlie', 'content': 'The Avengers movie was so cool!'}
    ]
    return render_template('index.html', user=user, posts=posts)

@app.route('/about')
def about():
    return render_template('about.html')

if __name__ == '__main__':
    app.run(debug=True)
```

### Mise à jour de `index.html`

Utilisez une boucle pour afficher les éléments de la liste :

```html
{% extends 'base.html' %} {% block content %}
<h2>Home Page</h2>
<p>Welcome, {{ user.username }}!</p>
<ul>
  {% for post in posts %}
  <li><strong>{{ post.author }}:</strong> {{ post.content }}</li>
  {% endfor %}
</ul>
{% endblock %}
```

### Utilisation des conditions

Vous pouvez également utiliser des conditions dans vos templates.

### Mise à jour de `index.html`

Ajoutez une condition pour afficher un message si la liste des posts est vide :

```html
{% extends 'base.html' %} {% block content %}
<h2>Home Page</h2>
<p>Welcome, {{ user.username }}!</p>
{% if posts %}
<ul>
  {% for post in posts %}
  <li><strong>{{ post.author }}:</strong> {{ post.content }}</li>
  {% endfor %}
</ul>
{% else %}
<p>No posts to display.</p>
{% endif %} {% endblock %}
```

## Conclusion

Avec ce tutoriel, vous avez appris les bases de l'utilisation des templates dans Flask. Vous savez maintenant comment créer des templates, utiliser l'héritage de templates, passer des variables aux templates, et utiliser des boucles et des conditions dans vos templates.
