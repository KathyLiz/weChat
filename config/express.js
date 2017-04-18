var express = require ('express');
var bodyParser = require('body-parser');
var favicon = require('static-favicon');
var lessMiddleware = require ('less-middleware');
var pkg = require ('../package');
var path = require('path');
var xmlparser = require('express-xml-bodyparser');

module.exports = function (app,config){
app.set('showStackError',true);
//app.use(favicon(config.root{'/public/images/favicon.ico'));
app.use(bodyParser());
app.locals.pretty = true;

app.use(xmlparser());
//app.use(express.estatic(config.root+'/public'));

app.use(function(req,res,next){
res.locals.pkg = pkg;
next();
});

 app.use(express.logger('tiny'));
};
