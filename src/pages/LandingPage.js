import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light";
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
import heroScreenshotImageSrc from "images/desktop-work.jpeg";
import prototypeIllustrationImageSrc from "images/software.png";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";

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
              heading: "Além das Expectativas",
              quote:
                "Quando procuramos a Torden Web para desenvolver um sistema interno de gestão, estávamos enfrentando vários desafios com a nossa operação. A equipe da Torden Web foi além das expectativas, criando uma solução sob medida que otimizou todos os nossos processos. A plataforma é intuitiva, rápida e se integrou perfeitamente com as ferramentas que já utilizávamos. O suporte contínuo tem sido excelente, e sentimos que sempre podemos contar com eles para ajustes e melhorias. Sem dúvida, a Torden Web foi fundamental para o sucesso da nossa transformação digital.",
              customerName: "Fernanda Costa",
              customerTitle: "Diretora de Operações da LuminaTech Ltda.",
            },
            {
              stars: 5,
              profileImageSrc:
                "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
              heading: "Experiência do Usuário Fantástica",
              quote:
                "Escolhemos a Torden Web para desenvolver nossa plataforma de e-commerce e não poderíamos estar mais satisfeitos com o resultado. A equipe foi extremamente atenciosa durante todo o processo, entendendo exatamente nossas necessidades e oferecendo soluções inovadoras. O site ficou não apenas funcional, mas com um design impecável e uma experiência de usuário fantástica. Desde o lançamento, vimos um aumento significativo nas vendas e na satisfação dos nossos clientes. A Torden Web se tornou um parceiro estratégico essencial para o nosso crescimento digital. Recomendamos com certeza!",
              customerName: "Lucas Almeida,",
              customerTitle: "CEO da Trendify.",
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
                "O que faz a Torden Web se destacar no desenvolvimento de sites e software ?",
              answer:
                "Nos destacamos pela nossa capacidade de entregar soluções personalizadas, com foco nas necessidades específicas de cada cliente. Nossa equipe combina expertise técnica com uma visão estratégica de negócios, garantindo que os sites e softwares que criamos não sejam apenas esteticamente atrativos, mas também funcionais e eficientes, gerando resultados reais para nossos clientes.",
            },
            {
              question:
                "Quanto tempo leva para criar um site ou software sob medida ?",
              answer:
                "O tempo de desenvolvimento depende da complexidade do projeto. Para sites mais simples, o prazo pode variar de 4 a 6 semanas. Já para projetos mais complexos, como sistemas corporativos ou e-commerces personalizados, o tempo pode variar entre 2 a 6 meses, dependendo da especificidade das funcionalidades e integrações. Sempre fazemos questão de alinhar expectativas de tempo e orçamento com o cliente desde o início.",
            },
            {
              question:
                "Quais são as principais vantagens de escolher uma solução personalizada em vez de uma plataforma pronta (como Wix, Shopify, etc.) ?",
              answer:
                "Soluções personalizadas oferecem uma flexibilidade que plataformas prontas não conseguem igualar. Com um site ou software sob medida, você tem controle total sobre funcionalidades, design e escalabilidade. Além disso, podemos criar uma solução específica para os processos e objetivos do seu negócio, sem limitações impostas por templates. Isso resulta em uma experiência única para seus usuários e, em muitos casos, maior desempenho a longo prazo.",
            },
            {
              question:
                "Vocês oferecem integração com outras plataformas e sistemas ?",
              answer:
                "Sim, oferecemos soluções de integração completas. Podemos integrar o site ou software desenvolvido com outros sistemas existentes, como CRMs, ERPs, plataformas de pagamento, redes sociais e ferramentas de marketing digital. Isso permite que nossos clientes aproveitem ao máximo suas operações e otimizem processos, criando uma solução integrada e eficiente.",
            },
            {
              question:
                "Como posso saber se o desenvolvimento do meu site ou software está no caminho certo durante o processo ?",
              answer:
                "Adotamos uma abordagem transparente e colaborativa. Durante o desenvolvimento, mantemos os clientes atualizados com relatórios de progresso e demos periódicas, para que possam acompanhar o andamento do projeto. Além disso, realizamos sessões de feedback durante as fases-chave, permitindo ajustes antes da entrega final, garantindo que o produto atenda às expectativas e necessidades do cliente.",
            },
            {
              question:
                "O que acontece se eu precisar de alterações ou novos recursos no meu site ou software após a entrega ?",
              answer:
                "Oferecemos um suporte contínuo após a entrega do projeto. Se precisar de alterações ou novos recursos, temos pacotes de manutenção flexíveis para atender a essas demandas. Combinamos as necessidades de novos desenvolvimentos com a evolução do seu negócio, criando atualizações e implementações que continuam alinhadas com seus objetivos. Nossa equipe está sempre disponível para ajustar e otimizar o produto conforme sua empresa cresce.",
            },
          ]}
        />
        <GetStarted />
        <Footer />
      </AnimationRevealPage>
    </>
  );
};
