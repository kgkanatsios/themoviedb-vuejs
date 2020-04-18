# themoviedb-vuejs

Movies database from [themoviedb.org API 3](https://developers.themoviedb.org/3) by Vue.js
About the TMDb API documentation and everything else you can see here: [https://www.themoviedb.org/documentation/api](https://www.themoviedb.org/documentation/api)

## API Key

You will need an account to The Movie Database to access the API. To obtain a key, follow these steps:

1. Register and verify [your account](https://www.themoviedb.org/account/signup).
2. [Log in](https://www.themoviedb.org/login) to your account.
3. Select the API section on left side of your account page.
4. Click on the link to generate a new API key and follow the instructions.

## Initial Configuration

1. `cp .env.example .env.local`
2. Set the value of `VUE_APP_TMDB_API_KEY` variable.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
