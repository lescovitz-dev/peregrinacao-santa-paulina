# 11ª Peregrinação ao Santuário de Santa Paulina

Aplicação web em formato **PWA (Progressive Web App)** desenvolvida para apoiar os peregrinos durante a **11ª Peregrinação ao Santuário de Santa Paulina**, reunindo informações práticas, orientações e recursos espirituais em um único lugar.

O sistema foi pensado com foco **mobile-first**, para ser utilizado diretamente no celular durante a caminhada.

---

## ✨ Funcionalidades

### 📋 Inscrição e informações
- Página de inscrição com exibição da chave PIX para pagamento
- Programação e logística da peregrinação (2 dias)

### 🧳 Checklist do peregrino
- Lista de itens essenciais para saúde e vestuário
- Funciona offline (salvo localmente no dispositivo)

### 🗺️ Mapas do trajeto
- Trajeto do Dia 1 e Dia 2
- Visualização integrada ao Google Maps
- Navegação pensada para percurso a pé

### 🙏 Orações
- **Oração a Santa Paulina**
- **Santo Rosário guiado e interativo**:
  - Contagem visual das contas (dezenas)
  - Mistérios automáticos conforme o dia da semana
  - Orações iniciais (sinal da cruz, oferecimento, credo)
  - Meditação de cada mistério
  - Glória após cada dezena
  - Agradecimento final e Salve Rainha
  - Navegação passo a passo (avançar / voltar)

### 🚍 Extras
- Inscrição para **transporte de retorno (ônibus)**
- Pedido de **camiseta da peregrinação**
- Integração com formulários externos (Google Forms)
- Exibição de valores e instruções de pagamento via PIX

### 📱 Progressive Web App (PWA)
- Pode ser instalado no Android e iOS
- Acesso rápido pelo ícone na tela inicial
- Funciona mesmo com conexão limitada

---

## 🏷️ Versão atual

**v1.1.1**

Principais destaques:
- Inclusão da área de **Extras** (transporte e camisetas)
- Página de Orações reorganizada
- Santo Rosário completamente guiado e interativo
- Melhorias de navegação e UX mobile
- Correções de estabilidade e organização do projeto

---

## 🛠️ Tecnologias utilizadas

- **Python 3**
- **Flask**
- **HTML5, CSS3 e JavaScript**
- **Google Maps (Embed)**
- **PWA**
  - Service Worker
  - Web App Manifest
git status
---

## 🚀 Como rodar o projeto localmente

1. Clone o repositório:
```bash
git clone https://github.com/lescovitz-dev/peregrinacao-santa-paulina.git
cd peregrinacao-santa-paulina

##Instale as Dependências
pip install flask
python app.py
http://127.0.0.1:5000
