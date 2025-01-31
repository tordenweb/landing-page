import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <>
      <Header />
      <AnimationRevealPage>
        <MainFeature1
          subheading={<Subheading>Sobre a Torden Web</Subheading>}
          heading="Onde a Criatividade Encontra a Tecnologia"
          description="A Torden Web é uma empresa de design moderna, especializada em criar experiências digitais únicas e impactantes. Nosso time de designers e desenvolvedores trabalha em parceria com os clientes para transformar ideias em projetos personalizados, desde sites responsivos até soluções completas de branding. Acreditamos que um bom design vai além da estética, sendo essencial para conectar empresas ao seu público de forma funcional e emocional. Estamos sempre atualizados com as últimas tendências para entregar resultados inovadores e de impacto."
          buttonRounded={false}
          primaryButtonText="See Portfolio"
          imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        />
        <MainFeature1
          subheading={<Subheading>Nossa Visão</Subheading>}
          heading="Desafiando o Comum, Criando o Extraordinário."
          description="Na Torden Web, temos como objetivo revolucionar o setor de tecnologia com soluções digitais inovadoras e disruptivas. Acreditamos que a verdadeira transformação vem de ir além do convencional, oferecendo experiências que unem design de ponta, funcionalidade e inovação. Estamos sempre em busca das últimas tendências e tecnologias para entregar projetos que não apenas atendem às necessidades dos nossos clientes, mas também os posicionam como líderes em seus mercados. Nossa missão é quebrar barreiras, criar impacto e moldar o futuro digital."
          buttonRounded={false}
          primaryButtonText="Contact Us"
          imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
          textOnLeft={false}
        />
        <Features
          subheading={<Subheading>Nossos Valores</Subheading>}
          heading="Nós Seguimos Estes"
          description="Realmente acreditamos que nossos valores são fundamentais para o nosso sucesso. Estamos sempre prontos para ajudar."
          cards={[
            {
              imageSrc: SupportIconImage,
              title: "Suporte 24/7",
              description:
                "Na Torden Web, oferecemos suporte 24/7 para garantir que nossos clientes tenham assistência a qualquer momento, resolvendo problemas rapidamente e mantendo uma experiência digital tranquila.",
            },
            {
              imageSrc: ShieldIconImage,
              title: "Times Fortes",
              description:
                "Nosso time na Torden Web é formado por profissionais altamente capacitados, trabalhando juntos para entregar soluções criativas e eficientes, sempre com foco na excelência.",
            },
            {
              imageSrc: CustomerLoveIconImage,
              title: "Satisfação do Cliente",
              description:
                "A satisfação do cliente é nossa prioridade. Buscamos sempre superar as expectativas, entregando resultados que encantam e geram valor real para nossos clientes.",
            },
          ]}
          linkText=""
        />
        <TeamCardGrid subheading={<Subheading>Nossa Equipe</Subheading>} />
        <Footer />
      </AnimationRevealPage>
    </>
  );
};
