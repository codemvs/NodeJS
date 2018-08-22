// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;

const porHacer = require('./to-do/to-do');

let comando = argv._[0];
console.log("comando");
switch (comando) {
    case 'crear':
        console.log('Hola crear por hacer');
        let tarea=porHacer.crear(argv.descripcion);
        console.log(tarea);
        
        break;
    case 'listar':
        console.log('Mostrar las tareas por hacer');
        break;
    case 'actualizar':
        console.log('Actualiza una tarea por hacer');
        break;
    default:
        console.log('Comando no reconocido');
        break;
}