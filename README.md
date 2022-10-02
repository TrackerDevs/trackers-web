
# CS Tracker @ UIC Website Source

### Requirements

- Node.js >=16.0

### Install

```cli
npm i
```

### Setup

Place `cert/` folder in `src/` with `cert_idp.pem cert.pem key.pem` files.  
Create `.env` file and fill in session secret.

### Run Server

```cli
npm run start
```

## For Development

### Serve Vue

```cli
npm run serve
```

### Run TailwindCSS

```cli
npx tailwindcss -i ./src/stylesheets/landing.css -o ./src/dist/output.css --watch
```

### Test Production

```cli
npm run build
npm run start
```

In-depth information on configuring Shibboleth IDP can be found [here](https://github.com/ritstudentgovernment/passport-saml-example/blob/master/README.md).
