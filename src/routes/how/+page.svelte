<script>
  import Scene from "../../components/scene.svelte";
  import LanguageCard from "../../components/language-card.svelte";
  import Svelte from "../../icons/svelte.svelte";
  import Javascript from "../../icons/javascript.svelte";
  import Csharp from "../../icons/csharp.svelte";
  import Capacitor from "../../icons/capacitor.svelte";
</script>

<svelte:head>
  <title>How - SpongeBed</title>
</svelte:head>

<Scene>
  <h1>How I Do It</h1>
  <p>
    I am very passionate about using new technologies such as Svelte and
    Capacitor. You can find a list of my most-used technologies below.
  </p>
  <div class="language-holder">
    <LanguageCard
      name="Svelte"
      color="rgb(194, 73, 34)"
      type="Frontend framework"
      useCase="Constructing stateful and durable frontends for large and interactive web apps"
      svg={Svelte}
      href="https://svelte.dev"
    />
    <LanguageCard
      name="JavaScript"
      color="#F7DF1E"
      type="Language"
      useCase="Websites, mobile, desktop apps and backend servers"
      svg={Javascript}
      href="https://en.wikipedia.org/wiki/JavaScript"
    />
    <LanguageCard
      name="C#"
      color="rgb(29, 3, 65)"
      type="Language"
      useCase="Building GUI applications and realtime communication."
      svg={Csharp}
      href="https://learn.microsoft.com/en-us/dotnet/csharp/"
    />
    <LanguageCard
      name="Capacitor"
      color="rgb(5, 67, 136)"
      type="Framework"
      useCase="Building mobile applications using JavaScript"
      svg={Capacitor}
      href="https://capacitorjs.com/"
    />
  </div>
</Scene>

<style>
  .language-holder {
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
  }
</style>
