import Stars from "./Stars";

interface RatingsProp {
  averageRating: number;
  ratingCount: number;
}

const Ratings: React.FC<RatingsProp> = ({ averageRating, ratingCount }) => {
  const starsHandler = (className: string, style?: object) => (
    <div className={className} style={style}>
      <i className="fa-solid fa-star ratings__star"></i>
      <i className="fa-solid fa-star ratings__star"></i>
      <i className="fa-solid fa-star ratings__star"></i>
      <i className="fa-solid fa-star ratings__star"></i>
      <i className="fa-solid fa-star ratings__star"></i>
    </div>
  );

  let barFillWidth = "0%";
  if (5 > 0) {
    barFillWidth = `${Math.round((averageRating / 5) * 100)}%`;
  }

  return (
    <div className="ratings">
      {!averageRating && (
        <p className="ratings__no-ratings">
          No ratings <i className="fa-solid fa-star-half-stroke"></i>
        </p>
      )}

      {averageRating && (
        <>
          <span className="ratings__ratings-info">{`${averageRating} / 5 (${ratingCount})`}</span>
          <Stars starsNum={averageRating} />
        </>
      )}
    </div>
  );
};

export default Ratings;
