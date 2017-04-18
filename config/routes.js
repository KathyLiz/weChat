var processMessage = require ('../app/controllers/processMessage');
var xmlparser= require('express-xml-bodyparser');

module.exports = function (app){
app.get('/',processMessage.index);
app.post('/',xmlparser({trim:false,explicitArray:false}),processMessage.receive);
};
