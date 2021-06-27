import "./App.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";
import WatchedList from "./components/Watchlist";
import WatchedMovies from "./components/WatchedMovies";
import AddMovieInput from "./components/AddMovieInput";

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
        <div class="container">
          <AddMovieInput />
          <WatchedList></WatchedList>
          <WatchedMovies></WatchedMovies>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
