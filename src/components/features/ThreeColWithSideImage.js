import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import defaultCardImage from "images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import FastIconImage from "images/fast-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;

const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-blue-800 text-lg leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 text-sm text-secondary-100 leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({
  cards = null,
  heading = "Amazing Features",
  description = "Na Torden Web, oferecemos soluções personalizadas que se adaptam às necessidades do seu negócio. Nossos recursos avançados ajudam a otimizar processos, aumentar a produtividade e trazer resultados reais para sua empresa.",
}) => {
  const defaultCards = [
    {
      imageSrc: ShieldIconImage,
      title: "Segurança Avançada",
      description:
        "Garantimos proteção de ponta para todos os dados da sua empresa, com criptografia de alto nível e medidas de segurança rigorosas para que você possa operar com total tranquilidade.",
    },
    {
      imageSrc: SupportIconImage,
      title: "Suporte",
      description:
        "Nosso time de suporte está disponível para oferecer assistência e resolver qualquer dúvida ou problema que possa surgir.",
    },
    {
      imageSrc: CustomizeIconImage,
      title: "Personalização Completa",
      description:
        "A Torden Web oferece soluções totalmente adaptáveis às necessidades específicas do seu negócio, permitindo que você use nossos sofwares conforme as particularidades da sua operação.",
    },
    {
      imageSrc: ReliableIconImage,
      title: "Confiabilidade",
      description:
        "Nossos sites e softwares são robustos e estáveis, garantindo que sua empresa opere sem interrupções, com alta disponibilidade e desempenho contínuo, sempre quando você mais precisar.",
    },
    {
      imageSrc: FastIconImage,
      title: "Velocidade",
      description:
        "Com tecnologia de ponta, os softwares e sites produzidos pela Torden Web oferecem uma experiência rápida e eficiente, otimizada para agilizar os processos da sua empresa e aumentar a produtividade.",
    },
    {
      imageSrc: SimpleIconImage,
      title: "Facilidade de Uso",
      description:
        "O sites e softwares são desenvolvidos com uma interface intuitiva, simples e fácil de usar, para que sua empresa possa se adaptar rapidamente e começar a aproveitar os benefícios sem complicações.",
    },
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description ||
                    "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
