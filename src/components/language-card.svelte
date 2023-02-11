<script>
 export let url;
 export let name;
 export let type;
 export let useCase;
 export let color;
 export let svg;
</script>

<a href={url} {...$$restProps}>
 <div class="language-card-holder">
  <div class="img-holder" style="background-color: {color};">
   <svelte:component this={svg}></svelte:component>
  </div>
  <div class="short">
   <h5>name</h5>
   <p>{name}</p>
  </div>
  <div class="short">
   <h5>type</h5>
   <p>{type}</p>
  </div>
  <div class="long">
   <h5>use case</h5>
   <p>{useCase}</p>
  </div>
 </div>
</a>

<style>


@media screen and (max-width: 1050px) {
  .language-card-holder {
    flex-direction: column !important;
    height: unset !important;
  }

  .img-holder {
   width: 100% !important;
   height: 50px !important;
  }

  .short {
   width: 100% !important;
   min-width: 100% !important;
   border-right: unset !important;
   border-bottom: 1px solid hsl(0, 0%, 9%);
  }
}


 .long {
  height: 100%;
  width: fit-content;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  border-right: 1px solid transparent;
  padding: 1rem;
  box-sizing: border-box;
 }

 p {
  margin: 0;
 }

 a {
  color: inherit;
  text-decoration: none !important;
 }

 a > div {
  transition: box-shadow 0.2s ease;
 }

 a:hover>div {
  box-shadow: 0 0 0 2px white;
 }

 .short {
  height: 100%;
  width: 200px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  border-right: 1px solid hsl(0, 0%, 9%);
  padding: 1rem;
  box-sizing: border-box;
  flex-shrink: 0;
 }

 h5 {
  font-family: "Courier New";
  margin: 0px;
  color: rgb(255, 255, 255);
 }

 .language-card-holder {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;
  border: 1px solid hsl(0, 0%, 9%);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 1rem;
 }

 .img-holder {
  height: 100%;
  width: 100px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  fill: rgb(255, 255, 255);
  flex-shrink: 0;
 }
</style>