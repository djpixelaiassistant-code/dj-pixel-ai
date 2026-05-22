import {
  createContext,
  useContext,
  useState,
  useEffect
} from "react";

/* =========================================
   CONTEXT
========================================= */

const LanguageContext =
createContext();

/* =========================================
   PROVIDER
========================================= */

export function LanguageProvider({
  children
}){

  /* =========================================
     LOAD SAVED LANGUAGE
  ========================================= */

  const [language,setLanguage] =
  useState(()=>{

    return (

      localStorage.getItem(
        "websiteLanguage"
      )

      ||

      "English"

    );

  });

  /* =========================================
     SAVE LANGUAGE
  ========================================= */

  useEffect(()=>{

    localStorage.setItem(

      "websiteLanguage",

      language

    );

  },[language]);

  /* =========================================
     PROVIDER
  ========================================= */

  return(

    <LanguageContext.Provider

      value={{

        language,

        setLanguage

      }}
    >

      {children}

    </LanguageContext.Provider>
  );
}

/* =========================================
   CUSTOM HOOK
========================================= */

export function useLanguage(){

  return useContext(
    LanguageContext
  );
}