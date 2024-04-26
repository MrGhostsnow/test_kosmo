"use client";
import {
  ContainerNavBar,
  ContentNavBar,
  Logo,
  LinksNavBar,
  Links,
  InputSearch,
  IconSearch,
} from "./styles";
import searchLogo from "../../../../public/assets/search-icon.png";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <ContainerNavBar>
      <ContentNavBar>
        <Logo>Exclusive</Logo>
        <LinksNavBar>
          <Link href="/">
            <Links>Home</Links>
          </Link>
          <Links>Contact</Links>
          <Links>About</Links>
          <Link href="/signup">
            <Links>Sign Up</Links>
          </Link>
        </LinksNavBar>
      </ContentNavBar>
      <InputSearch placeholder="What are you looking for?" />
      <IconSearch>
        <Image src={searchLogo} width={16} height={16} alt="search logo" />
      </IconSearch>
    </ContainerNavBar>
  );
}
