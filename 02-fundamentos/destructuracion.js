let deadpool ={
    nombre:'Wade',
    apellido:'Winston',
    poder:'Regeneracion',
    getNombre:function(){
        return `${this.nombre} ${this.apellido} - ${this.poder}`
    }
}

// let nombre = deadpool.nombre;
// let apellido=deadpool.apellido;
// let poder = deadpool.poder;

//destructurin
let { nombre:primerNombre, apellido, poder } = deadpool;

console.log(`Destructurin Nombre =>: ${primerNombre} Apellido => ${apellido} Poder => ${poder}`);



