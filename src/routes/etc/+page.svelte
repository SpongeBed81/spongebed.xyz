<svelte:head>
 <title>/etc • SpongeBed</title>
</svelte:head>

<script>
 import { status } from "../../stores.js";
 import Scene from "../../components/scene.svelte";
</script>

<Scene>
 <div class="etc-holder">
  <h1>/etc</h1>
  <h3>Thanks</h3>
  <p>Thanks for visiting. I hope you enjoyed your stay. The source code for this website is available at <a href="https://github.com/SpongeBed81/spongebed.me">SpongeBed81/spongebed.me</a></p>
  <h3>Contact</h3>
  <p>I'm generally active on Discord, you can send a friend request to {$status.data.discord_user.username}#{$status.data.discord_user.discriminator}</p>
  <p>If I didn't responded, you can also send me a message through <a href="https://www.instagram.com/spongebed81/">Instagram</a></p>
 </div>
</Scene>

<style>
 .etc-holder {
  max-width: 65ch;
 }
</style>


