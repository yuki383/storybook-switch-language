import { FC, createContext, useContext, useState } from "react";

type Language = "ja" | "en";

export const LanguageContext = createContext<Language>("ja");

export function useLanguage() {
  return useContext(LanguageContext);
}

export const LanguageContextProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("ja");
  return (
    <LanguageContext.Provider value={language}>
      <div>
        <label htmlFor="language-select">Language: </label>
        <select
          name="language"
          id="language-select"
          onChange={(e) => {
            setLanguage(e.target.value as Language);
          }}
        >
          <option value="ja">日本語</option>
          <option value="en">English</option>
        </select>
      </div>
      <div>{children}</div>
    </LanguageContext.Provider>
  );
};
