"use client";
import {
  ContainerNavBar,
  ContentNavBar,
  Logo,
  LinksNavBar,
  Link,
  InputSearch,
  IconSearch,
} from "./styles";
import searchLogo from "../../../../public/assets/search-icon.png";
import Image from "next/image";

export default function NavBar() {
  return (
    <ContainerNavBar>
      <ContentNavBar>
        <Logo>Exclusive</Logo>
        <LinksNavBar>
          <Link>Home</Link>
          <Link>Contact</Link>
          <Link>About</Link>
          <Link>Sign Up</Link>
        </LinksNavBar>
      </ContentNavBar>
      <InputSearch placeholder="What are you looking for?" />
      <IconSearch>
        <Image src={searchLogo} width={16} height={16} alt="search logo" />
      </IconSearch>
    </ContainerNavBar>
  );
}
