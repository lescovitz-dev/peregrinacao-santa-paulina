const rosario = [

  // ===== INÍCIO DO ROSÁRIO =====
  {
    tipo: "cruz",
    texto: "Em nome do Pai, do Filho e do Espírito Santo. Amém."
  },
  {
    tipo: "credo",
    texto: "Creio em Deus Pai todo-poderoso, criador do céu e da terra..."
  },
  {
    tipo: "pai-nosso",
    texto: "Pai Nosso que estais no céu..."
  },

  // 3 AVE-MARIAS (FÉ, ESPERANÇA, CARIDADE)
  ...Array.from({ length: 3 }, () => ({
    tipo: "ave-maria",
    texto: "Ave Maria, cheia de graça..."
  })),

  {
    tipo: "gloria",
    texto: "Glória ao Pai, ao Filho e ao Espírito Santo..."
  },

  // ===== PRIMEIRO MISTÉRIO =====
  {
    tipo: "titulo-misterio",
    texto: "Mistério Gozoso – Primeiro Mistério"
  },
  {
    tipo: "pai-nosso",
    misterio: 1,
    texto: "Pai Nosso que estais no céu..."
  },

  // 10 AVE-MARIAS
  ...Array.from({ length: 10 }, () => ({
    tipo: "ave-maria",
    misterio: 1,
    texto: "Ave Maria, cheia de graça..."
  })),

  {
    tipo: "gloria",
    misterio: 1,
    texto: "Glória ao Pai, ao Filho e ao Espírito Santo..."
  },

  // ===== FINAL =====
  {
    tipo: "salve-rainha",
    texto: "Salve, Rainha, Mãe de misericórdia, vida, doçura e esperança nossa..."
  }
];

let indiceAtual = 0;

const rosarioEl = document.getElementById("rosario");
const tituloEl = document.getElementById("titulo-oracao");
const textoEl = document.getElementById("texto-oracao");
const botao = document.getElementById("btn-avancar");
const misterioEl = document.getElementById("misterio-atual");

function renderRosario() {
  rosarioEl.innerHTML = "";

  rosario.forEach((passo, index) => {
    // Não renderiza títulos como conta
    if (passo.tipo === "titulo-misterio") return;

    const conta = document.createElement("div");
    conta.classList.add("conta");

    if (passo.tipo === "pai-nosso") conta.classList.add("grande");
    if (passo.tipo === "gloria") conta.classList.add("pequena");

    if (index < indiceAtual) conta.classList.add("ativa");

    rosarioEl.appendChild(conta);
  });
}

function atualizarTexto() {
  const passo = rosario[indiceAtual];

  // Atualiza título do mistério
  if (passo.tipo === "titulo-misterio") {
    misterioEl.textContent = passo.texto;
    indiceAtual++;
    atualizarTexto();
    return;
  }

  tituloEl.textContent = passo.tipo.replace("-", " ").toUpperCase();
  textoEl.textContent = passo.texto;
}

botao.addEventListener("click", () => {
  if (indiceAtual < rosario.length - 1) {
    indiceAtual++;
    renderRosario();
    atualizarTexto();
  }
});

// inicial
renderRosario();
atualizarTexto();
