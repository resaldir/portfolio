import styled from "styled-components";
import Container from "components/Layout/Container";
import { FlexLinks } from "components/Layout/Footer/styles";
import { Navigation } from "components/Layout/Navigation";
import { DividerBorder } from "components/Timeline/styles";

const Divider = () => <DividerBorder />;

export default function Link() {
  return (
    <Container title="Link - Resaldi Ramadhan Putra">
      <h1>Link</h1>
      <Paragraph>Here's the list of my important links. </Paragraph>
      <FlexLinks>
        <Navigation
          href="https://www.linkedin.com/in/resaldi-ramadhan-putra-1853b4110/"
          target="_blank"
          text="LinkedIn"
        />
        <Navigation
          href="https://medium.com/@resaldir"
          target="_blank"
          text="Medium"
        />
      </FlexLinks>
      <Divider />
    </Container>
  );
}



export const Paragraph = styled.p`
  br {
    content: "";
    margin: 1rem;
    display: block;
  }
`;
