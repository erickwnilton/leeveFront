"use client"

import Image from "next/image";

import {
  Box,
  List,
  Container,
  UnorderedList,
} from "@chakra-ui/react";

import { MenuisOpen } from "../menu";
import { ButtonisOpen } from "../Button";

export function Header() {
  return (
    <Container
      maxWidth={"100%"}
      position={"fixed"}
      background={"#fff"}
      zIndex={2}
    >
      <Box
        margin={"0 auto"}
        maxWidth={1800}
      >

        <Box
          marginTop={2}
          marginBottom={2}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >

          <Box>
            <Image
              src="/leeve.svg"
              width={80}
              height={80}
              alt="leeve"
            />
          </Box>

          <Box
            display={["none", "none", "none", "flex"]}
          >
            <UnorderedList
              fontSize={20}
              display={"flex"}
            >
              <List margin={5}><a href="#">Home</a></List>
              <List margin={5}><a href="#second-page">App</a></List>
              <List margin={5}><a href="#third-page">Download</a></List>
              <List margin={5}><a href="#links">Links</a></List>
              <List margin={5}><a href="#footer">Notícia</a></List>
            </UnorderedList>
          </Box>

          <Box
            display={["none", "none", "none", "flex"]}
          >

            <ButtonisOpen />

          </Box>

          <Box
            display={["flex", "flex", "flex", "none"]}
          >

            <MenuisOpen />

          </Box>
        </Box>

      </Box>

    </Container>
  )
}