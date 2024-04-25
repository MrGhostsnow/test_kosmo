"use client";
import {
  ContainerHome,
  ContainerHeaderHome,
  SectionOptions,
  Option,
  SectionCaroselOferts,
} from "./styles";
import dropdown from "../../../../public/assets/dropdown.png";
import caroselOferts from "../../../../public/assets/carosel-oferts.png";
import Image from "next/image";

export default function HomePage() {
  return (
    <ContainerHome>
      <ContainerHeaderHome>
        <SectionOptions>
          <Option>
            Woman’s Fashion{" "}
            {<Image src={dropdown} alt="google" width={7.78} height={12.73} />}{" "}
          </Option>
          <Option>
            Woman’s Fashion{" "}
            {<Image src={dropdown} alt="google" width={7.78} height={12.73} />}{" "}
          </Option>
          <Option>Electronics</Option>
          <Option>Home & Lifestyle</Option>
          <Option>Medicine</Option>
          <Option>Sports & Outdoor</Option>
          <Option>Baby’s & Toys</Option>
          <Option>Groceries & Pets</Option>
          <Option>HomeHealth & Beauty</Option>
        </SectionOptions>
        <SectionCaroselOferts>
          <Image
            src={caroselOferts}
            alt="carosel oferts"
            width={892}
            height={344}
          />
        </SectionCaroselOferts>
      </ContainerHeaderHome>
    </ContainerHome>
  );
}
