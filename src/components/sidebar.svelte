<script>
 import { page } from "$app/stores"
 import { onMount } from "svelte";
 import { navigating } from '$app/stores';
 let root;
 let open = false;
 let icons = [
  //kapalı
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`,
  //açılmış
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
 ]

 $: if($navigating) {
  new Audio("/switch-page.mp3").play();
  selectRoute($navigating.to.route.id)
 }

 function selectRoute(route) {
   const getTop = root.querySelector(`[href="${route}"]`).getBoundingClientRect()
   root.querySelector(".route-selector").style.top = getTop.top + "px"
 }


 onMount(() => {
  selectRoute(window.location.pathname)
  for (let route of root.querySelector(".routes").children) {
   route.addEventListener("click", () => {
    controlNavbar()
   })
  }
 })

 function controlNavbar() {
  //open false ise navbarın açılması için işlemler başlatılmalıdır
  let state = (open == false ? "setProperty" : "removeProperty")
  root.style[state]("height", "100%", "important")
  root.querySelector(".hold").style[state]("position", "absolute")
  root.querySelector(".content").style[state]("display", "block", "important")
  document.body.style[state]("overflow", "hidden")
  root.querySelector(".resp").innerHTML = icons[+!+open]
  document.querySelector(".alt-holder").style[state]("display", "flex", "important")
  open = !open
 }
</script>

<div class="sidebar" bind:this={root}>
 <div class="route-selector"></div>
 <div class="hold">
  <div class="top">
    <p>SpongeBed</p>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <svg class="resp" on:click={() => controlNavbar()} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
  </div>
  <div class="content">
   <div class="routes">
    <a href="/" data-sveltekit-prefetch style={$page.route.id == "/" ? "color: white" : undefined}>what I do</a>
    <a href="/where" data-sveltekit-prefetch style={$page.route.id == "/where" ? "color: white" : undefined}>where I've done it</a>
    <a href="/how" data-sveltekit-prefetch style={$page.route.id == "/how" ? "color: white" : undefined}>how I do it</a>
    <a href="/etc" data-sveltekit-prefetch style={$page.route.id == "/etc" ? "color: white" : undefined}>more + contact</a>
   </div>
  </div>
 </div>
</div>

<style>

@media screen and (max-width: 850px) {
  .sidebar {
    flex-direction: row !important;
    -webkit-box-align: center !important;
    align-items: center !important;
    top: 0px !important;
    display: flex !important;
    padding: 0rem !important;
    width: 100% !important;
    height: 65px !important;
    background-color: rgba(0, 0, 0, 0.8) !important;
    backdrop-filter: blur(5px) !important;
    border-bottom: unset !important;
    z-index: 1 !important;
  }

  .hold {
    top: 0px !important;
    padding: 0rem !important;
    height: 65px !important;
    background-color: rgba(0, 0, 0, 0.8) !important;
    backdrop-filter: blur(5px) !important;
    z-index: 1 !important;
  }

  .route-selector {
    display: none !important;
  }

  .routes {
    padding: 2rem;
  }

  .content {
    display: none !important;
  }

  .resp {
    display: unset !important;
    margin-right: 2rem;
    cursor: pointer;
    color: white;
  }

  .top {
    width: 100%;
    min-height: 65px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid hsl(0, 0%, 9%) !important;
  }

  .hold {
    width: 100%;
  display: flex;
  flex-direction: column;
  }

  .top > p {
    margin-left: 2rem;
  }


}

  .resp {
    display: none;
  }

 .top > p {
  font-weight: 600;
  color: hsl(0, 0%, 95%);
 }

 .route-selector {
  position: absolute;
  width: 1px;
  background-color: white;
  height: 39px;
  right: -1px;
  transition: top 250ms;
 }

 .routes > a {
  color: rgb(204, 204, 204);
  display: flex;
  padding: 10px 0px;
  text-decoration: none !important;
 }

 .routes > a:hover {
  color: white;
 }

 .content {
  display: flex;
  flex-direction: column;
  height: 100%;
 }

 .sidebar {
  display: inline-block;
  box-sizing: border-box;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 15rem;
  border-right: 1px solid hsl(0, 0%, 9%);
 }

</style>