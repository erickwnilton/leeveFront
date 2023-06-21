"use client"

import {
  Wrap,
  Link,
  Flex,
  Text,
  Button,
  WrapItem,
} from "@chakra-ui/react";

import {
  LinkIcon,
  EmailIcon
} from "@chakra-ui/icons";

export function ButtonsLinks({ marginValue, spacingWrap, fontValue }) {
  return (
    <Flex
      marginTop={marginValue}
    >

      <Wrap
        spacing={spacingWrap}
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
                fontSize={fontValue}
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
                fontSize={fontValue}
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
                fontSize={fontValue}
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
                fontSize={fontValue}
              >
                Acesse o site
              </Text>
            </Link>
          </Button>
        </WrapItem>
      </Wrap>
    </Flex>
  )
}