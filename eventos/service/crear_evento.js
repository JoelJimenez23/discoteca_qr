
const { DynamoDBClient, PutItemCommand,} = require('@aws-sdk/client-dynamodb')

const client = new DynamoDBClient({
    region: 'us-east-1'
})

const util = require('../utils/util');
const auth = require('../utils/auth');
const { v4:uuidv4 } = require('uuid');

const eventTable = 't_discoteca_eventos';

async function crear_evento(requestBody) {

    if (!requestBody.eventoInfo || !requestBody.token || !requestBody.nombre_discoteca) {
        return util.buildResponse(401, {
            message: 'faltan datos'
        })
    }
    
    const nombre_discoteca_token =  requestBody.nombre_discoteca;
    const token = requestBody.token;
    const eventoInfo = requestBody.eventoInfo;

    const verification = auth.verifyToken(nombre_discoteca_token,token);
    if (!verification.verified) {
        return util.buildResponse(401, verification);
    }

    if (!eventoInfo.nombre_discoteca || !eventoInfo.nombre || !eventoInfo.fecha || !eventoInfo.aforo){
        return util.buildResponse(401, {
            message: 'Los datos deben estar completos'
        })
    }

    const nombre_discoteca = eventoInfo.nombre_discoteca;
    const id = uuidv4();
    const nombre = eventoInfo.nombre;
    const fecha = eventoInfo.fecha;
    const aforo = eventoInfo.aforo;
    const estadisticas = {};
    const dir = nombre_discoteca+'/'+nombre+'.png';
    const estado = eventoInfo.estado;

    const evento = {
        nombre_discoteca:nombre_discoteca,
        id:id,
        nombre:nombre,
        fecha:fecha,
        aforo:aforo,
        estadisticas:estadisticas,
        dir:dir,
        estado:estado
    }
    const eventoSaveResponse = await saveEvento(evento);
    if(eventoSaveResponse.httpStatusCode !== 200){
        return util.buildResponse(503, { message: 'Error del servidor. Porfavor intente luego.'})
    }
    return util.buildResponse(200,{evento : evento});
}

async function saveEvento(evento) {
    const input = {
        Item: {
            "nombre_discoteca": {
                "S": evento.nombre_discoteca
            },
            "id": {
                "S": evento.id
            },
            "nombre": {
                "S": evento.nombre
            },
            "fecha": {
                "S": evento.fecha
            },
            "aforo": {
                "S": evento.aforo
            },
            "estadisticas": {
                "S": JSON.stringify(evento.estadisticas)
            },
            "dir": {
                "S": evento.dir
            },
            "estado": {
                "S": evento.estado
            }
        },
        TableName: eventTable
    }
    const command = new PutItemCommand(input);
    const response = await client.send(command)
    return response.$metadata;

}

module.exports.crear_evento = crear_evento;