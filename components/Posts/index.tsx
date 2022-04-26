import useSWR from "swr";
import Link from "next/link";
import fetcher from "lib/fetcher";
import { convertToSlug, formatDate } from "lib/helpers";

import { Container, Item, PostsDescription } from "components/Posts/styles";
import { Flex } from "components/Layout/Container/styles";
