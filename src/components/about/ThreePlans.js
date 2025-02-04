import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";

const HeaderContainer = tw.div`mt-10 w-full flex flex-col items-center`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

export default ({
  subheading = "Quem somos",
  heading = "Flexible Plans.",
  description = "Somos uma empresa inovadora no ramo da tecnologia, especializada em soluções digitais que atendem às necessidades do mercado atual. Com uma equipe de especialistas em desenvolvimento de software, design de interfaces e otimização de processos. Nossa missão é oferecer soluções tecnológicas de alta performance que transformam negócios e facilitam a vida de nossos clientes, proporcionando uma experiência única em todos os pontos de contato. Queremos ser o parceiro confiável para empresas que buscam inovação, eficiência e segurança em seus processos digitais.",
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          {description && <Description>{description}</Description>}
        </HeaderContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
