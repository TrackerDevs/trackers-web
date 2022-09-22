const fs = require('fs');
require('dotenv').config();
const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const SamlStrategy = require('passport-saml').Strategy;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/src'));

app.use(
	require('express-session')({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false
	})
);
app.use(passport.initialize());
app.use(passport.session());

// From: https://github.com/ritstudentgovernment/passport-saml-example/blob/master/app.js
// https://shibboleth.uic.edu/
const strat = new SamlStrategy(
	{
		// URL that goes from the Identity Provider -> Service Provider
		callbackUrl: '/login/callback',
		// URL that goes from the Service Provider -> Identity Provider
		entryPoint: process.env.ENTRY_POINT,
		// Usually specified as `/shibboleth` from site root
		issuer: process.env.ISSUER,
		identifierFormat: null,
		// Service Provider private key
		decryptionPvk: fs.readFileSync(__dirname + '/src/cert/key.pem', 'utf8'),
		// Service Provider Certificate
		privateCert: fs.readFileSync(__dirname + '/src/cert/key.pem', 'utf8'),
		// Identity Provider's public key
		cert: fs.readFileSync(__dirname + '/src/cert/cert.pem', 'utf8'),
		validateInResponseTo: false,
		disableRequestedAuthnContext: true
	},
	function (profile, done) {
		findByEmail(profile.email, function (err, user) {
			if (err) {
				return done(err);
			}
			return done(null, user);
		});
	}
);
passport.use(strat);

passport.serializeUser(function (user, done) {
	done(null, user);
});
passport.deserializeUser(function (user, done) {
	done(null, user);
});

const redir = (req, res) => {
	res.redirect('/');
};
const ensureAuthenticated = (req, res, next) => {
	if (req.isAuthenticated()) return next();
	else return res.redirect('/login');
};

app.get('/', (req, res) => {
	res.sendFile('landing.html', {
		root: 'src/components'
	});
});

app.get('/login', passport.authenticate('saml', { failureRedirect: '/', failureFlash: true }), redir);
app.post('/login/callback', passport.authenticate('saml', { failureRedirect: '/', failureFlash: true }), redir);

app.get('/Shibboleth.sso/Metadata', function (req, res) {
	res.type('application/xml');
	res
		.status(200)
		.send(strat.generateServiceProviderMetadata(fs.readFileSync(__dirname + '/src/cert/cert_idp.pem', 'utf8')));
});

app.listen(3000, function () {
	console.log('Server started at http://localhost:3000/');
});
