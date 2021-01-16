<script>
  import Counter from "components/Counter.svelte";
</script>

<section class="section container content">
  <h1>Welcome to SvelTiBuTe!</h1>
  <h4>
    My <strong>Svel</strong>te<strong>Ti</strong>nro<strong>Bu</strong
    >lma<strong>Template</strong>
  </h4>

  <p>
    Just a small <a tinro-ignore href="https://svelte.dev/">Svelte</a> template
    setup with
    <a tinro-ignore href="https://github.com/AlexxNB/tinro">tinro</a> as SPA
    router and <a tinro-ignore href="https://bulma.io/">Bulma</a> as css framework.
    TypeScript, Prettier and Sass/Scss are also here to please you! You are seeing
    some useless stuff thats just here to remind me how to do the most basic things.
  </p>
  <ul>
    <li>The Navbar</li>
    <li>Stores</li>
    <li>Rotes with tinro</li>
    <li>Pass props to app (eg for prefetching user)</li>
    <li>How to overwrite variables from Bulma (PINK!)</li>
  </ul>

  <p class="mb-3">
    Oh, and here is a button for your enjoyment (It preserves the click count
    after site changes, how cool is this?!):
  </p>
  <Counter />
</section>
