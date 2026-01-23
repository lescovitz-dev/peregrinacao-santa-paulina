from flask import Flask, render_template

app = Flask(__name__)

# ✅ ITENS DO CHECKLIST (CADASTRADOS AQUI)
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

@app.route("/logistica")
def logistica():
    return render_template("logistica.html")
    
@app.route("/programacao")
def programacao():
    return render_template("programacao.html")

@app.route("/checklist")
def checklist():
    # ✅ ENVIA A LISTA PARA O TEMPLATE
    return render_template("checklist.html", itens=CHECKLIST_ITENS)

@app.route("/oracao")
def oracao():
    return render_template("oracao.html")

@app.route("/orientacoes")
def orientacoes():
    return render_template("orientacoes.html")
    
@app.route("/mapa")
def mapa():
    return render_template("mapa.html")

if __name__ == "__main__":
    app.run(debug=True)
