const CrearEventoService = require('./service/crear_evento');
const ListarEventosService = require('./service/listar_eventos');
const ModQrService = require('./service/modificar_qrs');

const util = require('./utils/util');

const healthPath = '/health';
const crearEventoPath = '/crear-evento';
const listarEventosPath = '/listar-eventos';
const modQrPath = '/mod-cantqr';

exports.handler = async (event) => {
    console.log('Request Event: ', event);
    let response;
    switch (true) {
        case event.httpMethod === 'GET' && event.path === healthPath:
            response = util.buildResponse(200,event.body);
            console.log(response);
        case event.httpMethod === 'POST' && event.path === crearEventoPath:
            const crearEventoBody = JSON.parse(event.body);
            console.log(crearEventoBody);
            response = CrearEventoService.crear_evento(crearEventoBody);
            console.log(response);
            break;
        case event.httpMethod === 'GET' && event.path === listarEventosPath:
            const listarEventosBody = JSON.parse(event.body);
            console.log(listarEventosBody);
            response = ListarEventosService.listar_eventos(listarEventosBody);
            console.log(response);
            break;
        case event.httpMethod === 'PATCH' && event.path === modQrPath:
            const modQrBody = JSON.parse(event.body);
            console.log(modQrBody);
            response = ModQrService.modificar_qrs(modQrBody);
            console.log(response);
            break;
        default:
            response = util.buildResponse(404,'404 NOT FOUND');
            break;
    }
    return response;
}