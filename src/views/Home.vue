<template>
  <article class="aboutContainer">
    <div class="aboutText">
      <img id="face" src="../assets/ts_2021.jpg" alt="naama" />
      <p>
        Located in Helsinki, Finland. Currently studying for a masters degree in
        software and service engineering at Aalto University.
        <br />
        <br />
        <a href="https://www.instagram.com/topias/">@topias</a> on instagram and
        <a href="https://github.com/topiassaari">topiassaari</a> on github.
      </p>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.aboutText {
  width: 300px;
  & > p {
    text-align: justify;
  }
}
#face {
  width: 300px;
  height: 300px;
  margin-bottom: 30px;
}
</style>
