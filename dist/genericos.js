"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchData(recurso) {
    return __awaiter(this, void 0, void 0, function* () {
        const resspuesta = yield fetch(`${recurso}`);
        return resspuesta.json();
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield fetchData('/usuarios');
        console.log(user.name);
    });
}
class Programador {
    constructor(t) {
        this.computador = t;
    }
}
const programador = new Programador({ encender: () => { }, apagar: () => { } });
const programador1 = new Programador('hola mundo');
function fetchProduct() {
    return {
        key: 'id producto',
        value: { id: 'id producto' }
    };
}
function fetchStock() {
    return {
        key: 'id prdoucto',
        value: 500
    };
}
class Usuario {
    constructor(id) {
        this.id = id;
    }
}
function print(t) {
    console.log(t);
    return t;
}
print({ id: 'user id', name: 'Pepe' });
class Estado {
    constructor() {
        this.data = [];
    }
    agregar(t) {
        this.data.push(t);
    }
    getEstado() {
        return this.data;
    }
}
class EstadoEliminar extends Estado {
    eliminar(id) {
        this.data = this.data.filter(x => x.id !== id);
    }
}
class EstadoUsuarios extends Estado {
    reiniciarContrasenas() {
    }
}
const calendar = {
    id: 1,
    fuente: 'Google',
    dueno: 'Yo'
};
function getProp(objeto, propiedad) {
    return objeto[propiedad];
}
const keyVal = {
    'soy un string': 42
};
const p = {
    x: 1,
};
const p1 = {
    x: 1,
    y: 2
};
const readOnlyP = {
    x: 1,
    y: 3,
    descripcion: 'holahola'
};
//# sourceMappingURL=genericos.js.map