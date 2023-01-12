"use strict";
class Caballo {
    constructor() {
        this.name = 'Rocinante';
    }
    caminar() {
        console.log('Caminando...');
    }
    onomatopeya() {
        return 'Hin';
    }
}
class Cerdo {
    constructor() {
        this.name = 'Chanchito feliz';
    }
    caminar() {
        console.log('Caminando...');
    }
    onomatopeya() {
        return 'Oink';
    }
}
class Perro {
    constructor() {
        this.name = 'Fido';
    }
    caminar() {
        console.log('Perro caminando...');
    }
    onomatopeya() {
        return 'Guau';
    }
}
class DiccionarioUsuarios {
}
let diccionarioUs = new DiccionarioUsuarios();
diccionarioUs['1a'] = 'Usuario 1';
diccionarioUs['a1'] = 'Usuario 2';
console.log(diccionarioUs);
//# sourceMappingURL=interfaces.js.map