// Packages
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

// Styles
import GlobalStyle from "./styles/global";

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
