<script>
 export let name;
 export let image;
 export let category;
 export let active;
 export let role;
 export let description;
 export let url;
</script>

<a href={url == false ? "#" : url} on:click={(e) => (function(){
 if(url == false) e.preventDefault()
})()}>

<div class="top">
 <img src={image} alt=":skull:">
 <div>
  <h3 id="name">{name}</h3>
  <span>{category}</span>
 </div>
</div>

<div class="bottom">
 <h3>Role</h3>
 <p>{role}</p>
 <h3>{active == true ? "What I Do" : "What I Did"}</h3>
 <p>{description}</p>
</div>

</a>

<style>

 .bottom {
  padding: 1rem;
  box-sizing: border-box;
 }

 #name {
  margin: 0;
 }

 img {
  height: 70px;
  width: 70px;
  border-radius: 25%;
  margin-right: 1rem;
 }

 .top {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 100px;
  padding: 1rem;
  display: flex;
  border-bottom: 1px solid hsl(0, 0%, 9%);
  align-items: center;
 }

 .bottom {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
 }

 a {
  color: inherit;
  text-decoration: none !important;
  border: 1px solid hsl(0, 0%, 9%);
  cursor: pointer;
  border-radius: 10px;
  transition: box-shadow 0.2s ease;
 }

 a:hover {
  box-shadow: 0 0 0 2px white;
 }
</style>