<script>
  import { isActive, toggleActive } from "src/store/navbar";
  import { active } from "tinro";

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
