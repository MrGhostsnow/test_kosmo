import Image from "next/image";
import {
  ContainerNewArrival,
  SectionTag,
  TitleTag,
  SpanTag,
  SectionHeaderNewArrival,
  SalesType,
  TitleType,
  SectionProducts,
  MainProduct,
  InfosProduct,
  InfosSecondProduct,
  InfosThirdProduct,
  InfosFourthProduct,
  ProductName,
  ProductDescription,
  Span,
  SecondColumnProduct,
  SecondProduct,
  ThirdProduct,
  FourthProduct,
  SmallProducts,
} from "./styles";

export default function NewArrival() {
  return (
    <ContainerNewArrival>
      <SectionTag>
        <SpanTag></SpanTag>
        <TitleTag>Featured</TitleTag>
      </SectionTag>
      <SectionHeaderNewArrival>
        <SalesType>
          <TitleType>New Arrival</TitleType>
        </SalesType>
      </SectionHeaderNewArrival>
      <SectionProducts>
        <MainProduct>
          <Image
            src="https://s3-alpha-sig.figma.com/img/1c36/0f79/0c1817d3afa266b3c9f8c81ff0ed4428?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qQYD4bIOCl7ip824A0iFtWXSIqZbpFevCCYBM1ELaCqzFuvrl2O6c3F3WLVZsnPdJVsgkpVm6bpRnfewIdRJgqAxHn6UyutZOedIDM6nakHGwqpL9yPfM8XGjhsYM5ey~23KdGRJ8Som5T6DMMz10djqaQayNPNWychvUl~pKqpthlJkKUK-D7TNrOMuqa6lbLjNbp73Xb3lXjOWFqeJLa00LXMu4JPuBHiD5UGxkPw-Fr7IhJ0GK9Pg14E0p~kI4GwHCxNiG7AHQ39f8NOvAlvgYGCWjYJ3O7AaErdWSQjWHUESF7S3UStSWyiYNsGcUZz~r48dv1nnRwLap1kP2Q__"
            width={661}
            height={500}
            alt="playstation 5"
            style={{ position: "relative", top: "6.2rem", left: "-3rem" }}
          />
          <InfosProduct>
            <ProductName>PlayStation 5</ProductName>
            <ProductDescription>
              Black and White version of the PS5 coming out on sale.
            </ProductDescription>
            <Span>Shop Now</Span>
          </InfosProduct>
        </MainProduct>
        <SecondColumnProduct>
          <SecondProduct>
            <Image
              src="https://s3-alpha-sig.figma.com/img/455c/8d64/08463f7e8f57dd3048a2444dbfa0cb90?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZkGDmJlqaTBRKpEdJlQtea~8vano4ODgKTSqbKLMiAhCKNByoPFA7tCgcQ~dmtyVkguWlOViZSgvah4q~-QAg39LBe3utRhWsI-ZW~PzWPoYBjAENWSEvjZ~LD07A-6k3iRJYvkmN24zrnYLwa~inkfRzJqcrcabWGjPF27ZEvMnWEAh6DYwHluJvOim7FkGNr5qBRhCGl1K-56xhC9d53v2zVIgpzICrK7LvjG-481geNUCYfKxZ~YBo034evslemuan-IzsVyw4RGCYrPwdg0z1Na5cikS4o7-57wgTLOs2U4jmTylDzKhAQiQZUwr-PEOSlAqphEz5dDFsQOtoQ__"
              width={432}
              height={276}
              alt="women’s collections"
              style={{
                transform: "rotateY(180deg)",
                position: "relative",
                top: "0.0rem",
                left: "0rem",
              }}
            />
            <InfosSecondProduct>
              <ProductName>Women’s Collections</ProductName>
              <ProductDescription>
                Featured woman collections that give you another vibe.
              </ProductDescription>
              <Span>Shop Now</Span>
            </InfosSecondProduct>
          </SecondProduct>
          <SmallProducts>
            <ThirdProduct>
              <Image
                src="https://s3-alpha-sig.figma.com/img/e565/9d57/2977438364a41d7e8c9d1e9a794d43ed?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JvTxCNN8YU7HbwVFPxua-3q26LIWB8TztW7JuCcza6ZChxbArXTeMh8-64bwWJ0J3s-PVidTZh4QKkTwiPZuSGxtplVonlNSiFW-tSgyS-OSWqh2yYFAqr0n3F~UDoSD5QLOuvgIqcyoUUsryy9ZnYnousrICmzK-Da-M-GGTzi41qmwlPAfqMgJnsc3ftvSSfp~PTCK-1GsO2awz82ioJieU5fS5zad1gRbS0xtjgl32Uta7nok1nIpY2gEyH6~l9r8vRJA-mVPxZQQBYRbflzfHmGrMiNbMDVEvGSXpkkwH8rHXZvXOmKVsf61fMsk35bLgF3MIH6cjDFK7VlH7g__"
                width={420}
                height={271}
                alt="speakers"
                style={{ position: "relative", top: "-0.0rem", left: "7rem" }}
              />
              <InfosProduct>
                <InfosThirdProduct>
                  <ProductName>Speakers</ProductName>
                  <ProductDescription>
                    Amazon wireless speakers
                  </ProductDescription>
                  <Span>Shop Now</Span>
                </InfosThirdProduct>
              </InfosProduct>
            </ThirdProduct>
            <FourthProduct>
              <Image
                src="https://s3-alpha-sig.figma.com/img/1531/5cd1/5102562cf220504d288fa568eaa816dd?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bOrwp3LEJALQynIAOnoY9N5EUSlQyx4Ky-gBHa57G6vZ7P2tFPcyZlLyv2ud1xoZVVpW1O6dS302kaNKvMo5HBTAkfvUpq5rqHXRj2AqWnVjFZAfwK1OygpH2ChSBO093SNJ9udenAbVlYpjNsnUt0Ga~B~A2PyVuE716ewWu1IA-9Khbev8uyYeC5fhDpV1Thaek~3J-YkDAVR7Ry5vpKBpRS3-OH-NeOU519EpEV1oQ4qY4Z4MmGuPz6yXOxAuKKKas1AAoMsk9wNXTKfDLN4QZ3o4eju5P6yjH2JRHTS0rEp-CDPU7Wg-ciQ5KpKVxnG3Sha8UI7fH42oe-zVpw__"
                width={231}
                height={233}
                alt="perfume"
                style={{ position: "relative", top: "-1.9rem", left: "1rem" }}
              />
              <InfosProduct>
                <InfosFourthProduct>
                  <ProductName>Perfume</ProductName>
                  <ProductDescription>GUCCI INTENSE OUD EDP</ProductDescription>
                  <Span>Shop Now</Span>
                </InfosFourthProduct>
              </InfosProduct>
            </FourthProduct>
          </SmallProducts>
        </SecondColumnProduct>
      </SectionProducts>
    </ContainerNewArrival>
  );
}
