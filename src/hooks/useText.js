import {
  useLanguage
} from "../context/LanguageContext";

import languageData
from "../translations/language";

export default function useText(){

  const {
    language
  } = useLanguage();

  /* =========================
     CURRENT LANGUAGE
  ========================= */

  const currentLanguage =

    languageData[language]

    ||

    languageData.English;

  /* =========================
     MERGE ENGLISH FALLBACK
  ========================= */

  const text = {

    ...languageData.English,

    ...currentLanguage

  };

  return text;
}