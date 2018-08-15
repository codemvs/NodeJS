let empleados = [{id: 1,nombre: 'Salvador'},
                 {id: 2,nombre: 'Elisa'},
                 {id: 3,nombre: 'Juan'}];

let salarios = [{id: 1,salario: 1000},
                {id: 2,salario: 2000}];


/**
 * Obtener empleado
 * @param {*} id 
 * @param {*} callback 
 */
let getEmpleado = async id => {    
        let empleadBD = empleados.find(empleado => empleado.id === id);
        if (!empleadBD) {
            throw new Error(`No existe un empleado con el id: ${id}`);
        } else {
            return empleadBD;
        }    
}
/**
 * Obtener Salario
 * @param {*} empleado 
 */
let getSalario = async empleado => {    
        let salarioBD = salarios.find(salario => empleado.id === salario.id);
        if (!salarioBD) {
            throw new Error(`No existe un salario para el empleado: ${empleado.nombre}`);
        } else {
            return{
                nombre: empleado.nombre,
                salario: salarioBD.salario,
                id: empleado.id
            };
        }    
}


let getInformacion = async(id)=>{
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);
    return `${resp.nombre} tiene un salario de $${resp.salario}`;
}
getInformacion(3)
    .then(mensaje=>console.log(mensaje))
    .catch(err=>console.log(err));