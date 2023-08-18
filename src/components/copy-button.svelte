<script>
  export let text = "";
  export let textToCopy = "";

  let clicked = false;
</script>

<button
  on:click={() => {
    navigator.clipboard.writeText(textToCopy);
    clicked = true;
    setTimeout(() => {
      clicked = false;
    }, 2000);
  }}
>
  {#if clicked}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      ><path
        fill="currentColor"
        d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z"
      /></svg
    >
  {:else}
    {text}
  {/if}
</button>

<style>
  button {
    min-width: 50px;
    min-height: 25px;
    border-radius: 0.2rem;
    padding: 4px 6px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 1rem;
    top: 1rem;
    outline: none;
    box-shadow: 0 0 0 1px var(--color-border-default);
    transition: box-shadow 0.2s ease;
    background-color: transparent;
    cursor: pointer;
    border: none;
  }

  button:hover {
    box-shadow: 0 0 0 2px white;
  }
</style>
