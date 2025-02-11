interface TextErrorProps {
  children?: React.ReactNode;
}

const TextError: React.FC<TextErrorProps> = ({ children }) => (
  <p
    style={{
      color: "#ee6a6a",
      marginTop: "1rem",
      fontSize: "1.6rem",
    }}
    className="first-letter-uppercase"
  >
    {children}.
  </p>
);

export default TextError;
