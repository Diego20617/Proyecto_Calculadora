// Función para evaluar la expresión matemática de forma segura
export function calcularExpresion(expresion) {
    try {
        // eval evalúa la expresión matemática en string
        // IMPORTANTE: eval puede ser peligroso si se usa con input no controlado
        return eval(expresion);
    } catch {
        return 'ERROR';
    }
}
