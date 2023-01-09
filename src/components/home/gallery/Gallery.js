import React from "react";
import { galleryArr } from "../../../data";

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery__heading">
        <h2>Our gallery</h2>
        <p>Enjoy our member's pictures!</p>
      </div>
      <div className="gallery__imgs">
        {galleryArr.map((obj, i) => (
          <div className={`gallery__img-box gallery__img-box--${i + 1}`}>
            <img src={obj.img} alt={obj.alt} height="200px" width="200px" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
