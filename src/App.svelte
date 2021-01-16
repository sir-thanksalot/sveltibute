<script>
  import { Route } from "tinro";
  import Navbar from "components/Navbar/Navbar.svelte";
  import Home from "routes/Home.svelte";
  import Props from "routes/Props.svelte";
  import YAP from "routes/YAP.svelte";

  export let message;
</script>

<Navbar />
<Route path="/*">
  <Route path="/"><Home /></Route>
  <Route path="/props"><Props appProps={message} /></Route>
  <Route path="/yap"><YAP /></Route>
  <Route fallback>
    <section class="section container content">
      <h1>404: noting to see here :(</h1>
    </section>
  </Route>
</Route>

<style>
  :global {
    @import "styles/_global";
  }
</style>
