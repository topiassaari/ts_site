<template>
  <article class="work">
    <div>
      <h2>Work</h2>
      <p>
        I don't know if "Work" is the best title for this section...but here are
        some of the things I've done for my job. Unfortunately I can't share any
        of the code I've produced while working as a front-end developer because
        of NDA's.
      </p>
      <div>
        <img src="../assets/projects/thesis.png" />
        <h3>Masters thesis</h3>
        <p>
          While studying for my masters degree, I've worked as a teaching
          assistant for courses related to user-centered design and usability.
          From there I got a thesis position in the Human Centered Health
          Informatics - group. The thesis is on system usability in the context
          of public procurement of IT-systems. Interestingly enough it doesn't
          have that much to do with health informatics. I'll link it here once
          its done.
        </p>
      </div>
      <div>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube-nocookie.com/embed/DOovGTAumlc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h3>ABB's CommonUX Design System</h3>
        <p>
          I worked at ABB for a couple years first as an web-dev intern and
          later full-time. For my bachelors
          <a href="https://www.theseus.fi/handle/10024/227894">thesis</a> I
          designed and implemented a design token library for ABB's internal
          design system. It includes, at times painfully detailed, diary-like
          process descriptions. Honestly it doesn't follow a traditional
          thesis-structure that much, but the concept and end-result ended up
          being pretty useful. If you want to read more about the project itself
          I recommend reading
          <a
            href="https://www.frog.co/work/abb-humanizing-technology-with-design"
            >this article</a
          >
          by a consultancy firm that got the official okey-dokey to tell more
          about the whole thing.
        </p>
      </div>

      <div>
        <img
          src="https://topias.kuvat.fi/kuvat/website%20gallery/nbf16-thu-press-001-by-TopiasSaari-1929.jpg?img=smaller"
        />
        <h3>Studio Kraft</h3>
        <p>
          From 2014 to 2018 as a part-time job I worked as an event
          photographer. Our clients included the likes of Nordic Business Forum,
          Nuoret Yrittäjät and LOGY ry among others. At the Lauttasaari offices
          I spent two summers doing the ever glorious work of taking passport
          photos. Infinite gratitude for
          <a href="https://www.paulaojansuu.com/">Paula Ojansuu</a> for
          everything.
        </p>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
  h2,
  h3 {
    margin: 8px 0;
  }
  p {
    margin-bottom: 16px;
  }
  .work {
    padding: 32px;
    max-width: 600px;

    & > div > div {
      margin: 80px 0;
    }
  }
</style>
