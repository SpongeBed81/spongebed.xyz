<script>
  import { status } from "../../stores.js";
  import Scene from "../../components/scene.svelte";
</script>

<svelte:head>
  <title>/etc - SpongeBed</title>
</svelte:head>

<Scene>
  <div class="etc-holder">
    <h1>/etc</h1>
    <h3>Thanks</h3>
    <p>
      Thanks for visiting. I hope you enjoyed your stay. The source code for
      this website is available at <a
        href="https://github.com/SpongeBed81/spongebed.xyz"
        >SpongeBed81/spongebed.xyz</a
      >
    </p>
    <h3>Contact</h3>
    <p>
      I'm generally active on Discord, you can send a friend request to {$status
        .discord_user.username}{$status.discord_user.discriminator !=
      "0"
        ? "#" + $status.discord_user.discriminator
        : ""}
    </p>
    <p>
      If I didn't respond, you can also send me a message through <a
        href="https://www.instagram.com/spongebed81/">Instagram</a
      >
    </p>
  </div>
</Scene>

<style>
  .etc-holder {
    max-width: 65ch;
  }
</style>
