"use client"

import Image from "next/image";

import {
  Box,
  Container,
} from "@chakra-ui/react";

import { ListisActive } from "../list";
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

            <ListisActive
              marginValue={5}
              displayValue={"flex"}
            />

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