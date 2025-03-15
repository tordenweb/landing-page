import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import About from "components/about/ThreePlans.js";
//import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStarted";
import Footer from "components/footers/FiveColumnWithBackground.js";
import heroScreenshotImageSrc from "images/solution.webp";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-blue-500`;
  const HighlightedText = tw.span`text-blue-500`;
  const HighlightedText2 = tw.p`text-blue-500 text-4xl`;

  return (
    <>
      <Header />

      <AnimationRevealPage>
        <Hero />
        <About
          subheading={<Subheading>Quem somos</Subheading>}
          heading={
            <>
              Torden Web{" "}
              <HighlightedText2>
                Tecnologia que Conecta, Soluções que Transformam
              </HighlightedText2>
            </>
          }
        />
        <Features
          heading={
            <>
              Soluções Sob Medida{" "}
              <HighlightedText2>
                Explore os Recursos da Torden Web
              </HighlightedText2>
            </>
          }
        />
        <MainFeature
          imageSrc={heroScreenshotImageSrc}
          imageBorder={true}
          imageDecoratorBlob={true}
        />
        <MainFeature2
          heading={
            <>
              Integridade, Inovação e Excelência
              <HighlightedText2> Os Valores da Torden Web</HighlightedText2>
            </>
          }
          showDecoratorBlob={false}
        />
        {/* <Testimonial
          subheading={<Subheading>Depoimentos</Subheading>}
          heading={
            <>
              Resultados Reais:
              <HighlightedText> O Que Nossos Clientes Dizem</HighlightedText>
            </>
          }
        /> */}
        <FAQ
          subheading={<Subheading>Perguntas Frequentes</Subheading>}
          heading={
            <>
              Você tem <HighlightedText>Perguntas?</HighlightedText>
            </>
          }
        />
        <GetStarted />
        <Footer />
      </AnimationRevealPage>
    </>
  );
};
