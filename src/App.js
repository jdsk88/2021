import Routes from "routes";
import LanguageProvider from "services/Language/provider";
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  console.log(
    `%c
_______________________________________________________
█                                                     █
█   ██████ ████████ ██████ ██████ ███████       =█=   █
█     ██   ██         ██   ██     ██    ██     =███=  █
█     ██   ████████   ██   ████   ███████     =█ █ █= █
█     ██         ██   ██   ██     ██    ██     =███=  █
█   ██████ ████████   ██   ██████ ██    ██      =█=   █  
█_____________________________________________________█
 
 iSter interactive studio inc. ©️          www.ister.pl
`,
    "font-family:monospace;color:#1976d2;font-size:12px;color:lightgreen,border:1px solid green"
  );
}
function App() {
  return (
    <LanguageProvider>
      <Routes />
    </LanguageProvider>
  );
}
export default App;
