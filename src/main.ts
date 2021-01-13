import App from "./App.svelte";
let app: App;

//If you dont need to prefetch stuff, just use this and remove the other stuff
// app = new App({
//   target: document.body,
//   props: {},
// });

//simulation some prefetching, like check for session etc.
// TODO: fetch what you need, or remove all this..
new Promise((resolve) =>
  resolve({ message: "Hello, I'm a prop from the outside world!" })
).then((data) => {
  done();
  app = new App({
    target: document.body,
    props: data,
  });
});

function done() {
  document.getElementById("preload").remove();
}

export default app;
