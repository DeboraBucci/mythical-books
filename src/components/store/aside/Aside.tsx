import fallback from "../../../assets/fallback-book-image.webp";

const Aside = () => {
  return (
    <aside className="store__aside relevant">
      <div className="relevant__ad">
        <p>GET 50% OFF ON YOUR FIRST CHEST</p>
      </div>
      <div>
        <h3>BEST OF THE WEEK</h3>

        <ul className="relevant__list">
          <li className="relevant__item">
            <img src={fallback} alt="fallback" width={100} />
            <h4>Book 1</h4>
            <p>Price: $20</p>
            <p>ratings: 5</p>

            <button>See more</button>
          </li>

          <li className="relevant__item">
            <img src={fallback} alt="fallback" width={100} />
            <h4>Book 2</h4>
            <p>Price: $20</p>
            <p>ratings: 5</p>

            <button>See more</button>
          </li>

          <li className="relevant__item">
            <img src={fallback} alt="fallback" width={100} />
            <h4>Book 3</h4>
            <p>Price: $20</p>
            <p>ratings: 5</p>

            <button>See more</button>
          </li>

          <li className="relevant__item">
            <img src={fallback} alt="fallback" width={100} />
            <h4>Book 4</h4>
            <p>Price: $20</p>
            <p>ratings: 5</p>

            <button>See more</button>
          </li>
        </ul>
      </div>
    </aside>
  );
};
export default Aside;
