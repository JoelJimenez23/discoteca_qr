const LoginDiscoService = require('./service/login_disco');
const LoginPersonalService = require('./service/login_personal');


const util = require('./utils/util');

const healthPath = '/health';
const LoginDiscoPath = '/login-disco';
const LoginPersonalPath = '/login-personal';

exports.handler = async (event) => {
    console.log('Request Event', event);
    let response;
    switch(true){
        case event.httpMethod === 'GET' && event.path === healthPath:
            console.log(event);
            response = util.buildResponse(200,event.body);
            console.log(response);
            break;
        case event.httpMethod === 'POST' && event.path === LoginDiscoPath:
            const login_discoBody = JSON.parse(event.body);
            console.log(login_discoBody);
            response = LoginDiscoService.login_disco(login_discoBody);
            console.log(response);
            break;
        case event.httpMethod === 'POST' && event.path === LoginPersonalPath:
            const loginPersonalBody = JSON.parse(event.body);
            console.log(loginPersonalBody);
            response = LoginPersonalService.login_personal(loginPersonalBody);
            console.log(response);
            break;
        default:
            response = util.buildResponse(404,'404 NOT FOUND');
    }
    return response;
}