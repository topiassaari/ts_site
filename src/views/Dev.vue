<template>
  <article class="dev">
    <div>
      <h2>Web development</h2>
      <p>
        As stated on
        <router-link class="naviItem" to="/projects/work">Work</router-link>,
        basically all code I've done for money is under an NDA. Here's some of
        the projects I've done for myself and friends. If you are interested in
        seeing half-baked code go over to my
        <a href="https://github.com/topiassaari">github</a>.
      </p>

      <div>
        <img
          src="https://github.com/topiassaari/ts_gallery/blob/main/planning/design/screenshot_gallery.png?raw=true"
        />
        <h3>Gallery</h3>
        <p>
          I made a <a href="http://gallery.topiassaari.com">gallery</a> for the
          visual-art project I did from 2017 to 2021. If you want to read more
          about it, see
          <router-link class="naviItem" to="/projects/personal">
            Personal </router-link
          >. Its made with the
          <a href="https://www.mongodb.com/mern-stack">MERN</a>-stack. Please
          note that the whole thing is currently running in Heroku, so there
          might be some boot-up time.
        </p>
      </div>
      <div>
        <img src="../assets/projects/herneviha.jpg" />
        <h3>Herneviha</h3>
        <p>
          <a href="https://herneviha.github.io/">Herneviha</a>, which roughly
          translates to "hate of peas", is a service with a very limited target
          audience of one. My friend is allergic to peas, and he wanted to have
          a quick way of seeing which foods he can eat at the cafeterias of
          University of Helsinki. I like this project because we made it as a
          joke together with my friends, and apparently it is of actual use.
        </p>
      </div>
      <div>
        <img
          src="https://github.com/topiassaari/bk_reitti_bot/raw/master/assets/example_2.png"
        />
        <h3>BK reitti-bot</h3>
        <p>
          Its a
          <a href="https://github.com/topiassaari/bk_reitti_bot"
            >telegram-bot</a
          >
          I made for our climbing-group. Every time there's new routes available
          at <a href="https://www.boulderkeskus.com/">Boulderkeskus</a>, the bot
          sends a message. Huge thanks to
          <a href="https://github.com/jannunen">jannunen</a> for letting giving
          me permission to scrape this stuff.
        </p>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
  h3 {
    margin: 8px 0;
  }
  p {
    margin-bottom: 16px;
  }
  .dev {
    padding: 32px;
    max-width: 600px;

    & > div > div {
      margin: 80px 0;
    }
  }
</style>
