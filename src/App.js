import "./App.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";
import WatchedMovies from "./components/WatchedMovies";

const theme = {
  mainColor: "white",
  backgroundColor: "#171818",
  secondaryColor: "#797979",
};
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <WatchedMovies></WatchedMovies>
      </ThemeProvider>
    </div>
  );
}

export default App;
