let extincionDino = 76_000_000
let dinoFav = "Velociraptor"
let extinto = true

function primera(config:string){
    return config
}

console.log(primera(dinoFav))

let animales: string[] = ["perro", "gato", "hamster"]
let nums: number[] = [1,2,3]
let nums2: Array<number> = []

// animales.map(x => x.)

let tupla: [number, string] = [1, "Franco Osorio"]

enum Talla { Chica, Mediana, Grande, ExtraGrande }

console.log(Talla.ExtraGrande)

const enum LoadingState { Idle, Loading, Succes, Error }

const estado = LoadingState.Succes

type Direccion = {
    ciudad: string,
    calle: string,
    numero: number
}

type Persona = {
    readonly id: number,
    nombre: string,
    talla: Talla,
    direccion: Direccion
}

const objeto: Persona = { 
    id: 1, 
    nombre: "Hola objeto", 
    talla: Talla.Mediana,
    direccion: {
        ciudad: "Santiago",
        calle: "Ángel Pimentel",
        numero: 0960
    }
}

const arr: Persona[] = []

