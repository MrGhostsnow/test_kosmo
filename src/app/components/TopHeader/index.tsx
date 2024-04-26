"use client";
import Image from "next/image";
import {
  ContainerTopHeader,
  ContentTopHeader,
  LanguageOptions,
  SectionText,
  SpanTopHeader,
  TextTopHeader,
} from "./styles";

export default function TopHeader() {
  return (
    <ContainerTopHeader>
      <ContentTopHeader>
        <SectionText>
          <TextTopHeader>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </TextTopHeader>
          <SpanTopHeader>ShopNow</SpanTopHeader>
        </SectionText>
        <LanguageOptions>
          English{" "}
          <Image
            src="/assets/icon-arrow-down.png"
            alt="arrow down"
            width={10}
            height={7}
          />
        </LanguageOptions>
      </ContentTopHeader>
    </ContainerTopHeader>
  );
}
