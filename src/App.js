import "./App.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";
import WatchedList from "./components/Watchlist";
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
        <WatchedList></WatchedList>
        <WatchedMovies></WatchedMovies>
      </ThemeProvider>
    </div>
  );
}

export default App;
