
# CS Tracker @ UIC Website Source

### Requirements

- Node.js >=16.0

### Install

```cli
npm i
```

### Run Server

```cli
npm run serve
```

## For Development

### Serve Vue

```cli
npm run serve
```

### Run TailwindCSS

```cli
npx tailwindcss -i ./src/stylesheets/tailwind.css -o ./src/dist/output.css --watch
```

### Run Lint

```cli
npm run lint
```

## Firebase API

- Base API url: `https://us-central1-cs-trackers.cloudfunctions.net/api`

- All commands must be ran in `api/functions/`

### Deploy functions

```cli
npm run deploy
```

### Serve functions locally

```cli
npm run serve
```

### Run lint

```cli
npm run lint
```

### Deprecated

#### Setup

Place `cert/` folder in `src/` with `cert_idp.pem cert.pem key.pem` files.  
Create `.env` file and fill in session secret.

In-depth information on configuring Shibboleth IDP can be found [here](https://github.com/ritstudentgovernment/passport-saml-example/blob/master/README.md).
