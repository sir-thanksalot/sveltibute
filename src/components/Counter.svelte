<script>
  import { clicks } from "store/clicks";
</script>

<button class="button is-primary" on:click={() => $clicks++}
  >Clicks: {$clicks}</button
>

<!-- just to add some style -->
<style>
  button {
    font-weight: bold;
  }
</style>
