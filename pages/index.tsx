import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { Timeline } from "components/Timeline";
import { Projects } from "components/Projects";
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
          <h2>IT Operation Analyst Lead</h2>
          <p>
            Experienced 6+ years in IT Telecommunication industry environment as
            a Team Leader, IT Technical Support, UI/UX Designer, and Information
            Technology Operations Analyst. Familiar with Team management from
            designing, creating, execution, controlling, monitoring, and
            reporting.
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
