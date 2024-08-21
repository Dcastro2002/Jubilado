function calificaJubilacion(edad, aportes) {
    return edad >= 65 && aportes >= 240;
}

module.exports = calificaJubilacion;