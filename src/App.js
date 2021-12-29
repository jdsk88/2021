import Routes from "routes";
import LanguageProvider from "services/Language/provider";

function App() {
  return (
    <LanguageProvider>
      <Routes />
    </LanguageProvider>
  );
}
export default App;
