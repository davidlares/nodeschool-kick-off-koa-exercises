var koa = require('koa');
var port = process.argv[2];
var parse = require('co-body');
var app = new koa();
var fs = require('fs');
var streamData = process.argv[3];

// middleware
app.use(function *(next) {

	if(this.path === "/stream"){
		this.body = fs.createReadStream(streamData);
	}

	if(this.path === "/json"){
		this.body = {foo: "bar"};
	}
	
	return yield next;
});

app.listen(port);