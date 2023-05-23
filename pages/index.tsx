import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { Timeline } from "components/Timeline";
import Container from "components/Layout/Container";
import { StringProps } from "lib/types";
import { devices } from "lib/displayDevice";

import { Flex } from "components/Layout/Container/styles";

import ProfilePicture from "public/assets/png/saldi.jpg";

export default function Home() {
  return (
    <Container>
      <HeroFlex align="flex-start">
        <ContentWrapper>
          <h1>Resaldi Ramadhan Putra</h1>
          <h2>Database Administrator</h2>
          <p>
            With over 7 years of hands-on experience, I have actively contributed to building cutting-edge technologies within startup and enterprise companies. My expertise spans the Telecommunication Industry and Financial Technology domain, where I have excelled as a skilled Team Leader, proficient IT Technical Support specialist, and detail-oriented IT Operations Analyst. Currently, I hold the position of DBA, where I continue to contribute to the advancement of technology with dedication and expertise.
          </p>
        </ContentWrapper>
        <RoundImage
          src={ProfilePicture}
          alt="Picture of Saldi"
          width="150px"
          height="150px"
        />
      </HeroFlex>
      <Timeline />
    </Container>
  );
}

export const ContentWrapper = styled.div<StringProps>`
  padding-right: 2rem;

  h1,
  h2 {
    margin: 0;
  }

  h2 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: bold;
  }

  p {
    max-width: 65ch;
  }

  @media ${devices.mobileL} {
    margin-top: 2rem;
  }
`;

export const RoundImage = styled(Image)`
  border-radius: 50%;
`;

const HeroFlex = styled(Flex)`
  @media ${devices.mobileL} {
    flex-direction: column-reverse;
  }
`;
