interface Animal {
    name: string

    caminar(): void
    onomatopeya(): string
}

class Caballo implements Animal {
    name: string = 'Rocinante'

    caminar() {
        console.log('Caminando...');        
    }
    onomatopeya(): string {
        return 'Hin'
    }
}

class Cerdo implements Animal {
    name: string = 'Chanchito feliz'

    caminar() {
        console.log('Caminando...');        
    }
    onomatopeya(): string {
        return 'Oink'
    }
}

class Perro implements Animal {
    name: string = 'Fido';
    caminar(): void {
        console.log('Perro caminando...');
        
    }
    onomatopeya(): string {
        return 'Guau'
    }  
}

class DiccionarioUsuarios {
    [id: string]: string
} 

let diccionarioUs = new DiccionarioUsuarios()

diccionarioUs['1a'] = 'Usuario 1'
diccionarioUs['a1'] = 'Usuario 2'

console.log(diccionarioUs);

