import React from "react";
import GlobalStyles from "styles/GlobalStyles";
import LandingPage from "../src/pages/LandingPage";
import ContactUs from "pages/ContactUs";
import { css } from "styled-components/macro"; //eslint-disable-line
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/contato" element={<ContactUs />}></Route>
        </Routes>
      </Router>
    </>
  );
}
