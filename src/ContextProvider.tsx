import BooksProvider from "context/BooksProvider";
import LanguageProvider from "context/LanguageProvider";
import ThemeProvider from "context/ThemeProvider";

interface ContextProviderProps {
  children: React.ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BooksProvider>{children}</BooksProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default ContextProvider;
