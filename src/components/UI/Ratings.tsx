import Stars from "./Stars";

interface RatingsProp {
  averageRating: number;
  ratingCount: number;
}

const Ratings: React.FC<RatingsProp> = ({ averageRating, ratingCount }) => {
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
