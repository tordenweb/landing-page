import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <ContactUsForm />
      <ContactDetails
        cards={[
          {
            title: "Aguai - Sao Paulo",
            description: (
              <>
                <Address>
                  <AddressLine>XV de Novembro</AddressLine>
                  <AddressLine>Centro, 1859</AddressLine>
                </Address>
                <Email>tordenweb@gmail.com</Email>
                <Phone>(19) 3652-0000</Phone>
              </>
            ),
          },
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
};

/*Slide 1: Logo e Nome da Empresa
Torden Web
Transformando a Tecnologia em Soluções Eficientes

Slide 2: Quem Somos
Quem Somos

A Torden Web é uma empresa inovadora no ramo da tecnologia, especializada em soluções digitais que atendem às necessidades do mercado atual. Com uma equipe de especialistas em desenvolvimento de software, design de interfaces e otimização de processos, nossa missão é proporcionar uma experiência incrível para nossos clientes através de tecnologias de ponta.

Slide 3: Nossa Missão
Nossa Missão

Oferecer soluções tecnológicas de alta performance que transformam negócios e facilitam a vida de nossos clientes, proporcionando uma experiência única em todos os pontos de contato. Queremos ser o parceiro confiável para empresas que buscam inovação, eficiência e segurança em seus processos digitais.

Slide 4: Nossos Valores
Nossos Valores

Inovação constante: Buscamos sempre as últimas tendências tecnológicas para fornecer soluções de ponta.
Compromisso com o cliente: Trabalhamos para garantir que a experiência do usuário seja intuitiva, rápida e segura.
Suporte excepcional: Estamos ao lado dos nossos clientes em cada etapa da jornada, oferecendo suporte dedicado.
Slide 5: A Solução Está Na Palma Da Sua Mão
A Solução Está Na Palma Da Sua Mão

Nosso software coloca o poder da gestão e controle diretamente ao seu alcance, facilitando tarefas complexas de maneira simples e intuitiva. Com apenas alguns cliques, você pode gerenciar seus projetos, acessar dados em tempo real e tomar decisões mais rápidas e informadas.

Slide 6: O Que Dizem Nossos Clientes
O Que Dizem Nossos Clientes

"Este software transformou completamente a maneira como gerenciamos nossos projetos. A interface é simples, mas poderosa, e a integração com outras ferramentas que usamos no dia a dia fez toda a diferença. A equipe de suporte sempre foi extremamente ágil e eficiente. Sem dúvida, a melhor solução que adotamos nos últimos anos!"

— Maria Oliveira, Gerente de TI

"Com essa ferramenta, a solução está literalmente na palma da minha mão. Nunca foi tão fácil gerenciar todas as minhas tarefas e acompanhar o progresso de forma tão eficiente."

— João Silva, CEO

Slide 7: O Que Oferecemos
O Que Oferecemos

Desenvolvimento de Software Sob Medida: Criamos soluções que atendem às necessidades específicas de cada cliente.
Consultoria em Tecnologia: Ajudamos sua empresa a escolher e implementar as melhores tecnologias para seu negócio.
Design e UX/UI: Garantimos que seus produtos não sejam apenas funcionais, mas também agradáveis e fáceis de usar.
Slide 8: Por Que Escolher a Torden Web?
Por Que Escolher a Torden Web?

Experiência do Usuário Incrível: A interface e navegação dos nossos produtos são projetadas para garantir que sua experiência seja intuitiva e eficiente.
Tecnologia de Ponta: Utilizamos as melhores ferramentas e práticas de desenvolvimento para oferecer soluções rápidas e seguras.
Suporte Dedicado: Nossa equipe está sempre pronta para apoiar, garantindo que suas necessidades sejam atendidas de forma rápida e eficaz.
Slide 9: Entre em Contato
Entre em Contato

Torden Web está aqui para ajudar a sua empresa a alcançar novos patamares com soluções tecnológicas inovadoras. Entre em contato e descubra como podemos transformar o seu negócio.

Website: www.tordenweb.com
E-mail: contato@tordenweb.com
Telefone: (XX) XXXX-XXXX
Slide 10: Fechamento
Transforme Seu Negócio com a Torden Web
Inovação, Eficiência e Tecnologia ao Seu Alcance */
