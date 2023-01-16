// import Group, { defaultGroups } from './Group'
import * as G from './Group'
import { Point, PUNTITIO } from './Point'
import { Animales, Perros, Gatos } from './Animales'

console.log(Animales, Perros, Gatos);


const point = new Point(1, 2)
// const group = new Group(3, 'Hola')
const group = new G.default(3, 'Hola')

console.log(PUNTITIO);
console.log(G.defaultGroups.users);

