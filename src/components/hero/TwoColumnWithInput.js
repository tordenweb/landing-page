import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";

//import Header from "../headers/light.js";

import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import DesignIllustration from "../../images/desktophome3min2.jpeg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto pt-10`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-blue-800 leading-tight`;
//const Subheading = tw.span`uppercase tracking-widest font-bold text-blue-500`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

const Actions = styled.div`
  ${tw`relative max-w-md  lg:mx-0`}
`;

const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;

export default () => {
  return (
    <>
      {/*<Header roundedHeaderButton={roundedHeaderButton} />*/}
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>
              <span tw="text-blue-800 tracking-wide text-4xl font-black">
                Torden Web Solutions
              </span>
            </Heading>
            <Actions>
              <Paragraph>
                Oferecemos soluções digitais sob medida para impulsionar o seu
                negócio. Desenvolvemos softwares personalizados e sites
                totalmente otimizados, garantindo que sua empresa tenha a
                agilidade e eficiência necessárias para se destacar no mercado.
                Com foco na simplificação de processos e potencialização de
                resultados, nossas tecnologias são criadas para atender às suas
                necessidades específicas, sempre com a praticidade e inovação
                que você merece.
              </Paragraph>
            </Actions>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img
                tw="min-w-0 w-full max-w-lg xl:max-w-3xl"
                className="min-w-0 w-full max-w-lg xl:max-w-2xl"
                src={DesignIllustration}
                alt="Design Illustration"
              />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <DecoratorBlob1 />
      </Container>
    </>
  );
};
