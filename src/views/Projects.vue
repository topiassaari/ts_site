<template>
  <article class="links">
    <ul>
      <div>
        <li>
          <b>Thesis</b>
        </li>
        <li>
          <a href="https://www.theseus.fi/handle/10024/227894">
            Creating a Design Token Library for ABB’s CommonUX Design System
          </a>
        </li>
      </div>
      <div>
        <li>
          <b>Web</b>
        </li>
        <li>
          <span>
            <a
              href="https://www.idean.com/work/abb-humanizing-technology-with-design"
            >
              ABB CommonUX Design System (article by Idean)
            </a>
            - as a front-end web developer at ABB
          </span>
        </li>
        <li>
          <a href="https://github.com/topiassaari/bk_reitti_bot">
            BK reitti bot
          </a>
        </li>
        <li>
          <a href="https://herneviha.github.io/">Herneviha</a>
        </li>
        <li>
          <span>
            <a href="https://phonebook-fs-2021-saari.herokuapp.com/">
              A simple phonebook application
            </a>
            - for Full Stack Open 2021
          </span>
        </li>
        <li>
          <a href="https://topiassaari.github.io/is_it_seven/">
            Is it seven?
          </a>
        </li>
      </div>
      <div>
        <li>
          <b>Games</b>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=8hBD8ywxK8Q">
            Protocol: Bird Cage
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=BqmUf1abX8E&feature=emb_title"
          >
            The Left Hand
          </a>
        </li>
      </div>
      <div>
        <li>
          <b>Photography</b>
        </li>
        <li>
          <span>
            <a
              href="https://www.nbforum.com/past-events/nordic-business-forum-2016/"
            >
              Nordic Business Forum (2014-2016)
            </a>
            - with Studio Kraft
          </span>
        </li>
        <li>
          <a
            href="https://uskallayrittaa.fi/suomen-parhaat-nuoret-yrittajat-palkittiin-uskalla-yrittaa-finaalissa-etela-pohjanmaalle-kaksoisvoitto/"
          >
            NY Uskalla yrittää - finaali (2015)
          </a>
        </li>
        <li>
          <a href="https://www.fullsteam.fi/fi/artistit/entas-peltonen">
            Fullsteam Agency: Entäs Peltonen?
          </a>
        </li>
      </div>
      <div>
        <li>
          <b>Videos</b>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=nh9P5Kfq0ng">
            Games 2017: ValoClimb® – Interactive game platform for climbing
            walls | Valo Motion
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=8phbX6HgFEY">
            Pikseli Arcade - Koe mitä haluat
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=bTDVoPMe3zI">
            Yeah right - Vince Staples, Freestyle | Nelli Karmila
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=JepI20GtaL8">
            Entäs Peltonen? - Nurkkapöytä (Virallinen musiikkivideo)
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=ZzYLEzxPkQA">
            BAK - 3+4=6
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=fJXt_spPHsY">
            Michael Shié - Kelloo / Niimonii
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=eitaG4bi-RU">
            Lauantai - Olkkarin sohvalta etelään (musiikkivideo)
          </a>
        </li>
        <li>
          <span>
            <a href="https://www.youtube.com/watch?v=rVZzQGRTT7c">
              Poets of the Fall - Moonlight Kissed (Official 4K Video w/ Lyrics)
            </a>
            - as a grip assistant / runner
          </span>
        </li>
      </div>
    </ul>
  </article>
</template>

<style lang="scss" scoped>
.links {
  padding: 32px;

  a {
    margin-bottom: 16px;
    cursor: pointer;
    text-decoration-line: underline;
  }
  & > ul > div {
    margin-bottom: 32px;

    & > li {
      margin-bottom: 12px;
      & > b {
        font-size: 14px;
        margin-bottom: 16px;
      }
    }
  }
}
</style>
