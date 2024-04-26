"use client";
import styled from "styled-components";
import Image from "next/image";

const HeaderHome = () => {
  return (
    <ContainerHeaderHome>
      <SectionOptions>
        <Option>
          Woman’s Fashion{" "}
          {
            <Image
              src="/assets/dropdown.png"
              alt="google"
              width={7.78}
              height={12.73}
            />
          }{" "}
        </Option>
        <Option>
          Woman’s Fashion{" "}
          {
            <Image
              src="/assets/dropdown.png"
              alt="google"
              width={7.78}
              height={12.73}
            />
          }{" "}
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
          src="/assets/carousel-offers.png"
          alt="carosel oferts"
          width={892}
          height={344}
        />
      </SectionCaroselOferts>
    </ContainerHeaderHome>
  );
};

export const SectionOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 217px;
  height: 374px;
  gap: 16px;
  border-right: 1px solid #00000066;
  padding: 24px 0;
`;

export const Option = styled.span`
  display: flex;
  gap: 51px;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  color: #000000;
`;

export const ContainerHeaderHome = styled.div`
  display: flex;
  gap: 24px;
  width: 1300px;
`;

export const SectionCaroselOferts = styled.div`
  padding: 24px 12px;
`;

export default HeaderHome;
