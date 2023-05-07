

// server structura

const http = require("http");
const fs = require('fs');
const path = require('path');

// met 1
const pathIndex = path.join(__dirname,"static","index.html");
const indexFile = fs.readFileSync(pathIndex);

// script + style (conectam doi in 1)
// met 2
const scriptFile = fs.readFileSync(path.join(__dirname,"static","script.js"));
const styleFile = fs.readFileSync(path.join(__dirname,"static","style.css"));


// met 1 pt un fisier
/*
const server = http.createServer((req,res)=>{
	if(req.url ==="/"){
		return res.end(indexFile);
	}
	res.statusCode = 404;
	return res.end("ErRoR 404");
});
*/
// met 2 pt mai multe fisiere
const server = http.createServer((req,res)=>{
	switch(req.url){
		case '/': return res.end(indexFile);
		case '/script.js': return res.end(scriptFile);
		case '/style.css': return res.end(styleFile);
	}
	res.statusCode = 404;
	return res.end("ErRoR 404");
});

server.listen(3000);



