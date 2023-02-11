<script>
 import { status } from "../stores.js"
 export let data;
 status.set(data.lanyard)
 import "../global.css"
 import Sidebar from "../components/sidebar.svelte";
 import PageTransition from "../components/page-transition.svelte";
</script>

<Sidebar></Sidebar>
<PageTransition url={data.url}>
 <slot></slot>
</PageTransition>
