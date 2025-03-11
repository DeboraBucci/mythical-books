import AuthProvider from "context/AuthProvider";
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
        <AuthProvider>
          <BooksProvider>
            <CartProvider>
              <>{children}</>
            </CartProvider>
          </BooksProvider>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default ContextProvider;
