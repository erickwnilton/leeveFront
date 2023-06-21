"use client"

import Image from "next/image";

import {
  Box,
  Flex,
  Text,
  Container,
} from "@chakra-ui/react";

import { ListisActive } from "../list";
import { ButtonsLinks } from "../links";


export function Footer() {
  return (
    <Container
      maxWidth={1500}
      height={"100%"}
      paddingBottom={"20px"}
      background={"#F6FFDF"}
      id="footer"

    >

      <Flex
        display={["column", "column", "flex", "flex"]}
      >
        <Box
          width={["100%", "100%", "33%", "33%"]}
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
            marginTop={"20px"}
          >
            <Text
              fontSize={["2xl", "2xl", "3xl", "5xl"]}
              color={"#3D221B"}
            >
              O App que facilita <br />
              sua rotina.
            </Text>
          </Box>

        </Box>

        <Box
          width={["100%", "100%", "33%", "33%"]}
        >

          <Box>
            <Text
              fontSize={"4xl"}
              color={"#8BD93D"}
              textTransform={"uppercase"}
            >
              Leeve
            </Text>
          </Box>

          <Box
            marginTop={"20px"}
          >

            <ListisActive
              displayValue={"column"}
              marginBottomValue={"10px"}
            />

          </Box>

        </Box>

        <Box
          width={["100%", "100%", "33%", "33%"]}
        >
          <Box>
            <Text
              fontSize={"4xl"}
              color={"#8BD93D"}
              textTransform={"uppercase"}
            >
              Social
            </Text>
          </Box>

          <Box>

            <ButtonsLinks
              spacingWrap={2}
              fontValue={"1xl"}
            />

          </Box>
        </Box>

      </Flex>
    </Container>
  )
}