<script>
  import Scene from "../../../components/scene.svelte";
  import CopyButton from "../../../components/copy-button.svelte";
  import "../../../markdown-theme.css";
  import "../../../prism.css";
  export let data;

  $: component = data.component;
  $: metadata = data.metadata;

  function appendCopyButtons(node) {
    const codeBlocks = Array.from(node.querySelectorAll("pre"));

    codeBlocks.forEach((codeBlock) => {
      let storeComponent;

      codeBlock.addEventListener("mouseenter", () => {
        storeComponent = new CopyButton({
          target: codeBlock,
          props: {
            text: "Copy",
            textToCopy: codeBlock.innerText,
          },
        });
      });

      codeBlock.addEventListener("mouseleave", () => {
        storeComponent.$destroy();
      });
    });
  }
</script>

<Scene>
  <div class="metadata-body">
    <h1>{metadata.title}</h1>
    <h3>{metadata.description}</h3>
    <div class="published-by">
      <img
        height="32"
        width="32"
        src="https://github.com/{metadata.author}.png"
        alt="{metadata.author}'s avatar"
      />
      <a href="https://github.com/{metadata.author}">@{metadata.author}</a>
      {#if metadata?.date}
        <span>•</span>
        {metadata.date}
      {/if}
    </div>
  </div>
  <br />
  <div class="markdown-body" use:appendCopyButtons>
    <svelte:component this={component} />
  </div>
  <br />
  <br />
</Scene>

<style>
  .published-by {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .published-by > img {
    border-radius: 10rem;
  }
</style>
