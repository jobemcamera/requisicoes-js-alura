// Para abrir o banco de dados, abra o terminal e digite: npx json-server --watch db.json

async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

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

    // verifica se a conexao está ok
    if (!conexao.ok) {
        throw new Error("Não possível enviar o vídeo.");
    }

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {
    listaVideos, 
    criaVideo,
    buscaVideo
}