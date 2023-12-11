const AWS = require('aws-sdk');
AWS.config.update({
    region: 'us-east-1'
})
const util = require('../utils/util');
const bcrypt = require('bcryptjs');
const auth = require('../utils/auth');

const dynamodb = new AWS.DynamoDB.DocumentClient();

async function login_personal(user) {

    let table = '';

    const rango = user.rango;
    const nombre_discoteca = user.nombre_discoteca;
    const correo = user.correo;
    const dni = user.dni;
    
    if (!user || !rango || !nombre_discoteca || !correo || !dni) {
        return util.buildResponse(401, {
            message : 'Todos los parametros son necesarios'
        })
    }


    if (rango == 'coordinador'){
        table = 't_discoteca_coordinadores'
    }
    else if(rango == 'cabeza'){
        table = 't_discoteca_cabezas'
    }
    else if(rango == 'promotor'){
        table = 't_discoteca_promotores'
    }
    else if(rango == 'staff'){
        table = 't_discoteca_staff'
    }

    const dynamoUser = await getPersonal(table,nombre_discoteca,dni);
    console.log(dynamoUser);
    if (!dynamoUser || !dynamoUser.nombre_discoteca || !dynamoUser.dni) {
        return util.buildResponse(403, { message : 'discoteca no existe.'});
    }
    
    const user_info = {
        nombre_discoteca: dynamoUser.nombre_discoteca,
        correo: dynamoUser.correo,
        dni : dynamoUser.dni
    }
    const token = auth.generateToken(user_info);
    const response = {
        user: user_info,
        token: token
    }
    console.log(user_info);
    console.log(token);
    return util.buildResponse(200,response)
}

async function getPersonal(table,nombre_discoteca,dni) {
    const params = {
        TableName: table,
        Key: {
            nombre_discoteca: nombre_discoteca,
            dni: dni
        }
    }
    return await dynamodb.get(params).promise().then(response => {
        console.log(response);
        return response.Item;
    }, error => {
        console.log('There is an error: ', error);
    })
}

module.exports.login_personal = login_personal;