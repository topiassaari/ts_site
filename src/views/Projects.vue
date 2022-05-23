<template>
  <article class="links">
    <div>
      <h2>Projects</h2>
      <p>
        The projects on this site mix some of my previous academic, personal and
        work projects. If you are here for recruiting purposes, I suggest
        starting from
        <router-link class="naviItem" to="/projects/work">Work</router-link>
        and then making your way down the list. If you are a friend who just
        wants to know what I'm up to on my free time...start from the bottom and
        go up.
      </p>
      <ul>
        <li>
          <router-link class="naviItem" to="/projects/work">
            <h3>Work</h3>
          </router-link>
        </li>
        <li>
          <router-link class="naviItem" to="/projects/dev">
            <h3>Web development</h3>
          </router-link>
        </li>
        <li>
          <router-link class="naviItem" to="/projects/videos">
            <h3>Videos</h3>
          </router-link>
        </li>
        <li>
          <router-link class="naviItem" to="/projects/personal">
            <h3>Personal</h3>
          </router-link>
        </li>
      </ul>
    </div>
  </article>
</template>

<style lang="scss" scoped>
  .links {
    padding: 32px;
    max-width: 600px;
  }
  li {
    margin: 30px 0;
  }
</style>
