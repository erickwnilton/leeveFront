"use client"

import Link from "next/link";

import {
  Menu,
  Button,
  MenuItem,
  MenuList,
  IconButton,
  MenuButton
} from "@chakra-ui/react";

import {
  HamburgerIcon
} from "@chakra-ui/icons";

export function MenuisOpen() {
  return (
    <Menu>

      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<HamburgerIcon />}
        variant='outline'
        color={"#12C793"}
      />

      <MenuList>

        <MenuItem>
          <a href="#">Home</a>
        </MenuItem>
        <MenuItem>
          <a href="#second-page">App</a>
        </MenuItem>
        <MenuItem>
          <a href="#third-page">Download</a>
        </MenuItem>
        <MenuItem>
          <a href="#links">Links</a>
        </MenuItem>
        <MenuItem>
          <a href="#footer">Notícias</a>
        </MenuItem>
        <MenuItem>

          <Button
            width={200}
            height={50}
            background={"#12C793"}
            color={"#fff"}
            fontSize={30}
          >
            <Link href="">
              Entrar
            </Link>
          </Button>

        </MenuItem>

      </MenuList>

    </Menu>
  )
}
