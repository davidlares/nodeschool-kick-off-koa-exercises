var koa = require('koa')
var app = new koa();
var port = process.argv[2];

// errorHandler middleware
app.use(errorHandler());

// routing
app.use(function* () {
	if(this.path === "/error") {
		throw new Error(500);
	} else {
		this.body = "OK";
	}
});

function errorHandler(){
	return function * (next) {
		try {
			// do something
			yield next;
		} catch(e) {
			this.status = 500;
			this.body = "internal server error";
		}
	};
}

app.listen(port);

