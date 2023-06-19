"use client"

import Image from "next/image";

import {
  Box,
  Flex,
  Text,
  List,
  WrapItem,
  Link,
  Button,
  Container,
  UnorderedList
} from "@chakra-ui/react";

import {
  LinkIcon,
  EmailIcon
} from "@chakra-ui/icons"


export function Footer() {
  return (
    <Container
      maxWidth={1500}
      height={"100%"}
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

          <Box>
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
            <UnorderedList
              fontSize={20}
              display={"column"}
            >
              <List marginBottom={5}><a href="#">Home</a></List>
              <List marginBottom={5}><a href="#second-page">App</a></List>
              <List marginBottom={5}><a href="#third-page">Download</a></List>
              <List marginBottom={5}><a href="#links">Links</a></List>
              <List marginBottom={5}><a href="#footer">Notícia</a></List>
            </UnorderedList>
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
            <Flex
              marginTop={["50px"]}
              flexDirection={"column"}
            >

              <WrapItem>
                <Button
                  variant={"outline"}
                  leftIcon={<LinkIcon />}
                >
                  <Link
                    href="https://www.instagram.com/leev.eapp"
                    target="_blank"
                  >
                    <Text
                      fontSize={"1xl"}
                    >
                      Instagram
                    </Text>
                  </Link>
                </Button>
              </WrapItem>

              <WrapItem>
                <Button
                  variant={"outline"}
                  leftIcon={<LinkIcon />}
                >
                  <Link
                    href="https://www.linkedin.com/company/leeve-app"
                    target="_blank"
                  >
                    <Text
                      fontSize={"1xl"}
                    >
                      Linkedin
                    </Text>
                  </Link>
                </Button>
              </WrapItem>

              <WrapItem>
                <Button
                  variant={"outline"}
                  leftIcon={<EmailIcon />}
                >
                  <Link
                    href="mailto:leeve.app@hotmail.com"
                    target="_blank"
                  >
                    <Text
                      fontSize={"1xl"}
                    >
                      E-mail
                    </Text>
                  </Link>
                </Button>
              </WrapItem>

              <WrapItem>
                <Button
                  variant={"outline"}
                  leftIcon={<LinkIcon />}
                >
                  <Link
                    href="#"
                  >
                    <Text
                      fontSize={"1xl"}
                    >
                      Acesse o site
                    </Text>
                  </Link>
                </Button>
              </WrapItem>

            </Flex>
          </Box>
        </Box>

      </Flex>
    </Container>
  )
}