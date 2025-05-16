// const pantalla = document.querySelector('.pantalla');
// const botones = document.querySelectorAll('.btn');

// botones.forEach(boton => {
//     boton.addEventListener("click", () => {

//     // Constante que almacena el valor del boton apretado
//         const botonApretado = boton.textContent;

//     // Condicional para colocar la pantalla en cero
//         if(boton.id === 'c') {
//             pantalla.textContent = '0';
//             return
//         }

//     // condicional para eliminar los elementos de la pantalla 
//         if(boton.id === 'borrar') {
//             if (pantalla.textContent.length === 1|| pantalla.textContent === 'ERROR') {
//                 pantalla.textContent = '0';
//             } else{
//                 pantalla.textContent = pantalla.textContent.slice(0, -1);
//             }
//             return;
//         }

//     // condicional para retornar el valor de la operacion y añadir el valor al ultimo
//         if(boton.id === 'igual') {
//             try{
//                 pantalla.textContent = eval(pantalla.textContent);
//             } catch{
//                 pantalla.textContent = 'ERROR';
//             }
//             return;
//         }

//         if(pantalla.textContent === '0' || pantalla.textContent === 'ERROR') {
//             pantalla.textContent = botonApretado;
//         } else{
//             pantalla.textContent += botonApretado;
//         }
//     })
// })

// // La funcion eval realiza una evaluacion de la cadena de texto ingresada y si esta contiene un operdor matematico esta realiza la operacion y devuelve el resultado en este caso de la operacion realizada por el usuario.

import { calcularExpresion } from './utils/operaciones.js';

const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('.btn');

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if (boton.id === 'c') {
            pantalla.textContent = '0';
            return;
        }

        if (boton.id === 'borrar') {
            if (pantalla.textContent.length === 1 || pantalla.textContent === 'ERROR') {
                pantalla.textContent = '0';
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === 'igual') {
            pantalla.textContent = calcularExpresion(pantalla.textContent);
            return;
        }

        if (pantalla.textContent === '0' || pantalla.textContent === 'ERROR') {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    });
});
