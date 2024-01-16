import { LanguageContextProvider } from "./languageContext";
import { I18nComponent } from "./I18nComponent";

function App() {
  return (
    <LanguageContextProvider>
      <I18nComponent />
    </LanguageContextProvider>
  );
}

export default App;
