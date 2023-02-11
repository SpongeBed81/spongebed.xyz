<script>
 import { fade } from 'svelte/transition'
 export let url = ''
 const pageTransitionDuration = 80
</script>

{#key url}
 <div 
     in:fade={{
         duration: pageTransitionDuration,
         delay: pageTransitionDuration,
     }}
     out:fade={{ duration: pageTransitionDuration }}
 >
     <slot />
 </div>
{/key}
