<p align="center"> <img src="https://imgur.com/J3hD21O.png" alt="Javascript: criando requisições"> </p>

<hr>

<p align="center"> <img src="https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png" alt="Logo da Alura"> </p>
<p align="center">Página inicial e formulário de cadastro de vídeos da AluraPlay, uma plataforma de compartilhamento de vídeos.</p>

## Tecnologias utilizadas durante o curso
* Javascript
* NodeJS
* Json-server

## Tecnologias utilizadas no projeto
* HTML
* CSS

## Screenshots
![Screenshot da tela inicial do AluraPlay](https://imgur.com/aymxEsh.png)
![Screenshot da tela do formulário do AluraPlay](https://imgur.com/ShNADf2.png)

## O que eu aprendi

- Instalar e utilizar o NodeJS para criar um servidor local para hospedar a API. Com o comando ```npx json-server --watch db.json```, é possível iniciar o banco de dados para a página carregar a API e mostrar todos os objetos nela presentes.

- Exportar e Importar funções JavaScript.

Exportando:
```js
export const conectaApi = {
    listaVideos, 
    criaVideo,
    buscaVideo
}
----
export default function constroiCard(titulo, descricao, url, imagem) {
    const video = document.createElement('li');
    video.className = "videos__item";
    video.innerHTML = `
    <iframe width="100%" height="72%" src="${url}"
        title="${titulo}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    <div class="descricao-video">
        <img src="${imagem}" alt="logo canal alura">
        <h3>${titulo}</h3>
        <p>${descricao}</p>
    </div>`;

    return video;
}
```

Importando:
```js
import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";
```

- Criar uma requisição ```POST```.
```js
async function criaVideo(titulo, descricao, url, imagem) {
    // padrão da requisição é GET. Necessário mudar com method: POST
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });
```

- Buscar um objeto da API pelo diretório da mesma.
```js
async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}
```
