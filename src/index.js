import { StrictMode } from "react";
import ReactDOM from "react-dom";
import GlobalProvider from "context/GlobalContext";
import Theme from "theme/theme";
import App from "./app";
import "reset-css";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <StrictMode>
    <GlobalProvider>
      <Theme>
        <App />
      </Theme>
    </GlobalProvider>
  </StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
