import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-8.svg";

const Subheading = tw(SubheadingBase)`mb-4 text-center`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const Column = tw.div`flex flex-col items-center`;
const HeaderContent = tw.div``;

const FAQSContainer = tw.dl`mt-12 max-w-4xl relative`;
const FAQ = tw.div`cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold text-blue-800`;
const QuestionToggleIcon = motion(styled.span`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`);
const Answer = motion(
  tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`
);

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-56 w-56 opacity-15 transform translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-15 transform -translate-x-2/3 text-teal-400`}
`;

export default ({
  subheading = "FAQS",
  heading = "You have Questions ?",
  description = "E nós temos respostas para todas elas",
  faqs = [
    {
      question:
        "O que faz a Torden Web se destacar no desenvolvimento de sites e software ?",
      answer:
        "Nos destacamos pela nossa capacidade de entregar soluções personalizadas, com foco nas necessidades específicas de cada cliente. Nossa equipe combina expertise técnica com uma visão estratégica de negócios, garantindo que os sites e softwares que criamos não sejam apenas esteticamente atrativos, mas também funcionais e eficientes, gerando resultados reais para nossos clientes.",
    },
    {
      question: "Quanto tempo leva para criar um site ou software sob medida ?",
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
      question: "Vocês oferecem integração com outras plataformas e sistemas ?",
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
  ],
}) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = (questionIndex) => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <Container>
      <ContentWithPaddingXl>
        <Column>
          <HeaderContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
          </HeaderContent>
          <FAQSContainer>
            {faqs.map((faq, index) => (
              <FAQ
                key={index}
                onClick={() => {
                  toggleQuestion(index);
                }}
                className="group"
              >
                <Question>
                  <QuestionText>{faq.question}</QuestionText>
                  <QuestionToggleIcon
                    variants={{
                      collapsed: { rotate: 0 },
                      open: { rotate: -180 },
                    }}
                    initial="collapsed"
                    animate={
                      activeQuestionIndex === index ? "open" : "collapsed"
                    }
                    transition={{
                      duration: 0.02,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                  >
                    <ChevronDownIcon />
                  </QuestionToggleIcon>
                </Question>
                <Answer
                  variants={{
                    open: { opacity: 1, height: "auto", marginTop: "16px" },
                    collapsed: { opacity: 0, height: 0, marginTop: "0px" },
                  }}
                  initial="collapsed"
                  animate={activeQuestionIndex === index ? "open" : "collapsed"}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  {faq.answer}
                </Answer>
              </FAQ>
            ))}
          </FAQSContainer>
        </Column>
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
