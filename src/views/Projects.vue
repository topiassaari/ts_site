<template>
  <article class="links">
    <div>
      <h2>Projects</h2>
      <p>A selection of projects I've done along the years.</p>
      <ul>
        <li>
          <router-link class="naviItem" to="/projects/personal">
            <h3>Personal</h3>
          </router-link>
        </li>
        <li>
          <router-link class="naviItem" to="/projects/videos">
            <h3>Videos</h3>
            <li>
              <router-link class="naviItem" to="/projects/dev">
                <h3>Web development</h3>
              </router-link>
            </li>
          </router-link>
        </li>
        <li>
          <router-link class="naviItem" to="/projects/work">
            <h3>Work</h3>
          </router-link>
        </li>
      </ul>
    </div>
  </article>
</template>

<style lang="scss" scoped>
  .links {
    padding: 32px;
  }
  li {
    margin: 30px 0;
  }
</style>
