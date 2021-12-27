<script lang="ts">
  import Styles from "./Styles.svelte";
  import Footer from "./Footer.svelte";

  export let name = "Joel";
</script>

<svelte:head>
  <title>Joel Collyer | Calgary, AB | Web Developer</title>
  <html lang="en" />
</svelte:head>

<Styles />

<main class="container relative mx-auto">
  <h1 class="text-3xl font-bold text-center">Hello {name}!</h1>
  <Footer />
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
