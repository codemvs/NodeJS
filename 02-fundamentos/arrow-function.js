let sumar = (a,b)=>a+b;

let saludar = nombre=>`Hola ${nombre}`;

console.log(`Suma: ${sumar(21,3)}`);
console.log(saludar('Salvador'));

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre(){
        return `${this.nombre} ${this.apellido} - ${this.poder}`
    }
}

console.log(deadpool.getNombre());

