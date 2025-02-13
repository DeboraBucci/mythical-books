interface StepProps {
  img: any;
  number: number;
  title: string;
  text: any;
}

const Step: React.FC<StepProps> = ({ img, number, title, text }) => {
  const stepTitle = (
    <h3 className="step__heading">
      <span className="step__heading--num">0{number}</span>{" "}
      <span className="step__heading--text">{title}</span>
    </h3>
  );

  const stepText = (
    <div className="step__text">
      {text.map((content: string, i: number) => (
        <p key={`${title}__paragraph--${i}`}>{content}</p>
      ))}
    </div>
  );

  return (
    <li className="step">
      <div
        className={`step step--${number}`}
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="step__content">
          {stepTitle}
          {stepText}
        </div>

        <div className="step__img" data-aos="fade-down" data-aos-delay="400">
          <img src={img} alt={title} height="400px" />
        </div>
      </div>
    </li>
  );
};

export default Step;
