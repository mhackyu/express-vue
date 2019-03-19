# express-vue

# Getting Started
Before you proceed to [installation](#installation) you must have the following tools installed in your machine:

- Code Editor
- Nodejs 8.x.x or higher
- MySQL server at least v8.0.12 or higher

# Installation
1. Clone this repository.

2. Install node modules.
```
npm install
```
3. Configure [.env]() variables. See [.env.sample]().

4. Run the application.
```
npm start
```

### Other commands that you may use:
- Run only the server (No active webpack).
```
npm run server
```
- Build to development - active webpack dev server will listen to changes to automatically build our files.
```
npm run build:dev
```
- Build to production - this will build production ready assets and minified scripts.
```
npm run build:prod
```

*All bundled scripts will go to **dist** folder.*

# To Do

- [ ] url-loader in webpack.
- [ ] Add config file for error and success response.
- [ ] Ways to not reset session in dev mode.
- [ ] Hot Reloading (Vue) if possible.
- [ ] Use one service in client and server (if possible).
- [ ] Support for plain html render.
- [ ] Minify html page on renders (prod).
- [ ] Automatically optimize image when building to production.
- [ ] Show example of page not found in vue-router.


> Note that the project structure is still in experimental. In this project I've used MVC style but I'm still open to restructure this project if you have something that you want to suggests better than this. 

**Project Structure Criteria:**
- Maintainability.
- Reusability.
- Developer friendly.


Made with ❤️ by  [ken](https://github.com/kendrick004) and [mhackyu](https://github.com/mhackyu).
