import {
  Text,
  List,
  ListItem,
} from "@chakra-ui/react";
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
        <Text
          color="accentText"
          fontSize={"xl"}
          align={"center"}
          mt="-1rem"
          mb="2rem"
        >
          Copy those facts and fight the FUD
        </Text>

        <List spacing={3} my={0} color="text">
          {facts.map((fact, index) => {
            return (
              <ListItem key={index}>
                <CopyableFact fact={fact} />
              </ListItem>
            );
          })}
        </List>
      </Main>
    </Container>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default Index;
