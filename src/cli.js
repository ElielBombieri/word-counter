import fs from "fs"
import trataErro from './erros/funcoesErros.js'
import { contaPalavras } from "./index.js";
const link = "arquivos/texto-web.txt";

fs.readFile(link, 'utf-8', (erro, texto) => {
    try {
        if (erro) { throw erro } 
        const resultado = contaPalavras(texto);
        criaESalvaArquivo(resultado, './arquivos')
    } catch(erro) {
        trataErro(erro);
    }
})

async function criaESalvaArquivo(listaPalavras, caminho) {
    const arquivoNovo = caminho + '/resultado.txt';
    const textoPalavras = JSON.stringify(listaPalavras);

    try {
        await fs.promises.writeFile(arquivoNovo, textoPalavras);
        console.log('arquivo criado');
    } catch (erro) {
        throw erro;
    }
}