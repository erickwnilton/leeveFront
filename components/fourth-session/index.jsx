"use client"

import {
  Box,
  Text,
  Container
} from "@chakra-ui/react";

import { ButtonsLinks } from "../links";

export function Fourth() {
  return (
    <Container
      maxWidth={1500}
      height={["700px"]}
      id="links"
    >
      <Box
        paddingTop={90}
      >

        <Box>
          <Text
            fontSize={"8xl"}
            color={"#8BD93D"}
          >
            Links
          </Text>
        </Box>

        <ButtonsLinks
          marginValue={"50px"}
          fontValue={"3xl"}
          spacingWrap={12}
        />

      </Box>
    </Container>
  )
}