from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/logistica")
def logistica():
    return render_template("logistica.html")
    
@app.route("/programacao")
def programacao():
    return render_template("programacao.html")

@app.route("/checklist")
def checklist():
    return render_template("checklist.html")

@app.route("/oracao")
def oracao():
    return render_template("oracao.html")

@app.route("/orientacoes")
def orientacoes():
    return render_template("orientacoes.html")

if __name__ == "__main__":
    app.run(debug=True)
