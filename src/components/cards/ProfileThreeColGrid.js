import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings";
import { SectionDescription } from "components/misc/Typography";
import { ReactComponent as LinkedinIcon } from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";
import Picture from "images/michel.jpeg";

const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`mx-auto text-center`;

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`;
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`;
const CardImage = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`w-64 h-64 bg-cover bg-center rounded`}
`;
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-blue-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-blue-800`}
  9
`;

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-blue-100 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`;

export default ({
  heading = "Conheça Nosso Time",
  subheading = "Our Team",
  description = "Somos uma equipe apaixonada de realizadores, que trabalham comprometidos em ajudar sua empresa a ter sucesso.",
  cards = [
    {
      imageSrc: Picture,
      position: "Fundador/Desenvolvedor",
      name: "Michel Carlos",
      links: [
        {
          url: "https://www.linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/micheldpcarlos",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://github.com/alanrdrsantos.png",
      position: "Desenvolvedor Front-End",
      name: "Alan Rodrigues",
      links: [
        {
          url: "www.linkedin.com/in/alan-rdrsantos",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/alanrdrsantos",
          icon: GithubIcon,
        },
      ],
    },
  ],
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading>}
          {description && <Description>{description}</Description>}
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />

              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
                <CardLinks>
                  {card.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      className="link"
                      href={link.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <link.icon className="icon" />
                    </a>
                  ))}
                </CardLinks>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
