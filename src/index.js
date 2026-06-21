import fs from "fs"

const link = "arquivos/texto-web.txt";

fs.readFile(link, 'utf-8', (erro, texto) => {quebraParagrafos(texto)})

function quebraParagrafos(texto){
    const paragrafos = texto.toLowerCase().split('\n');
    const contagem = paragrafos.map((paragrafo) => {return verificaPalavrasDuplicadas(paragrafo)});

    console.log(contagem);
}

function verificaPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(' ');
    const resultado = {};

    listaPalavras.forEach(palavra => {
        resultado[palavra] = (resultado[palavra] || 0) + 1
    });

    return resultado;
};