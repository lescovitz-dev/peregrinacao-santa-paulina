/* ======================================================
   DADOS – PONTOS DE APOIO
====================================================== */

/* 🔹 DIA 1 */
const apoiosDia1 = [
  { km: 6, lat: -27.000923, lng: -49.038497, carro: 1, nome: "Van Maria" },
  { km: 9, lat: -27.019043, lng: -49.023349, carro: 2, nome: "Kombi José" },
  { km: 12.3, lat: -27.036939, lng: -49.020904, carro: 3, nome: "Caminhonete Paulo" },
  { km: 14.6, lat: -27.045777, lng: -49.013245, carro: 4, nome: "Van Ana" },
  { km: 18.4, lat: -27.069221, lng: -48.998240, carro: 1, nome: "Van Maria" }
];

/* 🔹 DIA 2 */
const apoiosDia2 = [
  { km: 4.2, lat: -27.124129, lng: -48.936247, carro: 2, nome: "Kombi José" },
  { km: 9.7, lat: -27.159833, lng: -48.955933, carro: 3, nome: "Caminhonete Paulo" },
  { km: 12.4, lat: -27.180118, lng: -48.967557, carro: 4, nome: "Van Ana" },
  { km: 15.4, lat: -27.194496, lng: -48.951509, carro: 1, nome: "Van Maria" }
];

/* ======================================================
   GERADOR DE TABELA
====================================================== */
function renderTabelaApoios(containerId, dados, dia) {
  let html = `
    <table class="tabela-apoios">
      <thead>
        <tr>
          <th>#</th>
          <th>Km</th>
          <th>Carro</th>
          <th>Apoio</th>
        </tr>
      </thead>
      <tbody>
  `;

  dados.forEach((p, i) => {
    html += `
      <tr>
        <td>${i + 1}</td>
        <td>${p.km} km</td>
        <td>Carro ${p.carro}</td>
        <td>${p.nome}</td>
      </tr>
    `;
  });

  html += `
      </tbody>
    </table>
  `;

  document.getElementById(containerId).innerHTML = html;
}

