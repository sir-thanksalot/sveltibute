_Looking for a shareable component template? Go here --> [sveltejs/component-template](https://github.com/sveltejs/component-template)_

---

# svelte app

This is based on the project template for [Svelte](https://github.com/sveltejs/template), setup with a few extras:

- [tinro](https://github.com/AlexxNB/tinro) for Routing
- [Bulma](https://bulma.io/) as css framework
- TypeScript, Prettier and some other convenient tweaks.

It shows some useless stuff to remind me on how to do the most basic things: stores, passing props to app, overwriting some bulma values (PINK!) and so on

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit sir-thanksalot/sveltibute sveltibute-app
cd sveltibute-app
```

_Note that you will need to have [Node.js](https://nodejs.org) installed._

## Get started

Install the dependencies...

```bash
cd sveltibute-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).
