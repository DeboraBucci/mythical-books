import { StepInterface } from "data/how-it-works-data";
import Step from "./Step";

interface Steps {
  steps: StepInterface[];
}

const Steps: React.FC<Steps> = ({ steps }) => {
  return (
    <ul className="works__steps">
      {steps.map((step: any, i: number) => (
        <Step key={step.title} number={i + 1} {...step} />
      ))}
    </ul>
  );
};

export default Steps;
