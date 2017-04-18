const API_AI_TOKEN = 'f874d977704a40a9bcc5f6da17d62118';
const apiAiClient = require('apiai')(API_AI_TOKEN);
var ElizaBot = require ('eliza/elizabot.js');
var util = require ('util');
var elizas = {};


exports.index = function (req,res,next){

echo_str=req.param('echostr',null);
res.send(echo_str);
};

exports.message = function (from, to, message){
var say = "";
var eliza = elizas[from];
if(!eliza){
eliza = elizas[from] = new ElizaBot;
var init = elizas[from].getInitial();
say = init;
eliza.transform(message);
}else{
 say = eliza.transform(message);
if(eliza.quit)delete elizas[from]
}
return say;
};

exports.receive = function (req,res,next){

tousername = req.body.xml.tousername[0];
fromusername=req.body.xml.fromusername[0];
msgtype=req.body.xml.msgtype[0];
content= req.body.xml.content[0];
createtime=parseInt(req.body.xml.createtime[0]);
res.contentType("application/xml");
reply = exports.message(tousername,fromusername,content);
str = util.format("<xml><ToUserName>%s</ToUserName>
<FromUserName>%s</FromUserName><CreateTime>%d</CreateTime>
<MsgType>text</MsgType><Content><![CDATA[%s]]></Content></xml>",
fromusername,tousername,createtiem+1,reply);
console.log(str);
res.send(str);

};
