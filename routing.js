var koa = require('koa');
var port = process.argv[2];
var app = new koa();

// theres not router in koa framework
// this.path and yield next does the work

// middleware
app.use(function *(next) {
	if(this.path === "/"){
		this.body = "hello koa"
	}
	if(this.path === "/404"){
		this.body = "page not found";
	}
	if(this.path === "/500"){
		this.body = "internal server error";
	}

	return yield next;
});

app.listen(port);