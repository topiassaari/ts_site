<template>
  <div id="app">
    <Header />
    <div class="contentContainer">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: { Header },
};
</script>

<style lang="scss">
html {
  box-sizing: border-box;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}
body {
  min-width: 300px;
}

ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

.contentContainer {
  display: flex;
  justify-content: center;
  padding: 32px 0;
}

article {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: max-content;
  height: max-content;
}
</style>
