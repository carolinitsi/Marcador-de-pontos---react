import {
    Cabecalho,
    TextoModoClaro,
    BoxModoClaro,
    TextoModoEscuro,
    BoxModoEscuro,
    fundoEscuro,
    CabecalhoModoEscuro,
} from './variaveis';

export const temaClaro = {
    cabecalho: Cabecalho,
    body: "",
    box: BoxModoClaro,
    text: TextoModoClaro,
    filter: "",
}
export const temaEscuro = {
    cabecalho: CabecalhoModoEscuro,
    body: fundoEscuro,
    box:  BoxModoEscuro,
    text: TextoModoEscuro,
    filter: "",
}