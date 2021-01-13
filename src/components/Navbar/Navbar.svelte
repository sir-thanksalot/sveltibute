<script>
  import { isActive, toggleActive } from "./navbar";

  import NavbarLink from "./NavbarLink.svelte";
</script>

<nav
  class="navbar is-light is-fixed-top"
  role="navigation"
  aria-label="main navigation"
>
  <div class="navbar-brand">
    <a class="navbar-item has-text-weight-bold" href="/">SveTiBuTe</a>

    <span
      class:is-active={$isActive}
      on:click={toggleActive}
      role="button"
      class="navbar-burger"
      aria-label="menu"
      aria-expanded="false">
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </span>
  </div>
  <div class="navbar-menu " class:is-active={$isActive}>
    <div class="navbar-start">
      <NavbarLink path="/props">Props</NavbarLink>
      <NavbarLink path="/yap">YAP</NavbarLink>
    </div>

    <div class="navbar-end">
      <!-- navbar items -->
    </div>
  </div>
</nav>
