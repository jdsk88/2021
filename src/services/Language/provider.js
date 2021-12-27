import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { IntlProvider } from "react-intl";

const loadLanguage = (language) => {
  switch (language) {
    case "pl":
      return import("services/Language/translations/pl.json");
    case "ru":
      return import("services/Language/translations/ru.json");
    case "de":
      return import("services/Language/translations/de.json");
    default:
      return import("services/Language/translations/en.json");
  }
};

const LanguageProvider = ({ children }) => {
  const configuration = useSelector((state) => state.configuration);
  const [messages, setMessages] = useState();

  useEffect(() => {
    loadLanguage(configuration.language).then((lang) => {
      setMessages(lang.default);
    });
  }, [configuration.language]);

  return (
    <>
      {messages && (
        <IntlProvider
          locale={configuration.language}
          defaultLocale="en"
          messages={messages}
        >
          {children}
        </IntlProvider>
      )}
    </>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node,
};

export default LanguageProvider;
