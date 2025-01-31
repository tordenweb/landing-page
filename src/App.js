import React from "react";
import GlobalStyles from "styles/GlobalStyles";
import LandingPage from "../src/pages/LandingPage";
import ContactUs from "pages/ContactUs";
import AboutUs from "pages/AboutUs";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useLayoutEffect } from "react";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Wrapper>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/contato" element={<ContactUs />}></Route>
            <Route path="/saibamais" element={<AboutUs />}></Route>
          </Routes>
        </Wrapper>
      </Router>
    </>
  );
}
