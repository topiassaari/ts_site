<template>
  <div class="headerContainer">
    <router-link class="headerLogo" to="/">
      <img id="logo" src="../assets/ts_img.png" alt="logo" />
    </router-link>
    <div class="navigation">
      <router-link class="naviItem" to="/gallery"> Gallery</router-link>
      <router-link class="naviItem" to="/projects"> Projects </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.headerContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .headerLogo {
    padding: 8px;
    cursor: pointer;
    & > #logo {
      width: 50px;
    }
  }
}
.navigation {
  padding-right: 16px;
}
.naviItem {
  padding: 8px;
  margin-left: 16px;
  font-size: 14px;
  color: grey;
  cursor: default;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    color: black;
  }
}
</style>
