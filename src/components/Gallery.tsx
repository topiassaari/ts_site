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
              src="https://topias.kuvat.fi/kuvat/website%20gallery/P058.jpg?img=medium"
            />

            <img
              className="galleryImg"
              alt="music1"
              src="https://topias.kuvat.fi/kuvat/website%20gallery/TVS_7621-2-Edit-3.jpg?img=medium"
            />
            <img
              className="galleryImg"
              alt="art6"
              src="https://topias.kuvat.fi/kuvat/website%20gallery/8687CBE2-9354-4CBC-9D11-768D22E45B02.jpeg?img=medium"
            />

            <img
              className="galleryImg"
              alt="portrait 1"
              src="https://topias.kuvat.fi/kuvat/website%20gallery/TVS_5577-Edit-2.jpg?img=medium"
            />
            <img
              className="galleryImg"
              alt="portrait art 1"
              src="https://topias.kuvat.fi/kuvat/website%20gallery/7A2105C6-8A66-427F-BC36-A1F0CDC19179.jpeg?img=medium"
            />
          </div>
          <div className="column">
            <img
              className="galleryImg"
              alt="art2"
              src="https://topias.kuvat.fi/kuvat/website%20gallery/P158.jpg?img=medium"
            />

            <img
              className="galleryImg"
              alt="music2"
              src="https://topias.kuvat.fi/kuvat/website%20gallery/TVS_7700-Edit-2.jpg?img=medium"
            />
            <img
              className="galleryImg"
              alt="art5"
              src="https://topias.kuvat.fi/kuvat/website%20gallery/94F43914-3498-4349-B3A6-165F06444CE9.jpeg?img=medium"
            />

            <img
              className="galleryImg"
              alt="portrait 2"
              src="https://topias.kuvat.fi/kuvat/website%20gallery/TVS_9489.jpg?img=medium"
            />
            <img
              className="galleryImg"
              alt="portrait art 2"
              src="https://topias.kuvat.fi/kuvat/website%20gallery/C5A6DD66-2B9C-48CD-A949-4BE63C412414.jpeg?img=medium"
            />
          </div>
          <div className="column">
            <img
              className="galleryImg"
              alt="art3"
              src="https://topias.kuvat.fi/kuvat/website%20gallery/P163.jpg?img=medium"
            />

            <img
              className="galleryImg"
              alt="climbing1"
              src="https://topias.kuvat.fi/kuvat/website%20gallery/DSC_4199-Edit-2.jpg?img=medium"
            />
            <img
              className="galleryImg"
              alt="art4"
              src="https://topias.kuvat.fi/kuvat/website%20gallery/5E6F6879-3A24-4195-9149-7EFB81FBB13B.jpeg?img=medium"
            />
            <img
              className="galleryImg"
              alt="portrait 3"
              src="https://topias.kuvat.fi/kuvat/website%20gallery/TVS_3262-Edit-Edit.jpg?img=medium"
            />
            <img
              className="galleryImg"
              alt="portrait art 3"
              src="https://topias.kuvat.fi/kuvat/website%20gallery/D000778D-68BB-42D5-AB17-F81795945F0A.jpeg?img=medium"
            />
          </div>
        </div>
      </article>
    );
  }
}

export default Gallery;
