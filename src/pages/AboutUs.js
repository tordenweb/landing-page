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

import TecnologicImge from "images/tecnologia.jpg";
import cpuIcon from "images/cpu.svg";
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
          description="Somos uma empresa especializada no desenvolvimento de
                softwares e sites personalizados, criados para atender exatamente às
                necessidades de cada cliente. Com uma abordagem centrada no
                cliente, a Torden Web trabalha lado a lado com as empresas,
                oferecendo soluções tecnológicas sob medida que tornam processos
                mais ágeis e eficientes. A missão da empresa é proporcionar
                ferramentas inovadoras e práticas, sempre acessíveis e fáceis de
                usar, para que os clientes possam ter o controle total de suas
                operações na palma de suas mãos. "
          imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        />
        <MainFeature1
          subheading={<Subheading>Nossa Visão</Subheading>}
          heading="Desafiando o Comum, Criando o Extraordinário."
          description="Na Torden Web, temos como objetivo revolucionar o setor de tecnologia com soluções digitais inovadoras e disruptivas. Acreditamos que a verdadeira transformação vem de ir além do convencional, oferecendo experiências que unem design de ponta, funcionalidade e inovação. Estamos sempre em busca das últimas tendências e tecnologias para entregar projetos que não apenas atendem às necessidades dos nossos clientes, mas também os posicionam como líderes em seus mercados. Nossa missão é quebrar barreiras, criar impacto e moldar o futuro digital."
          imageSrc={TecnologicImge}
          textOnLeft={false}
        />
        <Features
          subheading={<Subheading>Nossos Valores</Subheading>}
          heading="Nós Seguimos Estes"
          description="Realmente acreditamos que nossos valores são fundamentais para o nosso sucesso. Estamos sempre prontos para ajudar."
          cards={[
            {
              imageSrc: cpuIcon,
              title: "Inovação Tecnológica",
              description:
                "Na Torden Web, buscamos constantemente soluções inovadoras que transformam o digital e impulsionam o sucesso dos nossos clientes, foco no futuro.",
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
