var session = require('koa-session');
var views = require('co-views');
var port = process.argv[2];
var koa = require('koa');
var app = new koa();

var render = views(__dirname + '/views', {
	ext: 'ejs'
});

app.keys = ['secret','keys'];
app.use(session(app));

// routing
app.use(function* () {

	var user = {
      name: {
        first: 'Tobi',
        last: 'Holowaychuk'
      },
      species: 'ferret',
      age: 3
    };

	if(this.path === "/" && this.method == "GET") {
		this.body = yield render('user', {user: user})	
	}

});

app.listen(port);

