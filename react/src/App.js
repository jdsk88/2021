import React, { useEffect } from "react";
import Routes from "routes";
import LanguageProvider from "services/Language/provider";
import { useDispatch } from "react-redux";
import { CRYPTO_ALL } from "store/actions";
import CryptoServices from "services/api/crypto";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    CryptoServices.getAllData(dispatch);
    dispatch({ type: CRYPTO_ALL });
  }, [dispatch]);

  return (
    <LanguageProvider>
      <Routes />
    </LanguageProvider>
  );
}
export default App;
