import fs from "fs"
import trataErro from './erros/funcoesErros.js'
import { contaPalavras } from "./index.js";
const link = "arquivos/texto-web.txt";

fs.readFile(link, 'utf-8', (erro, texto) => {
    try {
        if (erro) { throw erro } 
        contaPalavras(texto);
    } catch(erro) {
        trataErro(erro);
    }
})

export default {  }