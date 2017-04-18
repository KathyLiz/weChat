var express = require ('express');
var http = require ('http');
var fs = require ('fs');
var common = require ('./app/util/common');

http.globalAgent.maxSockets = Infinity;
var app = express();
require ('./config/express')(app,common.config);
require ('./config/routes')(app);

var puerto = process.env.PORT||5003;
app.listen(puerto,function(){
console.log(common.util.format('%s |se ha iniciado en el puerto %d ',(new Date()),puerto));
console.log("<----------Estos son los logs ------------>");
});

module.exports = app;
