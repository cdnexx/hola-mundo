/*
* Producto
* name  
* descripción
* created_at
* created_by
* stock
* sku
*
* Categoría
* name     
* descripción
* created_at
* created_by
*/

abstract class DatosBasicos { // Abstract es para que no se pueda instanciar una clase
    constructor(
        public name: string,
        public description: string,
        protected created_at: Date,
        protected created_by: number,
    ) {}

    get FullYear() {
        return this.created_at.getFullYear()
    }

    get fullDescription() {
        return this.name + ' - ' + this.description
    }

    abstract guardar(): void
}

class Producto extends DatosBasicos {
    constructor(
        public stock: number,
        public sku: number,
        name: string,
        description: string,
        created_at: Date,
        created_by: number,
    ) {
        super(name, description, created_at, created_by)
    }

    override get fullDescription(): string {
        return 'Producto: ' + super.fullDescription
    }

    guardar(): void {
        console.log('Producto guardado');
        
    }
}

class Categoría extends DatosBasicos {
    public productos: Producto[] = []
    constructor(
        name: string,
        description: string,
        created_at: Date,
        created_by: number,
    ) {
        super(name, description, created_at, created_by)
    }

    agregarProducto(producto: Producto) {
        this.productos.push(producto)
    }

    override get fullDescription(): string {
        return 'Categoria: ' + super.fullDescription
    }

    guardar(): void {
        console.log('Categoría guardada');
        
    }
}

let producto1 = new Producto(
    100, 
    123, 
    'IPhone', 
    'Este es un smartphone', 
    new Date(), 
    1
)

let categoria = new Categoría('Celulares', '', new Date(), 1)

categoria.agregarProducto(producto1)

console.log(producto1.fullDescription)
console.log(categoria.fullDescription)
