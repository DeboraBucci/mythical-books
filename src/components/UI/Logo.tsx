import styled from "styled-components";
import logo from "../../assets/logo.png";
import CustomLink from "./CustomLink";

interface LogoProps {
  title: boolean;
  size?: string;
  att: string;
  linkType?: string;
}

export const Logo: React.FC<LogoProps> = ({ title, size, att, linkType }) => (
  <LogoDiv>
    <div
      className="container"
      style={{
        width: `${size === "big" ? 70 : 50}px`,
        height: `${size === "big" ? 70 : 50}px`,
      }}
    >
      <CustomLink att={att} linkType={linkType}>
        <img
          src={logo}
          alt="logo"
          style={{
            width: `${size === "big" ? 65 : 45}px`,
            height: `${size === "big" ? 65 : 45}px`,
          }}
        />
      </CustomLink>
    </div>

    {title && (
      <>
        <h2>Mythical Books</h2>
        <Panel className="panel-1" />
        <Panel className="panel-2" />
        <Panel className="panel-3" />
        <Panel className="panel-4" />
        <Panel className="panel-5" />
      </>
    )}
  </LogoDiv>
);

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-right: auto;
  padding-left: 5rem;
  color: var(--color-white);
  font-size: 1.6rem;
  font-family: "Quintessential", cursive;

  .container {
    transition: all 0.2s;
    background-color: var(--color-white);
    border-radius: 50%;
    overflow: hidden;
  }

  & img {
    transition: all 0.2s;
  }
`;

const Panel = styled.div`
  position: absolute;
  z-index: -1;
  height: 100%;
  background-color: var(--color-purple);
  transition: all 0.2s;

  &.panel-1 {
    transform: skewX(35deg);
    opacity: 0.1;
    width: 30rem;
    animation: var(----appear-left-animation) 0.3s linear;
  }

  &.panel-2 {
    transform: skewX(-10deg);
    opacity: 0.2;
    width: 31rem;
    animation: var(--appear-right-animation) 0.3s linear;
  }

  &.panel-3 {
    transform: skewX(20deg);
    opacity: 0.3;
    width: 30rem;
    animation: var(--appear-left-animation) 0.5s linear;
  }

  &.panel-4 {
    transform: skewX(-30deg);
    opacity: 0.2;
    width: 28rem;
    animation: var(--appear-right-animation) 0.5s linear;
  }
`;
