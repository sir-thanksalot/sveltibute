import { writable } from "svelte/store";

export let isActive = writable(false);
export function toggleActive() {
  isActive.update((current) => !current);
}
