
# CS Tracker @ UIC Website Source

### Requirements

- Node.js >=v16

### Install

```cli
npm i
```

### Setup

Place `cert/` folder in `src/` with `cert_idp.pem cert.pem key.pem` files.  
Create `.env` file and fill in session secret.

### Run Server

```cli
npm start
```

### Run TailwindCSS

```cli
npx tailwindcss -i ./src/public/stylesheets/landing.css -o ./src/dist/output.css --watch
```

In-depth information on configuring Shibboleth IDP can be found [here](https://github.com/ritstudentgovernment/passport-saml-example/blob/master/README.md).
