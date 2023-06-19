"use client"

import {
  Box,
  Text,
  Link,
  Wrap,
  Button,
  WrapItem,
  Container
} from "@chakra-ui/react";

import {
  LinkIcon,
  EmailIcon
} from "@chakra-ui/icons";

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

        <Wrap
          spacing={10}
          marginTop={["50px"]}
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
                  fontSize={"3xl"}
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
                  fontSize={"3xl"}
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
                  fontSize={"3xl"}
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
                  fontSize={"3xl"}
                >
                  Acesse o site
                </Text>
              </Link>
            </Button>
          </WrapItem>
        </Wrap>

      </Box>
    </Container>
  )
}