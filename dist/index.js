"use strict";
class Personaje {
    constructor(id, name, nivel, _hp) {
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this._hp = _hp;
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this._hp = _hp;
    }
    subirNivel() {
        this.nivel += 1;
        return this.nivel;
    }
    cambiarHP(cantidad) {
        this._hp += cantidad;
        return this._hp;
    }
    get hp() {
        return this._hp;
    }
    static agregarPersonaje() {
        Personaje.equipo++;
    }
    static getEquipo() {
        return Personaje.equipo;
    }
}
Personaje.equipo = 1;
const personaje = new Personaje(1, 'Franco', 1, 100);
personaje.cambiarHP(20);
const personaje1 = new Personaje(2, 'María', 1, 120);
Personaje.agregarPersonaje();
console.log(Personaje.getEquipo());
//# sourceMappingURL=index.js.map