import {
    Cabecalho,
    TextoModoClaro,
    BoxModoClaro,
    shadow,
    TextoModoEscuro,
    BoxModoEscuro,
    fundoEscuro,
    CabecalhoModoEscuro,
    shadowModoEscuro,
} from './variaveis';

export const temaClaro = {
    cabecalho: Cabecalho,
    body: "",
    box: BoxModoClaro,
    text: TextoModoClaro,
    filter: "",
    shadow:shadow,
}
export const temaEscuro = {
    cabecalho: CabecalhoModoEscuro,
    body: fundoEscuro,
    box:  BoxModoEscuro,
    text: TextoModoEscuro,
    filter: "",
    shadow:shadowModoEscuro,

}