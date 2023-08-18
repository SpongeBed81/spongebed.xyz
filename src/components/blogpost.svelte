<script>
  export let metadata;
</script>

<a
  class="blogcard"
  href="/blog/{metadata.slug}"
  style="--bg: url({metadata.thumbnail})"
>
  <div id="thumbnail" />
  <div class="body">
    <h3>{metadata.title}</h3>
    <h5>{metadata.description}</h5>
  </div>
  <footer>
    <img
      width="36"
      height="36"
      src="https://github.com/{metadata.author}.png"
      loading="lazy"
      alt=""
    />
    <div class="info">
      <object aria-label="Author link"
        ><a
          href="https://github.com/{metadata.author}"
          target="_blank"
          rel="noreferrer noopener">{metadata.author}</a
        ></object
      >

      <span>{metadata.date}</span>
    </div>
  </footer>
</a>

<style>
  .blogcard {
    color: unset;
    overflow: hidden;
    text-decoration: none;
    width: 320px;
    border-radius: 4px;

    box-shadow: 0 0 0 1px #343434;
    transition: box-shadow 0.2s ease;
  }

  .body > h3 {
    margin-bottom: 4px;
  }

  .body > h5 {
    opacity: 0.7;
    font-weight: 400;
  }

  object > a {
    color: unset;
    text-decoration: none;
  }

  object > a:hover {
    color: #ff65b2;
  }

  .info > span {
    opacity: 0.7;
  }

  .blogcard:hover {
    box-shadow: 0 0 0 2px white;
  }

  #thumbnail {
    width: 100%;
    height: 193.5px;
    background-image: var(--bg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .body {
    padding: 24px 24px 0;
  }

  .body > * {
    margin: 0;
  }

  footer {
    padding: 12px 24px 24px;
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  footer > img {
    border-radius: 10rem;
  }

  .info {
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
    font-weight: 400;
  }
</style>
