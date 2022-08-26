import React, { Fragment } from "react";
import Appbar from "./common/Appbar";
import Home from "./pages/Home/Home";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ventures from "./pages/Ventures/Ventures";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Appbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/ventures" element={<Ventures />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
