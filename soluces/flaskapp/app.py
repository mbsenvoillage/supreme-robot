from flask import Flask, render_template, request, redirect, url_for, session
from tinydb import TinyDB, Query
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'
db = TinyDB('db.json')
User = Query()

@app.route('/')
def index():
    return redirect(url_for('login'))

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        hashed_password = generate_password_hash(password, method='sha256')
        if db.search(User.username == username):
            return 'Username already exists!'
        db.insert({'username': username, 'password': hashed_password, 'login_count': 0})
        return redirect(url_for('login'))
    return render_template('register.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        user = db.search(User.username == username)
        if user and check_password_hash(user[0]['password'], password):
            session['user_id'] = user[0].doc_id
            db.update({'login_count': user[0]['login_count'] + 1}, doc_ids=[user[0].doc_id])
            return redirect(url_for('home'))
    return render_template('login.html')

@app.route('/logout')
def logout():
    session.pop('user_id', None)
    return redirect(url_for('login'))

@app.route('/home')
def home():
    if 'user_id' not in session:
        return redirect(url_for('login'))
    user = db.get(doc_id=session['user_id'])
    return render_template('home.html', username=user['username'], login_count=user['login_count'])

if __name__ == '__main__':
    app.run(debug=True)
