import { useLanguage } from "./languageContext";
import translation from "./translation.json";

export const I18nComponent = () => {
  const language = useLanguage();
  const t = translation[language];

  return (
    <div>
      <h1>{t.title}</h1>
      <p>{t.content}</p>
    </div>
  );
};
