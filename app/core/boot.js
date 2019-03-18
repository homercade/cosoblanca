var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var serveStatic = require('serve-static');
var sessions = require('express-session');
var expressValidator = require('express-validator');

// var flash = require('connect-flash');
// var crypto = require('crypto');
// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;
// var sess  = require('express-session');
// var Store = require('express-session').Store;
// var BetterMemoryStore = require(__dirname + '/memory');

module.exports = app => {

    app.set('port', process.argv[2] || process.env.PORT || 3000);
    app.set('view engine', 'pug');
    app.set('views', path.join(path.dirname(__dirname), 'modules'));
    app.use(morgan('dev'));
    app.use(serveStatic(path.join(path.dirname(path.dirname(__dirname)), 'public')));
    app.use(expressValidator());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(sessions({
        secret: 'qnJxRTHpJlDSGCtkUSxtPbuNfrWBHFSaKWlWPLnCIJYijzy',
        resave: false,
        saveUninitialized: true
    }))

	// app.use(flash());
	// app.use(passport.initialize());
	// app.use(passport.session());
    // app.use(cors());
    // app.use(session({ secret: 'passport-cosdd', cookie: { maxAge: 600000 }, resave: false, saveUninitialized: false }))

    // app.get('/', (req, res) => res.redirect('/login'));
    //    var store = new BetterMemoryStore({ expires: 60 * 60 * 1000, debug: true });

    // 	app.use(sess({

	//     name: 'JSESSION',

	//     secret: 'MYSECRETISVERYSECRET',

	//     store:  store,

	//     resave: true,

	//     saveUninitialized: true

	// }));

}