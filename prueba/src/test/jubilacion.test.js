const calificaJubilacion = require('../src/jubilacion');

test('Edad y aportes válidos', () => {
    expect(calificaJubilacion(65, 240)).toBe(true);
});

test('Edad válida pero aportes inválidos', () => {
    expect(calificaJubilacion(65, 239)).toBe(false);
});

test('Edad inválida pero aportes válidos', () => {
    expect(calificaJubilacion(64, 240)).toBe(false);
});

test('Edad y aportes inválidos', () => {
    expect(calificaJubilacion(64, 239)).toBe(false);
});
