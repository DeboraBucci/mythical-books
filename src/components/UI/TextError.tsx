import styled from "styled-components";

interface TextErrorProps {
  children?: React.ReactNode;
}

const TextError: React.FC<TextErrorProps> = ({ children }) => (
  <Text className="first-letter-uppercase">{children}.</Text>
);

export default TextError;

const Text = styled.p`
  color: var(--color-error);
  margin-top: 1rem;
  font-size: 1.6rem;
`;
