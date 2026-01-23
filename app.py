from flask import Flask, render_template

app = Flask(__name__)

# 🔹 ITENS DO CHECKLIST
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

# 🔹 PÁGINA INICIAL
@app.route("/")
def home():
    return render_template("index.html")

# 🔹 PÁGINAS PRINCIPAIS
@app.route("/logistica")
def logistica():
    return render_template("logistica.html")

@app.route("/programacao")
def programacao():
    return render_template("programacao.html")

@app.route("/checklist")
def checklist():
    return render_template("checklist.html", itens=CHECKLIST_ITENS)

@app.route("/orientacoes")
def orientacoes():
    return render_template("orientacoes.html")

@app.route("/mapa")
def mapa():
    return render_template("mapa.html")

@app.route("/extras")
def extras():
    return render_template("extras.html")

# 🔹 ORAÇÕES (MENU)
@app.route("/oracoes")
def oracoes():
    return render_template("oracoes.html")

# 🔹 ORAÇÃO A SANTA PAULINA
@app.route("/oracoes/santa-paulina")
def santa_paulina():
    return render_template("oracoes/santa_paulina.html")

# 🔹 ROSÁRIO (INTERATIVO)
@app.route("/oracoes/rosario")
def rosario():
    return render_template("rosario/rosario.html")

# 🔹 START
if __name__ == "__main__":
    app.run(debug=True)
