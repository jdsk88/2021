import { FormControl, MenuItem, Select } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_LANGUAGE } from "store/actions.js";

const lang = ["pl", "ru", "de", "en"];

export const LanguageSelector = () => {
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
    <FormControl>
      <Select
        variant="outlined"
        size="small"
        id="language-select"
        value={language}
        onChange={(e) => handleSetLanguage(e)}
      >
        {lang.map((l, i) => (
          <MenuItem key={i} value={l}>
            {l}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
