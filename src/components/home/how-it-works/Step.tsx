interface StepProps {
  img: any;
  children: React.ReactNode;
  number: number;
  title: string;
}

const Step: React.FC<StepProps> = ({ img, children, number, title }) => {
  return (
    <li className="step">
      <div className={`step step--${number}`}>
        <div className="step__content">
          <h3 className="step__heading">
            <span className="step__heading--num">0{number}</span>{" "}
            <span className="step__heading--text">{title}</span>
          </h3>

          <div className="step__text">{children}</div>
        </div>

        <div className="step__img">
          <img src={img} alt={title} height="400px" />
        </div>
      </div>
    </li>
  );
};

export default Step;
