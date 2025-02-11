import { useContext } from "react";
import { Link } from "react-router-dom";
import LanguageContext from "../../../context/language-context";
import { galleryArr } from "../../../data";
import GalleryDecoration from "./GalleryDecoration";
import { titles } from "data/general-data";

const Gallery = () => {
  const languageCtx = useContext(LanguageContext);

  return (
    <section className="gallery" id="gallery">
      <div className="gallery__text-container">
        <div className="gallery__heading section-heading">
          <h2>{titles[languageCtx.language].gallery.title}</h2>
        </div>

        <div className="gallery__paragraphs">
          <p>
            This is the collection of memories of our precious members. In here,
            you can see the amazing adventures everyone enrolled on.
          </p>

          <p>
            By subscribing all the features of the gallery are made available
            for you, such as uploading pictures, saving them, and more!
          </p>

          <p>To see the full gallery click here.</p>
        </div>

        <div className="gallery__cta">
          <Link className="gallery__btn gallery__btn--1" to="register">
            Register
          </Link>
          <a className="gallery__btn gallery__btn--2" href="#subscription">
            Subscribe
          </a>
        </div>
      </div>

      <div className="gallery__imgs">
        {galleryArr.map((obj, i) => (
          <div
            key={Math.random().toString()}
            className={`gallery__img-box gallery__img-box--${i + 1}`}
          >
            <img src={obj.img} alt={obj.alt} height="200px" width="200px" />
          </div>
        ))}
      </div>

      <GalleryDecoration />
    </section>
  );
};

export default Gallery;
