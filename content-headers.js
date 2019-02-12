var koa = require('koa');
var app = new koa();

// middleware
app.use(function *(next) {

	if(this.request.type === "application/json"){
		this.body = {message: "hi!"};
	} else {
		this.body = "ok";
	}
	
	return yield next;
});

app.listen(port);