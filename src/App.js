import "./App.css";
import HomePage from "./components/Home";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";

const theme = {
  mainColor: "white",
  backgroundColor: "#2A2D3E",
  secondaryColor: "#DEDEDE",
  lightColor: "#5E5E5E",
};
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <HomePage></HomePage>
      </ThemeProvider>
    </div>
  );
}

export default App;
