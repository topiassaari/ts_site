import React from "react";
import "../styles/App.scss";
class Gallery extends React.Component {
  render() {
    return (
      <article className="galleryContainer">
        <div className="row">
          <div className="column">
            <img
              className="galleryImg"
              alt="art1"
              src="https://topias.kuvat.fi/kuvat/website%20gallery/P058.jpg?img=full"
            />

            <img
              className="galleryImg"
              alt="music1"
              src="https://topias.kuvat.fi/kuvat/website%20gallery/TVS_7621-2-Edit-3.jpg?img=full"
            />
            <img
              className="galleryImg"
              alt="portrait 1"
              src="https://topias.kuvat.fi/kuvat/website%20gallery/TVS_5577-Edit-2.jpg?img=full"
            />
          </div>
          <div className="column">
            <img
              className="galleryImg"
              alt="art2"
              src="https://topias.kuvat.fi/kuvat/website%20gallery/P158.jpg?img=full"
            />

            <img
              className="galleryImg"
              alt="music2"
              src="https://topias.kuvat.fi/kuvat/website%20gallery/TVS_7700-Edit-2.jpg?img=full"
            />
            <img
              className="galleryImg"
              alt="portrait 2"
              src="https://topias.kuvat.fi/kuvat/website%20gallery/TVS_9489.jpg?img=full"
            />
          </div>
          <div className="column">
            <img
              className="galleryImg"
              alt="art3"
              src="https://topias.kuvat.fi/kuvat/website%20gallery/P163.jpg?img=full"
            />

            <img
              className="galleryImg"
              alt="music3"
              src="https://topias.kuvat.fi/kuvat/website%20gallery/TVS_5697.jpg?img=full"
            />
            <img
              className="galleryImg"
              alt="portrait 3"
              src="https://topias.kuvat.fi/kuvat/website%20gallery/TVS_3262-Edit-Edit.jpg?img=full"
            />
          </div>
        </div>
      </article>
    );
  }
}

export default Gallery;
