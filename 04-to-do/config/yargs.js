const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};
const completado = {
    dafault: true,
    alias: 'c',
    desc: 'Marca como completado la tarea'
        };
const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de la tarea', {
        descripcion,
        completado
    })
    .command('borrar','Borra una tarea',{
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}