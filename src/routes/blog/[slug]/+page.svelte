<script>
  import Scene from "../../../components/scene.svelte";
  import CopyButton from "../../../components/copy-button.svelte";
  import "../../../markdown-theme.css";
  import "../../../prism.css";
  import { goto } from "$app/navigation";
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

<svelte:head>
  <title>{metadata.title}</title>
</svelte:head>

<Scene>
  <div class="metadata-body">
    <div class="flex-title">
      <button on:click={() => goto("/blog")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          ><path
            fill="currentColor"
            d="m7.825 13l5.6 5.6L12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2H7.825Z"
          /></svg
        >
      </button>
      <h1>{metadata.title}</h1>
    </div>
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
  .flex-title {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .flex-title > button {
    border-radius: 4px;
    background-color: transparent;
    border: none;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 0 1px var(--color-border-default);
    transition: box-shadow 0.2s ease;
    cursor: pointer;
    padding: 4px;
  }

  .flex-title > button:hover {
    box-shadow: 0 0 0 2px white;
  }

  .published-by {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .published-by > img {
    border-radius: 10rem;
  }
</style>
