import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthorizedUserProvider } from "./contexts/AuthorizedUserContext";
import { NotificationProvider } from "./contexts/NotificationContext";
import { PageLinksProvider } from "./contexts/PageLinksContext";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { store } from "./store/store";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AuthorizedUserProvider>
          <PageLinksProvider>
            <NotificationProvider>
              <App />
            </NotificationProvider>
          </PageLinksProvider>
        </AuthorizedUserProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
