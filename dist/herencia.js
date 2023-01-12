"use strict";
class DatosBasicos {
    constructor(name, description, created_at, created_by) {
        this.name = name;
        this.description = description;
        this.created_at = created_at;
        this.created_by = created_by;
    }
    get FullYear() {
        return this.created_at.getFullYear();
    }
    get fullDescription() {
        return this.name + ' - ' + this.description;
    }
}
class Producto extends DatosBasicos {
    constructor(stock, sku, name, description, created_at, created_by) {
        super(name, description, created_at, created_by);
        this.stock = stock;
        this.sku = sku;
    }
    get fullDescription() {
        return 'Producto: ' + super.fullDescription;
    }
    guardar() {
        console.log('Producto guardado');
    }
}
class Categoría extends DatosBasicos {
    constructor(name, description, created_at, created_by) {
        super(name, description, created_at, created_by);
        this.productos = [];
    }
    agregarProducto(producto) {
        this.productos.push(producto);
    }
    get fullDescription() {
        return 'Categoria: ' + super.fullDescription;
    }
    guardar() {
        console.log('Categoría guardada');
    }
}
let producto1 = new Producto(100, 123, 'IPhone', 'Este es un smartphone', new Date(), 1);
let categoria = new Categoría('Celulares', '', new Date(), 1);
categoria.agregarProducto(producto1);
console.log(producto1.fullDescription);
console.log(categoria.fullDescription);
//# sourceMappingURL=herencia.js.map