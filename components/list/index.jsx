"use client"

import {
  List,
  ListItem
} from "@chakra-ui/react";

export function ListisActive({ displayValue, marginValue, marginBottomValue }) {
  return (
    <List
      fontSize={20}
      display={displayValue}
    >
      <ListItem margin={marginValue} marginBottom={marginBottomValue}><a href="#">Home</a></ListItem>
      <ListItem margin={marginValue} marginBottom={marginBottomValue}><a href="#second-page">App</a></ListItem>
      <ListItem margin={marginValue} marginBottom={marginBottomValue}><a href="#third-page">Download</a></ListItem>
      <ListItem margin={marginValue} marginBottom={marginBottomValue}><a href="#links">Links</a></ListItem>
      <ListItem margin={marginValue} marginBottom={marginBottomValue}><a href="#footer">Notícia</a></ListItem>
    </List>
  )
}