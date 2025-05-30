import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";

export default () => {
  return (
    <>
      <Header />
      <AnimationRevealPage>
        <ContactUsForm />
        <Footer />
      </AnimationRevealPage>
    </>
  );
};
