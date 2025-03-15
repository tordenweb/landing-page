import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-2.jpg";
import { ReactComponent as CheckIcon } from "feather-icons/dist/icons/check-circle.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-4`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`;
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-blue-500`;
const Textarea = styled(Input).attrs({ as: "textarea" })`
  ${tw`h-24`}
`;

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`;

const ThankYouMessage = tw.div`h-96 text-2xl flex flex-col gap-4 items-center justify-center p-4 shadow-lg shadow-torden-500/25`;

export default ({
  subheading = "Contato",
  heading = (
    <>
      Transforme Seu Negócio com a <span tw="text-blue-500">Torden Web</span>
    </>
  ),
  description = "Entre em contato e descubra como podemos levar inovação, eficiência e tecnologia ao seu negócio, criando soluções sob medida para o seu sucesso.",
  submitButtonText = "Enviar",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
}) => {
  const [result, setResult] = React.useState("");
  const [error, setError] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("loading");
    const formData = new FormData(event.target);

    formData.append("access_key", "f9236881-a79f-4e6f-8054-73b450f20811");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("sent");
      event.target.reset();
    } else {
      console.log("Error", data);
      setError(data.message);
      setResult("error");
    }
  };

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            {error && (
              <div tw="text-red-500 translate-y-4 font-bold">
                Erro ao enviar contato: {error}
              </div>
            )}
            {result === "loading" && (
              <div tw="translate-y-4 font-bold">Enviando mensagem...</div>
            )}
            {result !== "sent" ? (
              <Form onSubmit={onSubmit}>
                <Input type="email" name="email" placeholder="Email" required />
                <Input type="text" name="name" placeholder="Nome" required />
                <Input type="text" name="subject" placeholder="Assunto" />
                <Textarea
                  name="message"
                  placeholder="Escreva sua mensagem aqui"
                />
                <SubmitButton type="submit">{submitButtonText}</SubmitButton>
              </Form>
            ) : (
              <ThankYouMessage>
                <span>Obrigado, seu e-mail foi enviado com sucesso.</span>
                <CheckIcon tw="w-20 h-20 text-green-500" />
                <span>Entraremos em contato em breve!</span>
              </ThankYouMessage>
            )}
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
