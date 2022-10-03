const fs = require("fs");
require("dotenv").config();
const express = require("express");
const passport = require("passport");
const bodyParser = require("body-parser");
const SamlStrategy = require("passport-saml").Strategy;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/src/vue"));

app.use(
	require("express-session")({
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
		callbackUrl: "/login/callback",
		// URL that goes from the Service Provider -> Identity Provider
		entryPoint: process.env.ENTRY_POINT,
		// Usually specified as `/shibboleth` from site root
		issuer: process.env.ISSUER,
		identifierFormat: null,
		// Service Provider private key
		decryptionPvk: fs.readFileSync(__dirname + "/src/cert/key.pem", "utf8"),
		// Service Provider Certificate
		privateCert: fs.readFileSync(__dirname + "/src/cert/cert.pem", "utf8"),
		// Identity Provider's public key
		cert: fs.readFileSync(__dirname + "/src/cert/cert_idp.pem", "utf8"),
		validateInResponseTo: false,
		disableRequestedAuthnContext: true
	},
	function (profile, done) {
		return done(null, profile);
	}
);
passport.use(strat);

passport.serializeUser((user, done) => {
	done(null, user);
});
passport.deserializeUser((user, done) => {
	done(null, user);
});

const redir = (req, res) => {
	res.redirect("/");
};
// eslint-disable-next-line no-unused-vars
const ensureAuthenticated = (req, res, next) => {
	return req.isAuthenticated() ? next() : res.redirect("/login");
};

app.get("/", (req, res) => {
	res.sendFile("index.html", {
		root: "src/vue"
	});
});

app.get("/login", passport.authenticate("saml", { failureRedirect: "/", failureFlash: true }), redir);
app.post("/login/callback", passport.authenticate("saml", { failureRedirect: "/", failureFlash: true }), redir);

app.get("/Shibboleth.sso/Metadata", (req, res) => {
	res.type("application/xml");
	res
		.status(200)
		.send(strat.generateServiceProviderMetadata(fs.readFileSync(__dirname + "/src/cert/cert_idp.pem", "utf8")));
});

app.listen(3000, () => {
	console.log("Server started at http://localhost:3000/");
});
