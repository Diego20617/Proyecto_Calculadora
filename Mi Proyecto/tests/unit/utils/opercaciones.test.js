import { calcularExpresion } from '../../../src/utils/operaciones.js';

describe('calcularExpresion', () => {
    test('suma básica', () => {
        expect(calcularExpresion('2+2')).toBe(4);
    });

    test('multiplicación', () => {
        expect(calcularExpresion('3*3')).toBe(9);
    });

    test('expresión inválida', () => {
        expect(calcularExpresion('2+')).toBe('ERROR');
    });

    test('división por cero', () => {
        expect(calcularExpresion('5/0')).toBe(Infinity);
    });

    test('resta y suma combinadas', () => {
        expect(calcularExpresion('10-2+3')).toBe(11);
    });
});
