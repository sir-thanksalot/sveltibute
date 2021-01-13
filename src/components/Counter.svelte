<script>
  import { clicks } from "store/clicks";
</script>

<button class="button is-primary" on:click={() => $clicks++}
  >Clicked: {$clicks}</button
>
