var koa = require('koa');
var port = process.argv[2];
var app = new koa();

// this is a JS generator
app.use(function *() {
	this.body = "hello koa";
});

app.listen(port);