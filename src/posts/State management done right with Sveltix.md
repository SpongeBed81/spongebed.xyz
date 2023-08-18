---
title: State management done right with Sveltix.
description: Use pinia-like API in Svelte with Sveltix.
thumbnail: https://vueschool.io/storage/media/39ebc760d644aa4625743dfc727ff737/pinia-the-enjoyable-vue-store.jpg
date: 18/08/2023 | dd-mm-yyyy
author: spongebed81
---

### The problem

A few months ago, I was building a video player for my project [OpenAnime](https://openani.me) and it became so big that we wanted to split the player into components to improve readability of the player. That time, player included 1300 lines of code in a single component making it very hard to read and maintain. We first tried to use the built-in svelte stores which is great for basic use cases. However, we wanted to also split the Javascript part of the player and storing them in a directory like players, events and utils. And working with svelte stores in plain javascript was just painful we had nearly 30 object properties to manage in a single store and it was clear that built-in svelte stores wasn't enough.

### The solution

We needed a library that could work with existing svelte stores to handle reactive changes within the template and we needed another way to use it easily inside our Javascript. So, I created a library called [sveltix](https://github.com/spongebed81/sveltix) (yes, the name is inspired from vuex 😏) to do this. Sveltix's API looks too much like Pinia's but currently getter support is not implemented.

### Examples with Sveltix

**A basic usage**

```svelte
<script>
  import { sveltix } from "sveltix";

  const newStore = sveltix({
    state: () => ({
     value: 1
    })
  });

  const useStore = newStore.useStore();
</script>

<button
  on:click={() => newStore.value++}>count is {$useStore.value}
</button>
```

**Working with actions**

```svelte
<script>
  import { sveltix } from "sveltix";

  const newStore = sveltix({
    state: () => ({
      value: 1,
    }),
    actions: {
      increment() {
        this.value++;
      },
    },
  });

  const useStore = newStore.useStore();
</script>

<button on:click={() => newStore.increment()}>count is {$useStore.value}</button>
```

**Binding components**

```svelte
<script>
  import { sveltix } from "sveltix";

  const newStore = sveltix({
    state: () => ({
     button: null
    })
  });

 //you can't use bind:this={$useStore.button}. Currently this is the only way of binding components 😅
  function binder(node, prop) {
   newStore[prop] = node
  }
</script>

<button use:binder={'button'}>
  hello!
</button>
```

### The end

I hope you enjoyed your stay. The Github repo for this project is [here](https://github.com/spongebed81/sveltix) and I appreciate any star you give or your PRs and issues
