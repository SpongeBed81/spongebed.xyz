<script>
  import Altbar from "../components/altbar.svelte";
  import { status } from "../stores.js";
  export let data;
  status.set(data.lanyard);
  import "../global.css";
  import Sidebar from "../components/sidebar.svelte";
  import PageTransition from "../components/page-transition.svelte";
</script>

<Sidebar />
<PageTransition url={data.url}>
  <slot />
</PageTransition>
<Altbar />
