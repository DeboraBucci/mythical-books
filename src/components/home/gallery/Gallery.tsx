import { useContext } from "react";
import { Link } from "react-router-dom";
import LanguageContext from "../../../context/language-context";
import GalleryDecoration from "./GalleryDecoration";
import { titles } from "data/general-data";
import { galleryTxt, galleryImages } from "data/gallery-section-data";

const Gallery = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section className="gallery" id="gallery">
      <div className="gallery__text-container">
        <div className="gallery__heading section-heading">
          <h2>{titles[language].gallery.title}</h2>
        </div>

        <div className="gallery__paragraphs">
          {galleryTxt[language].map((text) => (
            <p>{text}</p>
          ))}
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
        {galleryImages.map((obj, i) => (
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
