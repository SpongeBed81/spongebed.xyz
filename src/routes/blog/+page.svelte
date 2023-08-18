<script>
  import Scene from "../../components/scene.svelte";
  import Blogpost from "../../components/blogpost.svelte";

  export let data;

  const allPosts = data.allPosts;
</script>

<Scene>
  <h1>My Blog</h1>
  <h3>I like to share what I know with other people.</h3>
  <div class="blogposts">
    {#if allPosts.length}
      {#each allPosts as post}
        <Blogpost metadata={post} />
      {/each}
    {:else}
      <h3>Looks like I didn't post anything 😅</h3>
    {/if}
  </div>
</Scene>

<style>
  .blogposts {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 3rem;
  }

  h3 {
    opacity: 0.7;
  }
</style>
