from flask import Flask, render_template

app = Flask(__name__)
APP_VERSION = "1.1.1"
CHECKLIST_ITENS = [
    "Documento pessoal",
    "Cartão SUS / Plano de saúde",
    "Medicamentos de uso contínuo",
    "Protetor solar",
    "Boné ou chapéu",
    "Capa de chuva",
    "Meias extras",
    "Tênis confortável",
    "Garrafa de água",
    "Mochila leve"
]

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/programacao")
def programacao():
    return render_template("programacao.html")

@app.route("/orientacoes")
def orientacoes():
    return render_template("orientacoes.html")

@app.route("/checklist")
def checklist():
    return render_template("checklist.html", itens=CHECKLIST_ITENS)

@app.route("/mapa")
def mapa():
    return render_template("mapa.html")

@app.route("/extras")
def extras():
    return render_template("extras.html")

@app.route("/oracoes")
def oracoes():
    return render_template("oracoes.html")

@app.route("/oracoes/santa-paulina")
def santa_paulina():
    return render_template("oracoes/santa_paulina.html")

@app.route("/oracoes/rosario")
def rosario():
    return render_template("rosario/rosario.html")

@app.context_processor
def inject_version():
    return dict(app_version=APP_VERSION)

if __name__ == "__main__":
    app.run(debug=True)
