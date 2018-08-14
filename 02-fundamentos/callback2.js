let empleados=[{
    id:1,
    nombre:'Salvador'
},
{
    id:2,
    nombre:'Elisa'
},{
    id:3,
    nombre:'Juan'
}];

let salarios=[
    {
        id:1,
        salario:1000
    },
    {
        id:2,
        salario:2000
    }
];

/**
 * Obtener empleado
 * @param {*} id 
 * @param {*} callback 
 */
let getEmpleado = (id, callback)=>{    
    let empleadBD=empleados.find(empleado=>empleado.id===id);    
    if(!empleadBD){
        callback(`No existe un empleado con el id: ${id}`);
    }else{
        callback(null,empleadBD);
    }
}

let getSalario=(empleado, callback)=>{
    let salarioBD = salarios.find(salario=>salario.id==empleado.id);
    if(!salarioBD){
        callback(`No se encontro un salario para el usuario ${empleado.nombre}`);
    }else{
        callback(null,{
            nombre:empleado.nombre,
            salario:salarioBD.salario,
            id:empleado.id
        });
    }
}


//pruebas
getEmpleado(3,(err, empleado)=>{
    if(err){
        return console.log(err);        
    }
    getSalario(empleado,(err, resp)=>{
        if(err){
            return console.log(err);            
        };
        console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
        
    });
});


