interface SubscriptionCardProps {
  className: string;
  name: string;
  icon: string;
  yearlyPrice: number;
  monthlyPrice: number;
  comment: string;
  delivery?: string;
  discounts: string;
  chest?: string | boolean;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  className,
  name,
  icon,
  yearlyPrice,
  monthlyPrice,
  comment,
  delivery,
  discounts,
  chest,
}) => {
  return (
    <div className={`subscription-card ${className}`}>
      <h3 className="subscription-card__title">
        {name} <i className={`${icon}`}></i>
      </h3>

      <div className="subscription-card__info">
        <div className="subscription-card__price">
          <p className="subscription-card__price--month">
            <span className="subscription-card__price--faded">$ </span>
            <span className="subscription-card__price--number">
              {monthlyPrice}
            </span>
            <span className="subscription-card__price--faded">/month</span>
          </p>
          <div className="subscription-card__price--year-box">
            <p className="subscription-card__price--scratched">
              $ {Math.round(monthlyPrice * 12)}
            </p>
            <p className="subscription-card__price--year">
              <span className="subscription-card__price--faded">$</span>
              <span className="subscription-card__price--number">
                {yearlyPrice}
              </span>
              <span className="subscription-card__price--faded">/year</span>
            </p>
            <span className="subscription-card__price--off">
              {Math.round(((monthlyPrice * 12 - yearlyPrice) / 100) * 60)}% OFF
            </span>
          </div>
        </div>
        <p className="subscription-card__comment">{comment}</p>
        <ul className="subscription-card__list">
          <li>
            <i className={`fas fa-${delivery ? "check" : "times"}`}></i>{" "}
            {delivery ? delivery : "Free Delivery"}
          </li>
          <li>
            <i className={`fas fa-${discounts ? "check" : "times"}`}></i>{" "}
            {discounts ? discounts : "Special Discounts"}
          </li>
          <li>
            <i className={`fas fa-${chest ? "check" : "times"}`}></i>{" "}
            {chest ? chest : "No Chest"}
          </li>
          <li>
            <i className="fas fa-check"></i> Mythical Coins
          </li>
          <li>
            <i className="fas fa-check"></i> 24/7 Exclusive User Support
          </li>
        </ul>
        <button className="subscription-card__button">Upgrade</button>
      </div>
    </div>
  );
};

export default SubscriptionCard;
