import React from "react";
import "./App.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Container,
  IconButton,
  ThemeProvider,
  CssBaseline,
  Box,
  Tooltip,
} from "@mui/material";
import Home from "./pages/Home";
import Riddles from "./pages/Riddles";
import Profile from "./pages/Profile";
import { customTheme } from "./themes";
import {
  HomeSharp,
  VideogameAssetSharp,
  PersonSharp,
} from "@mui/icons-material";
import Demo from "./pages/Demo";
import Riddle from "./pages/Riddle";
import Part from "./pages/Part";
import { SnackbarProvider } from "./SnackbarContext"; // Import SnackbarProvider

const App: React.FC = () => {
  const location = useLocation();

  const getTheme = (path: string) => {
    switch (path) {
      case "/about":
        return customTheme;
      case "/contact":
        return customTheme;
      default:
        return customTheme;
    }
  };

  const currentTheme = getTheme(location.pathname);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <SnackbarProvider>
        {/* Wrap the app with SnackbarProvider */}
        <div className="App">
          <AppBar position="static" sx={{ height: 128 }}>
            {" "}
            {/* Doubled the height */}
            <Toolbar sx={{ height: "100%", padding: "0 24px" }}>
              {" "}
              {/* Adjusted padding */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  alignContent: "center",
                  flexGrow: 1,
                }}
              >
                <img
                  src="https://placehold.co/32x32"
                  alt="Logo"
                  style={{ height: 80, marginRight: 32 }}
                />{" "}
                {/* Doubled logo size */}
              </Box>
              <Tooltip title="Home">
                <IconButton
                  color="inherit"
                  href="/"
                  sx={{ transform: "scale(2)", margin: 4 }}
                >
                  {" "}
                  {/* Doubled icon size */}
                  <HomeSharp />
                </IconButton>
              </Tooltip>
              <Tooltip title="Riddles">
                <IconButton
                  color="inherit"
                  href="/riddles"
                  sx={{ transform: "scale(2)", margin: 4 }}
                >
                  {" "}
                  {/* Doubled icon size */}
                  <VideogameAssetSharp />
                </IconButton>
              </Tooltip>
              <Tooltip title="Profile">
                <IconButton
                  color="inherit"
                  href="/profile"
                  sx={{ transform: "scale(2)", margin: 4 }}
                >
                  {" "}
                  {/* Doubled icon size */}
                  <PersonSharp />
                </IconButton>
              </Tooltip>
            </Toolbar>
          </AppBar>
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/riddles" element={<Riddles />} />
              <Route path="/riddle" element={<Riddle />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/part/:part" element={<Part />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Container>
        </div>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
