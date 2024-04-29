import _ from "underscore"; 



/**Esta función crea un nuevo deck
 * 
 * @param {Array<String>} tiposDecarta  ejeplo: 'C','D','H','S'
 * @param {Array<String>} TiposEspeciales  ejemplo : 'A','J','Q','K'
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */


// Esta función crea un nuevo deck
export const crearDeck = (tiposDecarta, TiposEspeciales) => {
    if(!tiposDecarta || tiposDecarta.length === 0 ) 
    throw new Error ('TiposDecarta es obligatorio como un arreglo de string')

    if(!TiposEspeciales || TiposEspeciales.length === 0 ) 
    throw new Error ('TiposEspeciales es obligatorio como un arreglo de string')
   
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDecarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDecarta ) {
        for( let esp of TiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    
    return deck;
}

export default crearDeck;

