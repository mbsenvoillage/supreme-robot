### Cours simple sur l'utilisation des formulaires HTML avec Flask

Utiliser des formulaires HTML dans une application Flask est un moyen fondamental de collecter des données des utilisateurs. Flask permet de gérer facilement les formulaires en utilisant les requêtes POST et GET. Voici un guide simple pour créer et gérer des formulaires HTML avec Flask.

#### 1. Installation de Flask

Assurez-vous que Flask est installé. Si ce n'est pas le cas, vous pouvez l'installer via pip :

```bash
pip install flask
```

#### 2. Structure du projet

Organisez votre projet Flask avec une structure de dossier simple :

```plaintext
mon_projet_flask/
│
├── app.py
└── templates/
    └── form.html
```

#### 3. Création de l'application Flask

Dans le fichier `app.py`, créez votre application Flask et définissez les routes pour gérer les formulaires :

```python
from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def form():
    if request.method == 'POST':
        username = request.form.get('username')
        # Vous pouvez ajouter d'autres traitements ici
        return redirect(url_for('success', username=username))
    return render_template('form.html')

@app.route('/success/<username>')
def success(username):
    return f'Welcome, {username}!'

if __name__ == '__main__':
    app.run(debug=True)
```

**Explications :**

- `@app.route('/')` définit une route qui accepte les méthodes GET et POST. GET pour afficher le formulaire, et POST pour traiter les données soumises.
- `request.form.get('username')` récupère la valeur du champ 'username' du formulaire.
- `redirect(url_for('success', username=username))` redirige vers une nouvelle route en passant le nom d'utilisateur comme argument.

#### 4. Création du formulaire HTML

Créez un fichier `form.html` dans le dossier `templates` pour définir le formulaire :

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Simple Form</title>
  </head>
  <body>
    <h1>Enter Your Name</h1>
    <form method="POST" action="/">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required />
      <button type="submit">Submit</button>
    </form>
  </body>
</html>
```

**Explications :**

- La balise `<form>` définit un formulaire avec `method="POST"` pour soumettre les données à la même URL (`action="/"`) qui est la racine du site.
- Le champ `<input>` collecte le nom d'utilisateur et l'attribut `name="username"` est utilisé pour récupérer les données du formulaire côté serveur via `request.form.get('username')`.

#### 5. Test de l'application

1. Exécutez votre application Flask.
2. Ouvrez un navigateur et allez à l'adresse `http://127.0.0.1:5000/`.
3. Entrez un nom dans le champ du formulaire et soumettez-le.
4. Vous devriez être redirigé vers une page qui vous accueille par le nom que vous avez entré.
