import React, { useMemo } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/homePage/HomePage.js";
import LoginPage from "./Pages/loginPage/LoginPage.js";
import ProfilePage from "./Pages/profilePage/ProfilePage.js";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme.js";

function App() {
  const mode = useSelector((state) => state.mode);
  // creating the theme and whenever the mode change it create a them based on that
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        {/* -------->  to react our css <--------- */}
        <CssBaseline />
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route
            exact
            path="/home"
            element={isAuth ? <HomePage /> : <Navigate to="/" />}
          />
          <Route
            exact
            path="/profile/:userId"
            element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
          />
          {/* <Route exact path="/login" element={< />} /> */}
        </Routes>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
