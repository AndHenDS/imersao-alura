function search() {
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

  let resultados = "";
  let title = "";
  let scientificName = "";
  let description = "";
  let tags = "";

  for (let dado of serpentesBrasileiras) {
    title = dado.title.toLowerCase();
    scientificName = dado.scientificName.toLowerCase();
    habitat = dado.habitat.toLowerCase();
    conservationStatus = dado.conservationStatus.toLowerCase();
    causes = dado.causes.toLowerCase();
    description = dado.description.toLowerCase();
    tags = dado.tags.toLowerCase();
    if (title.includes(campoPesquisa) || description.includes(campoPesquisa) || tags.includes(campoPesquisa) || scientificName.includes(campoPesquisa)) {
      resultados += `
        <div class="item-resultado">
        <img src="images/${dado.image}" alt="${dado.title}" class="imagem-cobra">
          <h2>
            <a href="#" target="_blank">${dado.title}</a>
          </h2>
          <p class="descricao-meta">${dado.scientificName}</p>
          <p class="descricao-meta">${dado.habitat}</p>
          <p class="descricao-meta">${dado.conservationStatus}</p>
          <p class="descricao-meta">${dado.causes}</p>
          <p class="descricao-meta">${dado.description}</p>
          <a href=${dado.wikipediaLink} target="_blank">Leia Mais</a>
          
          
        </div>
      `;
    }
  }

  section.innerHTML = resultados || "<p>Nenhum espécie encontrada</p>";
}