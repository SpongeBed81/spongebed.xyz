<script>
 import Altbar from "./altbar.svelte";
</script>

<div class="website-content" {...$$restProps}>
 <slot></slot>
 <Altbar></Altbar>
</div>

<style>
 @media screen and (max-width: 850px) {
  .website-content {
   margin-left: 0px;
   padding-top: 65px;
  }
 }
</style>