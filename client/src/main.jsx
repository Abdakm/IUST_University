import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { UserProvider } from "./contexts/userContext";
import { LanguageProvider } from "./contexts/languageContext";

//Pages
import App from "./App.jsx";
import React, { Suspense } from "react";

// React-router-dom
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

// Redux
import { store, persistor } from "./app/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Login, Account, Doctor, FileDownloadPage, Page, Materials, Doctors, Page404 } from "./components/index";
import Cookies from "js-cookie";

if (!Cookies.get("language")) {
  Cookies.set("language", 'EN');
}

const ProtectedRoute = ({ element }) => {
  const username = Cookies.get("username");
  return username ? element : <Navigate to="/" />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Page404 />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/account",
    element: <ProtectedRoute element={<Account />} />,
  },
  {
    path: "/doctor/:id",
    element: <ProtectedRoute element={<Doctor />} />,
  },
  {
    path: "/course/:id",
    element: <ProtectedRoute element={<FileDownloadPage />} />,
  },
  {
    path: "/registration",
    element: <ProtectedRoute element={<Page />} />,
  },
  {
    path: "/materials",
    element: <Materials />,
  },
  {
    path: "/doctors",
    element: <Doctors />,
  },
  {
    path: "/materials/:id",
    element: <Materials />,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {/* here I can put the context varibels */}
      <LanguageProvider>
        <UserProvider>
          <PersistGate loading={"...Loading"} persistor={persistor}>
            {/*<Suspense fallback={<div>Loading...</div>}>*/}
              <RouterProvider router={router} />
            {/*</Suspense>*/}
          </PersistGate>
        </UserProvider>
      </LanguageProvider>
    </Provider>
  </StrictMode>
);
