<template>
  <article class="personal">
    <div>
      <h2>Personal</h2>
      <p>
        These are some of the personal projects I've been working on over the
        years. I tried calling this category "Visual", "Other", "Misc" and so
        on. As you will find out by reading further, I'm not that great at
        naming these things. What differs these projects from other things on
        this site is that I made these purely for myself and they turned out
        pretty nice.
      </p>
      <div>
        <img id="face" src="../assets/projects/vw.png" />
        <h3>VW-project</h3>
        <p>
          In early 2022 I got into learning about video synthesisers and
          feedback loops. As a result, here's a
          <a href="https://vw.topiassaari.com/">collection of videos</a>
          combining those. I update the content as I do more. I've also made the
          music myself as a placeholder, but would love to work with someone who
          actually knows how to make music. Honestly if you are planning on
          inviting me to a job interview or something similar...this might not
          be the best introduction. BE WARNED, A LOT OF FLASHING LIGHTS AND LOUD
          SOUNDS.
        </p>
      </div>
      <div>
        <img src="../assets/projects/p.png" />
        <h3>P-project</h3>
        <p>
          Despite working on this project for almost six years, I never got
          around to actually naming it. In 2017 I began drawing on the photos
          I've taken. This turned into around 300 files named "P123" etc. P
          stands for "picture". Few of the images ended up being framed on the
          walls of my friends, a couple were even album covers. I made a book
          that's really fancy, but unfortunately there's only a handful of
          copies and I don't have the resources to make more. You can see some
          of the images in this
          <a href="http://gallery.topiassaari.com/">gallery</a>, as well as my
          <a href="https://www.instagram.com/topias/">instagram</a>.
        </p>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
  h3,
  h2 {
    margin: 8px 0;
  }
  p {
    margin-bottom: 16px;
  }
  .personal {
    padding: 32px;
    max-width: 600px;

    & > div > div {
      margin: 80px 0;
    }
  }
</style>
