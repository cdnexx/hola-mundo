// function log<T, V>(a: T, b: V): V {
//     console.log(a, b)
//     return b
// }

// log<string, number>('hola', 6)
// log<string, string>('Yeaah', 'Chanchito')

// log(1,2)
// log('hola', 'mundo')

async function fetchData<T>(recurso: string): Promise<T> {
    const resspuesta = await fetch(`${recurso}`)
    return resspuesta.json()
}

type User = {
    id: string,
    name: string
}

async function main(){
    const user = await fetchData<User>('/usuarios')
    console.log(user.name);   
}

type Computador = {
    encender: () => void,
    apagar: () => void,
}

class Programador<T> {
    computador: T
    constructor(t: T) {
        this.computador = t
    }
}

const programador = new Programador<Computador>({ encender: () => {}, apagar: () => {} })

const programador1 = new Programador<string>('hola mundo')

// programador1.computador.

interface KeyValue<T, V> {
    key: T,
    value: V,
}

interface Product {
    id: string
}

function fetchProduct(): KeyValue<string, Product> {
    return {
        key: 'id producto',
        value: { id: 'id producto' }
    }
}

function fetchStock(): KeyValue<string, number> {
    return {
        key: 'id prdoucto',
        value: 500
    }
}

// Constraints

// interface Usuario {
//     id: string,
//     name: string,
// }

class Usuario {
    constructor(public id: string){}
}

function print<T extends Usuario>(t: T): T {
    console.log(t);
    return t    
}

print({id: 'user id', name: 'Pepe'})

class Estado<T> {
    protected data: T[] = []

    agregar(t: T): void {
        this.data.push(t)
    }

    getEstado(): T[] {
        return this.data
    }
}

type ObjectId = {
    id: string
}

class EstadoEliminar<T extends ObjectId> extends Estado<T> { // Pasar genérico con restricciones
    eliminar(id: string) {
        this.data = this.data.filter(x => x.id !== id)
    }
}

// const estadoEliminar = new EstadoEliminar<Usuario>()

// estadoEliminar.

class EstadoUsuarios extends Estado<Usuario> { // Pasar genérico fijo
    reiniciarContrasenas() {

    }
}


type Calendar = {
    id: number,
    fuente: string,
    dueno: string,
}

const calendar: Calendar = {
    id:1,
    fuente: 'Google',
    dueno: 'Yo'
}

function getProp<T>(objeto: T, propiedad: keyof T): unknown { // Keyof solo permitirá valors que existan en T
    return objeto[propiedad]
}

// Utility types

type Punto = {
    x: number,
    y: number,
    descripcion?: string,
}

type PuntoOpcional = Partial<Punto> // Toma todas las opciones de Punto como opcionales

type PuntoRequerido = Required<Punto> // Toma todas la propiedades de punto como obligatorias (incluso las que definimos como opcionales)

const keyVal: Record<string, number> = { // el primer tipo de < > es la key y el segundo el valor
    'soy un string': 42
}

type kv = { [key: string]: number } // Es lo mismo que lo anterior pero escrito de otra forma

const p: Omit<Punto, 'descripcion' | 'y' > = { // Primero se pone el tipo y luego las propiedades que queremos omitir
    x:1,
    // y:2
}

const p1: Pick<Punto, 'x' | 'y'> = { // Primero se pone el tipo y luego las propiedades que queremos seleccionar
    x:1,
    y:2
}

const  readOnlyP: Readonly<Punto> = { // No permite cambiar los valores de las propiedades
    x:1,
    y:3,
    descripcion: 'holahola'
}

// readOnlyP.x = 4