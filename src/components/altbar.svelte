<script>
 import { status } from "../stores.js"

 let statusText;
 let color;

  $status.data.activities = $status.data.activities.filter(x => x.id !== "custom")
 const find = $status.data.activities.find(x => x.name.toLowerCase().startsWith("visual studio"))

 if(find) {
  if(find.name.toLowerCase().includes("code")) {
   statusText = "Programming in Visual Studio Code"
  } else {
   statusText = "Programming in Visual Studio"   
  }
 } else {
  if($status.data.listening_to_spotify == true) {
   statusText = "Listening " + $status.data.spotify.song + " by " + $status.data.spotify.artist + " on Spotify"
  } else {
    if($status.data.activities.length > 0){
      if($status.data.activities[0].id == "fe2542dcc6f707f4") {
        statusText = "Listening " + $status.data.activities[0].details + " by " + $status.data.activities[0].state + " on YouTube Music"
      } else {
        statusText = "Playing " + $status.data.activities[0].name
      }
    } else {
      statusText = "Currently doing nothing"
    }
  }
 } 
 
 switch ($status.data.discord_status) {
  case "dnd":
   color = "red"
   break;
  case "online":
   color = "green"
   break;
  case "idle":
   color = "yellow"
   break;
  case "offline":
   color = "grey"
   break; 
 }
</script>

<div class="alt-holder">
 <div class="short">
  <div style="background-color: {color}" id="left-m"></div>
  <span>{$status.data.discord_status.replace("dnd", "Do not Disturb").replace("online", "Online").replace("idle", "Idle").replace("offline", "Offline")}</span>
 </div>

 {#if statusText}
 <div class="short p">
  {#if statusText.startsWith("Listening") && statusText.endsWith("on Spotify")}
  <a href="https://open.spotify.com/track/{$status.data.spotify.track_id}">{statusText}</a>
  {:else}
  <span>{statusText}</span>
  {/if}
 </div>
 {/if}

 <div class="content">
  <span>"If it compiles, it's good; if it boots up, it's perfect." (Linus Torvalds)</span>
 </div>
</div>

<style>

@media screen and (max-width: 850px) {

  .alt-holder {
    display: none !important;
    height: unset !important;
    flex-direction: column;
    background-color: transparent !important;
  }

  .short {
    min-height: 50px;
    border-bottom: 1px solid hsl(0, 0%, 9%);
  }
}

.short {
  min-width: 15rem;
  display: flex;
  align-items: center;
  border-right: 1px solid hsl(0, 0%, 9%);
  gap: 0.5rem;
 }

 .p {
  padding: 1rem;
 }

 #left-m {
  margin-left: 1rem;
 }


 .content {
  min-width: 150px;
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 0.5rem;
 }


 .short > div {
  border-radius: 100%;
  height: 8px;
  width: 8px;
 }

 span {
  font-size: 0.9rem;
 }

 .alt-holder {
  background-color: black;
  position: fixed;
  left: 0;
  width: 100%;
  height: 50px;
  bottom: 0;
  border-top: 1px solid hsl(0, 0%, 9%);
  border-right: 1px solid hsl(0, 0%, 9%);
  border-bottom: 1px solid hsl(0, 0%, 9%);
  border-left: none;
  display: flex;
  z-index: 999999;
 }
</style>