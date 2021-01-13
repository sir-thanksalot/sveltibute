<script>
  import { active } from "tinro";
  import { isActive, toggleActive } from "./navbar";

  export let path: string;
</script>

<a
  class="navbar-item"
  class:is-tab={!$isActive}
  on:click={$isActive && toggleActive}
  href={path}
  use:active
  active-class="is-active"><slot /></a
>
