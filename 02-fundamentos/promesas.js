let empleados = [{
    id: 1,
    nombre: 'Salvador'
},{
    id: 2,
    nombre: 'Elisa'
}, {
    id: 3,
    nombre: 'Juan'
}];

let salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];

/**
 * Obtener empleado
 * @param {*} id 
 * @param {*} callback 
 */
let getEmpleado = id => {
    return new Promise((resolve, reject)=>{
        let empleadBD = empleados.find(empleado => empleado.id === id);
        if (!empleadBD) {
            reject(`No existe un empleado con el id: ${id}`);
        } else {
            resolve(empleadBD);
        }
    });    
}

let getSalario=empleado=>{
    return new Promise((resolve, reject)=>{
        let salarioBD = salarios.find(salario=>empleado.id===salario.id);
        if(!salarioBD){
            reject(`No existe un salario para el empleado: ${empleado.nombre}`);
        }else{
            resolve({
                nombre:empleado.nombre,
                salario:salarioBD.salario,
                id:empleado.id
            });
        }
    });
}


getEmpleado(3).then(empleado=>{
    //console.log('Empleado BD', empleado);    
    getSalario(empleado).then(resp=>{
        console.log(`El salario de ${resp.nombre} es de $${resp.salario}`);        
    },err=>console.log(err));
},err=>console.log(err));

