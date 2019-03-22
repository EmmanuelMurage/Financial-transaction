const prettyjson =require('prettyjson');
const bodyParser = require('body-parser');
const express = require('express')

const options = {
	noColor: true
};
const app = express();
app.use (bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.post('/hooks/mpesa', (req, res) =>{
	console.log('-----Received Hook--------');

	console.log(prettyjson.render(req.body, options));
	console.log('-----');

    let message = {
    	"ResponseCode":"00000",
    	"Responsedesc":"success"
    };
    res.json(message);  
});

const server = app.listen(5000,()=>{
	let host = server.address().address;
	let port = server.address().port;
	console.log(' server listening on ${port}');
	});
