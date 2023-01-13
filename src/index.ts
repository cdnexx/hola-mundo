// let extincionDino = 76_000_000
// let dinoFav = 'Velociraptor'
// let extinto = true

// function primera(config:string){
//     return config
// }

// console.log(primera(dinoFav))

// let animales: string[] = ['perro', 'gato', 'hamster']
// let nums: number[] = [1,2,3]
// let nums2: Array<number> = []

// // animales.map(x => x.)

// let tupla: [number, string] = [1, 'Franco Osorio']

// enum Talla { Chica, Mediana, Grande, ExtraGrande }

// console.log(Talla.ExtraGrande)

// const enum LoadingState { Idle, Loading, Succes, Error }

// const estado = LoadingState.Succes

// type Direccion = {
//     ciudad: string,
//     calle: string,
//     numero: number
// }

// type Persona = {
//     readonly id: number,
//     nombre: string,
//     talla: Talla,
//     direccion: Direccion
// }

// const objeto: Persona = { 
//     id: 1, 
//     nombre: 'Hola objeto', 
//     talla: Talla.Mediana,
//     direccion: {
//         ciudad: 'Santiago',
//         calle: 'Ángel Pimentel',
//         numero: 960
//     }
// }

// const arr: Persona[] = []

// const fn: (a: number) => string = (edad: number) => {
//     if (edad > 17){
//         return 'Puedes ingresar'
//     } else {
//         return 'No puedes ingresar'
//     }
// }

// function validarEdad(edad: number, msg = 'master'): string{
//     if (edad > 17){
//         return `Puedes ingresar ${msg}`
//     } else {
//         return 'No puedes ingresar'
//     }
// }

// console.log(validarEdad(18, 'crack'))


// // Union types 
// let puntaje: number | string = 98 
// puntaje = 'Puntaje!'


// type Animal = {
//     id: number,
//     especie: string
// }

// type Usuario = {
//     id: number,
//     name: string
// }

// let animal: Usuario | Animal = { id: 1, especie:'', name: '' }

// function sumaDos(n: number | string): number {
//     if(typeof n === 'number'){
//         return n + 2
//     }
//     return parseInt(n) + 2
// }

// console.log(sumaDos(3))
// console.log(sumaDos('2'))

// // Intersection type

// type Audit = {
//     created_at: string,
//     modified_at: string
// }

// type Product = {
//     name: string
// }

// const product: Audit & Product = {
//     created_at: '',
//     modified_at: '',
//     name: ''
// }

// // Literal types

// const nDeFibo: 0 | 1 | 2 | 3 | 5 = 3

// type Fibo = 0 | 1 | 2 | 3 | 5 //Lo mismo que lo anterior pero más legible
// const nDeFibo2: Fibo = 3

// // Nullable types

// function toNumber(s: string | null | undefined) {
//     if (!s) {
//         return 0
//     }
//     return parseInt(s)
// }

// const n = toNumber(undefined)

// // Optional chaining

// function getUser(id: number){
//     if (id < 0) {
//         return null
//     }
//     return {
//         id: 1,
//         name: 'Felipe',
//         created_at: new Date()
//     }
// }

// const user = getUser(-1)
// console.log('Usuario:',user?.created_at) // El operador '?' permite acceder a propiedades de objetos que posiblemente pueden ser null o undefined

// const user2 = getUser(5)
// console.log('Usuario 2:', user2?.created_at)

// const arr1 = null
// console.log(arr1?.[0])

// const fn5:any = null
// fn5?.() // Llama a la función solamente si es que está definida

// // Nulling coalescing operator

// const difficulty: number | null = null

// const user3 = {
//     username: 'cdnex',
//     difficulty: difficulty ?? 1 // Si es que difficulty es nulo, asignará el valor de 1
// }

// console.log(user3)

// // Type assertion

// const elem: any = null
// const elem1 = elem as number // Fuerza al programa a tratar un elemento como un cierto tipo de dato

// // const input = document.getElementById('username') as HTMLInputElement
// //const input2 = <HTMLInputElement> document.getElementById('username') // Lo mismo que la linea anterior

// // Type unknown

// function procesa(algo: unknown) {
//     if (typeof algo === 'string'){
//         return algo.toUpperCase()
//     }

//     if (typeof algo === 'number') {
//         return algo.toString()
//     }

//     if (algo instanceof String) { // String es solo un ejemplo, puede ser cualquier objeto
//         return "Hola"
//     }
//     return "chao"
// }

// // POO

class Personaje {
    // readonly id: number // Readonly indica que la propiedad no se puede modificar (después de ser inicializada)
    // name: string
    // nivel: number
    // private _hp: number
    // profesion?: string // El simbolo ? hace que esta propiedad sea opcional

    // constructor(id: number, name: string, nivel: number, _hp: number) {
    //     this.id = id
    //     this.name = name
    //     this.nivel = nivel
    //     this._hp = _hp
    // }

    // Esta forma de construir la clase hace lo mismo que la anterior, pero es menos verbosa
    profesion?: string
    private static equipo: number = 1
    constructor(
        public readonly id: number, 
        public name: string, 
        public nivel: number, 
        private _hp: number) {
        this.id = id
        this.name = name
        this.nivel = nivel
        this._hp = _hp
    }
 
    subirNivel(): number {
        this.nivel += 1
        return this.nivel
    }

    cambiarHP(cantidad: number): number {
        this._hp += cantidad
        return this._hp
    }

    get hp(): number { // Getter en typescript
        return this._hp
    }

    // set hp(cantidad: number) { // Los setters no retornan nada
    //     this._hp = cantidad
    // }
    
    static agregarPersonaje(): void {
        Personaje.equipo++
    }

    static getEquipo(): number {
        return Personaje.equipo
    }

}

const personaje = new Personaje(1, 'Franco', 1, 100)
personaje.cambiarHP(20)

const personaje1 = new Personaje(2, 'María', 1, 120)
Personaje.agregarPersonaje()
console.log(Personaje.getEquipo())





