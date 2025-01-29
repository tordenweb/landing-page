import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import About from "components/about/ThreePlans.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStarted";
import Footer from "components/footers/FiveColumnWithBackground.js";
import heroScreenshotImageSrc from "images/hero-screenshot-1.png";
import prototypeIllustrationImageSrc from "images/prototype-illustration.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-blue-500`;
  const HighlightedText = tw.span`text-blue-500`;
  const HighlightedText2 = tw.p`text-blue-500 text-4xl`;

  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      <About
        subheading={<Subheading>Quem somos</Subheading>}
        heading={
          <>
            Torden Web:{" "}
            <HighlightedText2>
              Tecnologia que Conecta, Soluções que Transformam.
            </HighlightedText2>
          </>
        }
      />
      <Features
        subheading={<Subheading>Recursos</Subheading>}
        heading={
          <>
            Soluções Sob Medida:{" "}
            <HighlightedText2>
              Explore os Recursos da Torden Web.
            </HighlightedText2>
          </>
        }
      />
      <MainFeature
        subheading={<Subheading>Trabalho de Qualidade</Subheading>}
        imageSrc={heroScreenshotImageSrc}
        imageBorder={true}
        imageDecoratorBlob={true}
      />
      <MainFeature2
        subheading={<Subheading>Valores</Subheading>}
        heading={
          <>
            Integridade, Inovação e Excelência:
            <HighlightedText2> Os Valores da Torden Web.</HighlightedText2>
          </>
        }
        imageSrc={prototypeIllustrationImageSrc}
        showDecoratorBlob={false}
        features={[
          {
            Icon: MoneyIcon,
            title: "Preços acessíveis",
            description:
              "Oferecemos soluções acessíveis que combinam qualidade e eficiência, permitindo que empresas de diferentes tamanhos tenham acesso a tecnologias poderosas sem comprometer o orçamento.",
            iconContainerCss: tw`bg-green-300 text-green-800`,
          },
          {
            Icon: BriefcaseIcon,
            title: "Profissionalismo",
            description:
              "O profissionalismo está no coração de tudo o que fazemos. Nosso compromisso é oferecer soluções de alta qualidade com ética, dedicação e competência, garantindo a satisfação e confiança de nossos clientes.",
            iconContainerCss: tw`bg-red-300 text-red-800`,
          },
        ]}
      />
      <Testimonial
        subheading={<Subheading>Depoimentos</Subheading>}
        heading={
          <>
            Resultados Reais:
            <HighlightedText> O Que Nossos Clientes Dizem</HighlightedText>
          </>
        }
        testimonials={[
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
            heading: "Experiência do Usuário Incrível",
            quote:
              "Desde que comecei a usar este serviço, minha experiência tem sido simplesmente incrível! A interface é super intuitiva, fácil de navegar, e tudo funciona de maneira muito fluida. A cada interação, percebo o quanto a equipe se preocupa em oferecer uma experiência excepcional. Realmente fez a diferença no meu dia a dia e me sinto mais produtiva. Recomendo a todos que buscam uma experiência de usuário sem complicações!",
            customerName: "Charlotte Hale",
            customerTitle: "Diretora, Coca-Cola Company.",
          },
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
            heading: "Tranformou completamente nossas vidas!",
            quote:
              "A Torden Web transformou completamente a maneira como gerenciamos a nossa empresa. A interface é simples, mas poderosa, e a integração com outras ferramentas que usamos no dia a dia fez toda a diferença. A equipe de suporte sempre foi extremamente ágil e eficiente em resolver nossas dúvidas. Além disso, a estabilidade e a performance do sistema são impressionantes. Sem dúvida, uma das melhores soluções de tecnologia que adotamos nos últimos anos!",
            customerName: "Adam Cuppy",
            customerTitle: "Gerente Fundador, Heinekein Brasil Company.",
          },
        ]}
      />
      <FAQ
        subheading={<Subheading>Perguntas Frequentes</Subheading>}
        heading={
          <>
            Você tem <HighlightedText>Perguntas?</HighlightedText>
          </>
        }
        faqs={[
          {
            question:
              "O que é o software da Torden Web e como ele pode beneficiar minha empresa ?",
            answer:
              "O software da Torden Web é uma solução tecnológica personalizada para empresas que buscam melhorar a fluidez e a eficiência de seus sistemas internos. Ele é projetado para otimizar processos, integrar diferentes áreas e garantir que sua equipe trabalhe de forma mais ágil e conectada, promovendo aumento de produtividade e redução de erros.",
          },
          {
            question:
              "Quais problemas específicos o software da Torden Web resolve para minha empresa ?",
            answer:
              "Nosso software resolve problemas comuns como a falta de integração entre sistemas, processos manuais e ineficientes, e dificuldade na comunicação entre departamentos. Ele automatiza tarefas repetitivas, melhora o fluxo de informações e proporciona uma gestão mais centralizada e transparente.",
          },
          {
            question:
              "O software da Torden Web é compatível com outros sistemas e ferramentas que já usamos ?",
            answer:
              "Sim! Nosso software foi desenvolvido para ser flexível e altamente compatível com uma variedade de sistemas já utilizados em empresas. A Torden Web prioriza a integração fácil com as ferramentas existentes, para que a transição seja simples e a adaptação dos colaboradores seja rápida.",
          },
          {
            question:
              "Como o software da Torden Web pode melhorar a comunicação dentro da minha equipe?",
            answer:
              "O software facilita a comunicação interna ao centralizar informações importantes e oferecer funcionalidades como mensagens, notificações e atualizações em tempo real. Isso assegura que todos os membros da equipe estejam alinhados e informados, o que melhora a colaboração e reduz a chance de falhas de comunicação.",
          },
          {
            question:
              "O Torden Web oferece suporte para personalização do software de acordo com as necessidades da minha empresa ?",
            answer:
              "Sim, nosso software é totalmente personalizável. A Torden Web entende que cada empresa tem necessidades únicas, então oferecemos soluções ajustáveis para atender às particularidades de seu negócio, garantindo que o sistema se encaixe perfeitamente nas suas operações.",
          },
          {
            question:
              "Quais são os benefícios de adotar o software da Torden Web em termos de produtividade e resultados ?",
            answer:
              "Ao automatizar processos e integrar diferentes áreas da empresa, nosso software reduz o tempo gasto em tarefas manuais e aumenta a precisão das operações. Isso resulta em maior produtividade, menores custos operacionais e, consequentemente, melhores resultados para sua empresa a curto e longo prazo.",
          },
        ]}
      />
      <GetStarted />
      <Footer />
    </AnimationRevealPage>
  );
};
