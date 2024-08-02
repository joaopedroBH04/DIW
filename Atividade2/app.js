document.addEventListener('DOMContentLoaded', async () => {

    const userData = await getUserData('seu-username');
    const userRepos = await getUserRepos('seu-username');
    

    document.getElementById('perfil-content').innerHTML = `
      <img src="${userData.avatar_url}" alt="${userData.name}" class="img-fluid rounded-circle">
      <h3>${userData.name}</h3>
      <p>${userData.bio}</p>
    `;
    

    userRepos.forEach(repo => {
      document.getElementById('repos-content').innerHTML += `
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${repo.name}</h5>
              <p class="card-text">${repo.description}</p>
              <a href="${repo.html_url}" class="btn btn-primary">Acessar</a>
            </div>
          </div>
        </div>
      `;
    });
    

    const conteudosResponse = await fetch('http://localhost:3000/conteudos');
    const conteudos = await conteudosResponse.json();
    conteudos.forEach((conteudo, index) => {
      document.getElementById('conteudos-content').innerHTML += `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
          <img src="${conteudo.urlImagem}" class="d-block w-100" alt="${conteudo.titulo}">
          <div class="carousel-caption d-none d-md-block">
            <h5>${conteudo.titulo}</h5>
            <p>${conteudo.descricao}</p>
            <a href="${conteudo.url}" class="btn btn-primary">Ver mais</a>
          </div>
        </div>
      `;
    });
  
    const colegasResponse = await fetch('http://localhost:3000/colegas');
    const colegas = await colegasResponse.json();
    colegas.forEach(colega => {
      document.getElementById('colegas-content').innerHTML += `
        <div class="col-md-4">
          <div class="card">
            <img src="${colega.fotoUrl}" class="card-img-top" alt="${colega.nome}">
            <div class="card-body">
              <h5 class="card-title">${colega.nome}</h5>
              <a href="${colega.githubUrl}" class="btn btn-primary">Ver perfil</a>
            </div>
          </div>
        </div>
      `;
    });
  });
  