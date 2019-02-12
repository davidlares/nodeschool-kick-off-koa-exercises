var koa = require('koa');
var app = new koa();
var port = process.argv[2];

app.use(responseTime());
app.use(upperCase());

// middleware router
app.use(function* () {
	this.body = "hello koa";
});

// custom middlewares

function responseTime() {
    return function* (next) {
    // doing something before next, start date
    var start = new Date();
    yield next;
    var response = new Date();
    // set X-Response-Time head
  	this.set('X-Response-Time', `${response - start}ms`);
    };
}
    
function upperCase() {
    return function* (next) {
    // doing something before next
    yield next;
    // convert this.body to upper case
  	this.body = this.body.toUpperCase();
    };
}

app.listen(port);

