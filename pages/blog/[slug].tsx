import styled from "styled-components";
import { RoundImage } from "pages";
import { formatDate, convertToSlug } from "lib/helpers";
<<<<<<< HEAD
=======
import { mediumUserUrl } from "pages/api/medium";
>>>>>>> dcbb74842473cd3a2b0e3271742e494e4132fdb1
import { devices } from "lib/displayDevice";
import { PostsProps } from "lib/types";

import { Flex } from "components/Layout/Container/styles";
import Container from "components/Layout/Container";

<<<<<<< HEAD
import ProfilePicture from "public/assets/png/saldi.jpg";
=======
import ProfilePicture from "public/assets/png/Lasha.png";
>>>>>>> dcbb74842473cd3a2b0e3271742e494e4132fdb1

interface BlogProps {
  filteredPost: PostsProps;
  title: string;
}

interface ParamsProps {
  params: {
    slug: string;
  };
}

export default function Blog({ filteredPost, title }: BlogProps) {
  return (
<<<<<<< HEAD
    <Container title={`${title} - Resaldi Ramadhan Putra`}>
=======
    <Container title={`${title} - Lasha Kakabadze`}>
>>>>>>> dcbb74842473cd3a2b0e3271742e494e4132fdb1
      <BlogFlex>
        <AuthorContainer>
          <RoundImage
            src={ProfilePicture}
<<<<<<< HEAD
            alt="Picture of Saldi"
            width="45px"
            height="45px"
          />
          <h4>Resaldi Ramadhan Putra / {formatDate(filteredPost.pubDate)}</h4>
=======
            alt="Picture of Lasha"
            width="45px"
            height="45px"
          />
          <h4>Lasha Kakabadze / {formatDate(filteredPost.pubDate)}</h4>
>>>>>>> dcbb74842473cd3a2b0e3271742e494e4132fdb1
        </AuthorContainer>
        <div>
          {Number(filteredPost.description.length / 1750).toFixed(0)} min read
        </div>
      </BlogFlex>
      <DescriptionContainer
        dangerouslySetInnerHTML={{ __html: filteredPost?.description }}
      />
    </Container>
  );
}

<<<<<<< HEAD

=======
export async function getStaticProps({ params }: ParamsProps) {
  const res = await fetch(mediumUserUrl);
  const posts = await res.json();
  const filteredPost = posts.items.filter(
    (post: PostsProps) => convertToSlug(post.title) === params.slug
  )[0];

  return {
    props: {
      filteredPost,
      title: filteredPost.title,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const posts = await fetch(mediumUserUrl);

  const stories = await posts.json();

  const paths = stories.items.map((post: PostsProps) => ({
    params: {
      slug: convertToSlug(post.title),
    },
  }));

  return { paths, fallback: "blocking" };
}
>>>>>>> dcbb74842473cd3a2b0e3271742e494e4132fdb1

const DescriptionContainer = styled.div`
  ul,
  ol {
    display: inline-block;
    width: 100%;
    overflow: hidden;
    word-wrap: break-word;
    word-break: break-all;
  }

  img {
    width: 100%;
    overflow: hidden;
    border-radius: 12px;
  }

  figure {
    margin: 0;
  }

  figcaption {
    margin-top: 1rem;
  }

  pre {
    box-sizing: border-box;
    overflow: auto;
    border-radius: 12px;
    line-height: 20px;
    padding: 10px;

    white-space: pre-wrap; /* css-3 */
    white-space: -moz-pre-wrap; /* Mozilla */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word;
  }

  ul {
    margin-left: 1rem;

    li {
      list-style-type: circle;
      padding: 0.5rem 0;
    }

    @media ${devices.tabletM} {
      margin: 0;

      li {
        list-style-type: none;
      }
    }
  }
`;

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;

  h4 {
    margin: 0;
    font-size: 1rem;
    margin-left: 0.75rem;
  }

  @media ${devices.tabletM} {
    h4 {
      display: none;
    }
  }
`;

const BlogFlex = styled(Flex)`
  @media ${devices.tabletM} {
    justify-content: flex-start;

    ${AuthorContainer} {
      margin-right: 1rem;
    }
  }
`;
