var koa = require('koa');
var port = process.argv[2];
var body = yield parse(this);
var app = new koa();

// middleware
app.use(function *(next) {

	if(this.path === "/" && this.method == "POST"){
		var body = yield parse(this)
		this.body = "hello koa";
	}
	
	return yield next;
});

app.listen(port);