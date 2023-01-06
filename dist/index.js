"use strict";
let extincionDino = 76000000;
let dinoFav = "Velociraptor";
let extinto = true;
function primera(config) {
    return config;
}
console.log(primera(dinoFav));
let animales = ["perro", "gato", "hamster"];
let nums = [1, 2, 3];
let nums2 = [];
let tupla = [1, "Franco Osorio"];
var Talla;
(function (Talla) {
    Talla[Talla["Chica"] = 0] = "Chica";
    Talla[Talla["Mediana"] = 1] = "Mediana";
    Talla[Talla["Grande"] = 2] = "Grande";
    Talla[Talla["ExtraGrande"] = 3] = "ExtraGrande";
})(Talla || (Talla = {}));
console.log(Talla.ExtraGrande);
const estado = 2;
const objeto = {
    id: 1,
    nombre: "Hola objeto",
    talla: Talla.Mediana,
    direccion: {
        ciudad: "Santiago",
        calle: "Ángel Pimentel",
        numero: 960
    }
};
const arr = [];
const fn = (edad) => {
    if (edad > 17) {
        return "Puedes ingresar";
    }
    else {
        return "No puedes ingresar";
    }
};
function validarEdad(edad, msg = "master") {
    if (edad > 17) {
        return `Puedes ingresar ${msg}`;
    }
    else {
        return "No puedes ingresar";
    }
}
console.log(validarEdad(18, "crack"));
let puntaje = 98;
puntaje = "Puntaje!";
let animal = { id: 1, especie: "", name: "" };
function sumaDos(n) {
    if (typeof n === "number") {
        return n + 2;
    }
    return parseInt(n) + 2;
}
console.log(sumaDos(3));
console.log(sumaDos("2"));
const product = {
    created_at: "",
    modified_at: "",
    name: ""
};
const nDeFibo = 3;
const nDeFibo2 = 3;
function toNumber(s) {
    if (!s) {
        return 0;
    }
    return parseInt(s);
}
const n = toNumber(undefined);
function getUser(id) {
    if (id < 0) {
        return null;
    }
    return {
        id: 1,
        name: "Felipe",
        created_at: new Date()
    };
}
const user = getUser(-1);
console.log("Usuario:", user === null || user === void 0 ? void 0 : user.created_at);
const user2 = getUser(5);
console.log("Usuario 2:", user2 === null || user2 === void 0 ? void 0 : user2.created_at);
const arr1 = null;
console.log(arr1 === null || arr1 === void 0 ? void 0 : arr1[0]);
const fn5 = null;
fn5 === null || fn5 === void 0 ? void 0 : fn5();
const difficulty = null;
const user3 = {
    username: "cdnex",
    difficulty: difficulty !== null && difficulty !== void 0 ? difficulty : 1
};
console.log(user3);
const elem = null;
const elem1 = elem;
//# sourceMappingURL=index.js.map