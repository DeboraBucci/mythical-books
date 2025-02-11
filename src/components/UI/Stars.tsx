import styled from "styled-components";

interface StarsProps {
  starsNum: number;
}

const Stars: React.FC<StarsProps> = ({ starsNum }) => {
  const starsArr = Array(5).fill(0);
  const starDynamicClass = {
    width: starsNum * 20, // 1 (star) * 20 = 20%, 2 (stars) * 20 = 40%, ... 5 (stars) * 20 = 100%.
  };

  return (
    <StarDiv {...starDynamicClass}>
      <div className="filled">
        {starsArr.map(() => (
          <i className="fa-solid fa-star"></i>
        ))}
      </div>
      {starsArr.map(() => (
        <i className="fa-regular fa-star"></i>
      ))}
    </StarDiv>
  );
};

export default Stars;

// STYLES:
interface StarDivProps {
  width?: number;
}

const StarDiv = styled.div<StarDivProps>`
  position: relative;
  color: goldenrod;
  width: fit-content;
  height: fit-content;
  font-size: 2rem;

  .filled {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    white-space: nowrap;
    width: ${(props) => (props.width ? `${props.width}%` : "100%")};
  }
`;
