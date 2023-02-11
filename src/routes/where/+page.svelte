<svelte:head>
 <title>Where • SpongeBed</title>
</svelte:head>

<script>
 import CompanyCard from "../../components/company-card.svelte";
 import Card from "../../components/card.svelte";
 import Scene from "../../components/scene.svelte";
</script>

<Scene>
 <h1>Where I've Done It</h1>
 <h3>Companies</h3>
 <div class="companies-holder">
  <CompanyCard
  name="OpenAnime" 
  image="https://openani.me/favicon.png" 
  category="Entertainment" 
  url="https://openani.me"
  role="CEO, Founder & Developer"
  description="I established OpenAnime in 2022 with the goal of enhancing the anime viewing experience. I'm actively working on both the backend and frontend development of the platform."
  active={true}
  ></CompanyCard>

  <CompanyCard
  name="Reponse" 
  image="/reponse.webp" 
  category="Social" 
  url={false}
  role="CEO, Founder & Developer"
  description="I developed the realtime infrastructure using Socket.IO"
  active={false}
  ></CompanyCard>
  </div>
  <h3>Open-source Projects</h3>
  <div class="projects">
   <Card name="fluent-svelte-extra" language="TypeScript" url="https://github.com/OpenAnime/fluent-svelte-extra" description="A port of Windows 11's Fluent Design System in web."></Card>
   <Card name="esenlerotogari" language="JavaScript" url="https://github.com/OpenAnime/esenlerotogari" description="Carousels made simple."></Card>
  </div> 
</Scene>

<style>
 @media screen and (max-width: 850px) {
  .companies-holder {
    grid-template-columns: 1fr !important;
  }
}

 .projects {
  margin-bottom: 2rem;
 }

 .companies-holder {
  display: grid;
  width: 100%;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
 }
</style>