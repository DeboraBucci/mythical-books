interface RatingsProp {
  rating: number;
  ratingCount: number;
}

const Ratings: React.FC<RatingsProp> = ({ rating, ratingCount }) => {
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
    barFillWidth = `${Math.round((rating / 5) * 100)}%`;
  }

  return (
    <div className="ratings">
      {!rating && (
        <p className="ratings__no-ratings">
          No ratings <i className="fa-solid fa-star-half-stroke"></i>
        </p>
      )}

      {rating && (
        <>
          <span className="ratings__ratings-info">{`${rating} / 5 (${ratingCount})`}</span>
          {starsHandler("ratings__stars-invisible")}
          {starsHandler("ratings__stars-background")}
          {starsHandler("ratings__stars-painted", { width: barFillWidth })}
        </>
      )}
    </div>
  );
};

export default Ratings;
