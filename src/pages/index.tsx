import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  useClipboard,
  HStack,
  Button,
  UnorderedList,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon, CopyIcon } from "@chakra-ui/icons";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import AppLayout from "../components/AppLayout";
import { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
import { facts } from "../data/facts";
import { CopyableFact } from "../components/CopyableFact";

const Index: NextPageWithLayout = () => {

  return (
    <Container height="100vh">
      <Hero />
      <Main>
        <Text color="text" fontSize={"xl"} align={"center" } mt="-1rem" mb="2rem">Copy those facts and fight the FUD</Text>

        <UnorderedList spacing={3} my={0} color="text">
          {
            facts.map((fact, index) => {
              return (
                <ListItem key={index}>
                  <CopyableFact fact={fact} />
                </ListItem>
              )
            })
          }
        </UnorderedList>
      </Main>
    </Container>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default Index;
