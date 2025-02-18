import BooksProvider from "context/BooksProvider";
import CartProvider from "context/CartProvider";
import LanguageProvider from "context/LanguageProvider";
import ThemeProvider from "context/ThemeProvider";

interface ContextProviderProps {
  children: React.ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BooksProvider>
          <CartProvider>
            <>{children}</>
          </CartProvider>
        </BooksProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default ContextProvider;
