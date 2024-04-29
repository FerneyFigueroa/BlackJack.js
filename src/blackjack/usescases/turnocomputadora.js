import Swal from 'sweetalert2';

import { crearCartaHTML, pedirCarta  , valorCarta } from "./";
/**
 * 
 * @param {number} puntosMinimos  puntos que necesita la computadora para ganar
 * @param {HTMLelement} puntosHTML elementos HTML para mostrar los puntos
 * @param {HTMLelement} divCartasComputadora elementos HTML para mostrar los puntos
 * @param {Array<string>} deck 
 */
// turno de la computadora
export const turnoComputadora = ( puntosMinimos , puntosHTML, divCartasComputadora, deck) => {
    if (!puntosMinimos ) throw Error ('puntos minimos son necesarios')
    if(!deck )  throw Error ('el deck es necesario')
    if(!puntosHTML) throw Error ('puntos html son  necesario')
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        const imgCarta = crearCartaHTML(carta);
        
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );


    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            Swal.fire({
                text: '¡Nadie Gana! ❌',
                timer: 2000, // tiempo en milisegundos
                timerProgressBar: true,
                showConfirmButton: false
              });
        } else if ( puntosMinimos > 21 ) {
            Swal.fire({
        text: '¡Computadora Gana! ✅',
        timer: 2500, // tiempo en milisegundos
        timerProgressBar: true,
        showConfirmButton: false
        });;
        } else if( puntosComputadora > 21 ) {
            Swal.fire({
                text: '¡Jugador Gana! ✅',
                timer: 2500, // tiempo en milisegundos
                timerProgressBar: true,
                showConfirmButton: false
              });
        } else {
            Swal.fire({
        text: '¡Computadora Gana! ✅',
        timer: 2500, // tiempo en milisegundos
        timerProgressBar: true,
        showConfirmButton: false
        });;
        }
    }, 100 );
}
