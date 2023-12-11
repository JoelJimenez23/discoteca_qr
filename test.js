// const axios = require("axios");

// const url = 'https://9e0liqazgl.execute-api.us-east-1.amazonaws.com/dev/login-disco';
// // const apiKey = 'xqzfpqCmsB94MI7JLQATTaHg7ArdI0mM2KaHSWOl';
// // const url = 'https://7fopajvnr5.execute-api.us-east-1.amazonaws.com/dev/health';

// const userInfo = {
//   nombre_discoteca: "disco",
//   correo : "joel@joel.com",
//   password : "1234",
// };

// // const userInfo = {
// //   nombre_discoteca: "disco",
// //   correo : "joel@joel.com",
// //   password : "1234",
// // };

// const json_data = {
//  httpMethod:"POST",
//  path:"/login-disco",
//  body: JSON.stringify(userInfo)
// }

// const headers = {
//  'Content-Type':'application/json'
// }


// const test = () => {
//  axios({
// 	method: 'POST',
// 	url: url,
// 	data: json_data,
// 	headers: headers
//  }).then(response =>{
// 	console.log(response);
//  }).catch(error => {
// 	console.error("ERROR: ",error);
//  })
// }

// test();




// const axios = require("axios");
// url = 'https://7fopajvnr5.execute-api.us-east-1.amazonaws.com/dev/register-coordinador'
// const coordinador = {
//   nombre_discoteca: 'disco',
//   dni: '73641477',
//   correo: 'joeljc2004@gmail.com',
//   telefono : '926782404'
// }

// const body = {
//   coordinador: coordinador,
//   nombre_discoteca : 'disco',
//   token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmVfZGlzY290ZWNhIjoiZGlzY28iLCJjb3JyZW8iOiJqb2VsQGpvZWwuY29tIiwiaWF0IjoxNzAxOTU1OTk0LCJleHAiOjE3MDE5NTk1OTR9.RPYUJty2s8_b69swWU0Y22DOc_33LjgDoOePqkqz9ic"
// }

// const json_data = {
//   httpMethod: "POST",
//   path:'/register-coordinador',
//   body: JSON.stringify(body)
// }

// const headers = {
//   'Content-Type':'application/json'
// }

// const test = () => {
//   axios({
//     method:'POST',
//     url:url,
//     data:json_data,
//     headers:headers
//   }).then(response => {
//     console.log(response);
//   }).catch(error => {
//     console.error('ERROR: ', error);
//   })
// }

// test();



// const axios = require("axios");
// url = 'https://7fopajvnr5.execute-api.us-east-1.amazonaws.com/dev/register-cabeza'
// const cabeza = {
//   nombre_discoteca: 'disco',
//   dni: '73641477',
//   correo: 'joeljc2004@gmail.com',
//   telefono : '926782404'
// }

// const body = {
//   cabeza: cabeza,
//   nombre_discoteca : 'disco',
//   token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmVfZGlzY290ZWNhIjoiZGlzY28iLCJjb3JyZW8iOiJqb2VsQGpvZWwuY29tIiwiaWF0IjoxNzAxOTU1OTk0LCJleHAiOjE3MDE5NTk1OTR9.RPYUJty2s8_b69swWU0Y22DOc_33LjgDoOePqkqz9ic"
// }

// const json_data = {
//   httpMethod: "POST",
//   path:'/register-cabeza',
//   body: JSON.stringify(body)
// }

// const headers = {
//   'Content-Type':'application/json'
// }

// const test = () => {
//   axios({
//     method:'POST',
//     url:url,
//     data:json_data,
//     headers:headers
//   }).then(response => {
//     console.log(response);
//   }).catch(error => {
//     console.error('ERROR: ', error);
//   })
// }

// test();



// const axios = require("axios");
// url = 'https://7fopajvnr5.execute-api.us-east-1.amazonaws.com/dev/register-promotor'
// const promotor = {
//   nombre_discoteca: 'disco',
//   dni: '73641477',
//   correo: 'joeljc2004@gmail.com',
//   telefono : '926782404'
// }

// const body = {
//   promotor: promotor,
//   nombre_discoteca : 'disco',
//   token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmVfZGlzY290ZWNhIjoiZGlzY28iLCJjb3JyZW8iOiJqb2VsQGpvZWwuY29tIiwiaWF0IjoxNzAxOTYwMTk1LCJleHAiOjE3MDE5NjM3OTV9.jfx_d3SJoLx5YsqDDYkw6cc_HGQwQwr2wXJpm8FrRMo"
// }

// const json_data = {
//   httpMethod: "POST",
//   path:'/register-promotor',
//   body: JSON.stringify(body)
// }

// const headers = {
//   'Content-Type':'application/json'
// }

// const test = () => {
//   axios({
//     method:'POST',
//     url:url,
//     data:json_data,
//     headers:headers
//   }).then(response => {
//     console.log(response);
//   }).catch(error => {
//     console.error('ERROR: ', error);
//   })
// }

// test();






// const axios = require("axios");
// url = 'https://7fopajvnr5.execute-api.us-east-1.amazonaws.com/dev/register-staff'
// const staff = {
//   nombre_discoteca: 'disco',
//   dni: '40423263',
//   correo: 'carmen@gmail.com',
//   telefono : '991318566'
// }

// const body = {
//   staff: staff,
//   nombre_discoteca : 'disco',
//   token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmVfZGlzY290ZWNhIjoiZGlzY28iLCJjb3JyZW8iOiJqb2VsQGpvZWwuY29tIiwiaWF0IjoxNzAxOTY3OTYyLCJleHAiOjE3MDE5NzE1NjJ9.GXXnfcRpp7c770j77gn1NMtmlwJhmxNkSyAHJNKbKI0"
// }

// const json_data = {
//   httpMethod: "POST",
//   path:'/register-staff',
//   body: JSON.stringify(body)
// }

// const headers = {
//   'Content-Type':'application/json'
// }

// const test = () => {
//   axios({
//     method:'POST',
//     url:url,
//     data:json_data,
//     headers:headers
//   }).then(response => {
//     console.log(response);
//   }).catch(error => {
//     console.error('ERROR: ', error);
//   })
// }

// test();



// const axios = require("axios");

// const url = 'https://9e0liqazgl.execute-api.us-east-1.amazonaws.com/dev/health';

// const userInfo = {
//   nombre_discoteca: "disco",
//   correo : "joel@joel.com",
//   password : "1234",
// };


// const json_data = {
//  httpMethod:"GET",
//  path:"/health",
//  body: JSON.stringify(userInfo)
// }

// const headers = {
//  'Content-Type':'application/json'
// }


// const test = () => {
//  axios({
// 	method: 'GET',
// 	url: url,
// 	data: json_data,
// 	headers: headers
//  }).then(response =>{
// 	console.log(response);
//  }).catch(error => {
// 	console.error("ERROR: ",error);
//  })
// }

// test();





// const axios = require("axios");


// const url = 'https://9e0liqazgl.execute-api.us-east-1.amazonaws.com/dev/login-personal';
// // const url = 'https://9e0liqazgl.execute-api.us-east-1.amazonaws.com/dev/health';

// const userInfo = {
//   rango: 'coordinador',
//   nombre_discoteca: "disco",
//   correo : "joeljc2004@gmail.com",
//   dni : "73641477",
// };

// const json_data = {
//  httpMethod:"POST",
//  path:"/login-personal",
//  body: JSON.stringify(userInfo)
// }

// const headers = {
//  'Content-Type':'application/json'
// }


// const test = () => {
//  axios({
// 	method: 'POST',
// 	url: url,
// 	data: json_data,
// 	headers: headers
//  }).then(response =>{
// 	console.log(response);
//  }).catch(error => {
// 	console.error("ERROR: ",error);
//  })
// }

// test();




// const axios = require("axios");


// const url = 'https://qkznebe5df.execute-api.us-east-1.amazonaws.com/dev/crear-evento';
// // const url = 'https://9e0liqazgl.execute-api.us-east-1.amazonaws.com/dev/health';

// const eventoInfo = {
//   nombre_discoteca: "disco",
//   nombre : "MAKANAKY",
//   fecha : "2023-12-16",
//   aforo: "1000",
//   estado: "finalizado"
// };

// const body = {
//   eventoInfo:eventoInfo,
//   nombre_discoteca: 'disco',
//   token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmVfZGlzY290ZWNhIjoiZGlzY28iLCJjb3JyZW8iOiJqb2VsQGpvZWwuY29tIiwiaWF0IjoxNzAyMjU1NzI4LCJleHAiOjE3MDIyNTkzMjh9.VqS-uW6fDst9NGNmEhRSvI6SNNO_dSpInxLa5rvSHNI'
// }

// const json_data = {
//  httpMethod:"POST",
//  path:"/crear-evento",
//  body: JSON.stringify(body)
// }

// const headers = {
//  'Content-Type':'application/json'
// }


// const test = () => {
//  axios({
// 	method: 'POST',
// 	url: url,
// 	data: json_data,
// 	headers: headers
//  }).then(response =>{
// 	console.log(response);
//  }).catch(error => {
// 	console.error("ERROR: ",error);
//  })
// }

// test();


// const axios = require("axios");


// const url = 'https://qkznebe5df.execute-api.us-east-1.amazonaws.com/dev/crear-evento';
// // const url = 'https://9e0liqazgl.execute-api.us-east-1.amazonaws.com/dev/health';

// const eventoInfo = {
//   nombre_discoteca: "disco",
//   nombre : "MAKANAKY",
//   fecha : "2023-12-15",
//   aforo: "1000",
//   estado: "pendiente"
// };

// const body = {
//   eventoInfo:eventoInfo,
//   nombre_discoteca: 'disco',
//   token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmVfZGlzY290ZWNhIjoiZGlzY28iLCJjb3JyZW8iOiJqb2VsQGpvZWwuY29tIiwiaWF0IjoxNzAyMDkzNDQxLCJleHAiOjE3MDIwOTcwNDF9.hn9RZkxeYqSYiNAPCevX7ESfsILSHHtN5QrrYz8cLwY'
// }

// const json_data = {
//  httpMethod:"POST",
//  path:"/crear-evento",
//  body: JSON.stringify(body)
// }

// const headers = {
//  'Content-Type':'application/json'
// }


// const test = () => {
//  axios({
// 	method: 'POST',
// 	url: url,
// 	data: json_data,
// 	headers: headers
//  }).then(response =>{
// 	console.log(response);
//  }).catch(error => {
// 	console.error("ERROR: ",error);
//  })
// }

// test();





// const axios = require("axios");


// const url = 'https://qkznebe5df.execute-api.us-east-1.amazonaws.com/dev/listar-eventos';
// // const url = 'https://9e0liqazgl.execute-api.us-east-1.amazonaws.com/dev/health';

// // const eventoInfo = {
// //   nombre_discoteca: "disco",
// //   nombre : "MAKANAKY",
// //   fecha : "2023-12-15",
// //   aforo: "1000",
// //   estado: "pendiente"
// // };

// const body = {
//   estado:'pendiente',
//   nombre_discoteca: 'disco',
//   token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmVfZGlzY290ZWNhIjoiZGlzY28iLCJjb3JyZW8iOiJqb2VsQGpvZWwuY29tIiwiaWF0IjoxNzAyMjU1NzI4LCJleHAiOjE3MDIyNTkzMjh9.VqS-uW6fDst9NGNmEhRSvI6SNNO_dSpInxLa5rvSHNI'
// }

// const json_data = {
//  httpMethod:"GET",
//  path:"/listar-eventos",
//  body: JSON.stringify(body)
// }

// const headers = {
//  'Content-Type':'application/json'
// }


// const test = () => {
//  axios({
// 	method: 'GET',
// 	url: url,
// 	data: json_data,
// 	headers: headers
//  }).then(response =>{
// 	console.log(response);
//  }).catch(error => {
// 	console.error("ERROR: ",error);
//  })
// }

// test();




// const axios = require("axios");


// const url = 'https://qkznebe5df.execute-api.us-east-1.amazonaws.com/dev/mod-cantqr';
// // const url = 'https://9e0liqazgl.execute-api.us-east-1.amazonaws.com/dev/health';

// const params = {
//   rango : "promotor",
//   dni : "73641477",
//   cant : "10"
// };

// const body = {
//   params: params,
//   nombre_discoteca: 'disco',
//   token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmVfZGlzY290ZWNhIjoiZGlzY28iLCJjb3JyZW8iOiJqb2VsQGpvZWwuY29tIiwiaWF0IjoxNzAyMjcxNTM2LCJleHAiOjE3MDIyNzUxMzZ9.0xyo5eM9jbhilL1PuKF1heDbaM3Oy-sl6ZdapdJiRK8"
// }

// const json_data = {
//  httpMethod:"PATCH",
//  path:"/mod-cantqr",
//  body: JSON.stringify(body)
// }

// const headers = {
//  'Content-Type':'application/json'
// }


// const test = () => {
//  axios({
// 	method: 'PATCH',
// 	url: url,
// 	data: json_data,
// 	headers: headers
//  }).then(response =>{
// 	console.log(response);
//  }).catch(error => {
// 	console.error("ERROR: ",error);
//  })
// }

// test();


