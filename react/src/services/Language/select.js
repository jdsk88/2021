import { FormControl, NativeSelect } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_LANGUAGE } from "store/actions.js";

const langs = [
  { cc: "pl", full: "Poslki", ico: "๐ต๐ฑ" },
  { cc: "ru", full: "Pัััะบะธะน", ico: "๐ท๐บ" },
  { cc: "de", full: "Deutsch", ico: "๐ฉ๐ช" },
  { cc: "en", full: "English", ico: "๐ฌ๐ง" },
];

export const LanguageSelector = ({ color, fullWidth }) => {
  const configuration = useSelector((state) => state.configuration);
  const dispatch = useDispatch();

  const [language, setLanguage] = useState(configuration.language);

  const handleSetLanguage = (event) => {
    setLanguage(event.target.value);
    dispatch({ type: SET_LANGUAGE, language: event.target.value });
    console.log(event.target.value);
  };

  useEffect(() => {
    setLanguage(configuration.language);
  }, [configuration]);
  return (
    <FormControl fullWidth>
      <NativeSelect
        id="language-select"
        value={language}
        onChange={(e) => handleSetLanguage(e)}
        style={{ color: color, height: "100%" }}
      >
        {langs.map((lang, i) => (
          <option
            style={{ color: "black", textAlign: "center" }}
            key={lang.cc + i}
            value={lang.cc}
          >
            {fullWidth ? `${lang.ico} ${lang.full}` : `${lang.ico} ${lang.cc}`}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};
