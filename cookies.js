var koa = require('koa')
var app = new koa();
var cookie = require('cookies');
var port = process.argv[2];

app.keys = ['secret','keys'];

// routing
app.use(function* () {

	if(this.path === "/") {
		var times = parseInt(this.cookies.get('view', {'signed': true})) + 1 || 1;
		this.cookies.set('view', times, {'signed': true});
		this.body = `${times} views`;
	}

});

app.listen(port);

