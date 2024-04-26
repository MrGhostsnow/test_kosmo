"use client";
import {
  ContainerCaroselSales,
  SectionTag,
  SpanTag,
  TitleTag,
  SectionHeaderSales,
  SalesType,
  TitleType,
  SalesTime,
  SectionButtonCarosel,
  ButtonCarosel,
  Carosel,
  SectionCaroselSales,
  ContainerProduct,
  Sales,
  SectionInfo,
  ProductName,
  SectionPrice,
  PastPrice,
  Price,
  Rating,
  ButtonViewAll,
} from "./styles";
import Image from "next/image";
import Timer from "./Timer";
import { CaroselSalesProps } from "../../../interfaces/SalesProps";

const CaroselSales: React.FC<CaroselSalesProps> = (props) => {
  return (
    <ContainerCaroselSales
      style={{
        height: props.isWrap ? "1116px" : "893px",
        borderBottom: props.isBorder ? "1px solid #00000066" : "none",
      }}
    >
      <SectionTag>
        <SpanTag></SpanTag>
        <TitleTag>{props.title}</TitleTag>
      </SectionTag>
      <SectionHeaderSales>
        <SalesType>
          <TitleType>{props.salesType}</TitleType>
          {props.isPromo ? <Timer initialTime={1800} /> : null}
        </SalesType>
        {props.isCarousel ? (
          <ButtonViewAll style={{ width: "159px" }}>View All</ButtonViewAll>
        ) : (
          <SectionButtonCarosel>
            <ButtonCarosel>
              <Image
                src="/assets/icons-arrow-left.png"
                alt="arrow left"
                width={24}
                height={24}
              />
            </ButtonCarosel>
            <ButtonCarosel>
              <Image
                src="/assets/icons-arrow-right.png"
                alt=""
                width={24}
                height={24}
              />
            </ButtonCarosel>
          </SectionButtonCarosel>
        )}
      </SectionHeaderSales>
      <Carosel
        style={{
          overflowX: props.isOverflow ? "hidden" : "hidden",
        }}
      >
        {props.sections.map((section, index) => (
          <SectionCaroselSales
            key={index}
            style={{
              justifyContent: props.isOverflow ? "flex-start" : "center",
              flexWrap: props.isWrap ? "wrap" : "nowrap",
              height: props.isWrap ? "732px" : "350px",
            }}
          >
            {section.sales.map((product, index) => (
              <ContainerProduct key={index}>
                <Sales>
                  <Image
                    src={product.imageURL}
                    alt=""
                    width={product.width}
                    height={product.height}
                    style={{ cursor: "pointer", position: "absolute" }}
                  />
                  <Image
                    src="/assets/icon-heart.png"
                    alt=""
                    width={34}
                    height={34}
                    style={{
                      cursor: "pointer",
                      position: "relative",
                      top: -80,
                      right: -125,
                    }}
                  />
                  <Image
                    src="/assets/icon-eye.png"
                    alt=""
                    width={34}
                    height={34}
                    style={{
                      cursor: "pointer",
                      position: "relative",
                      top: -40,
                      right: -90,
                    }}
                  />
                </Sales>
                <SectionInfo>
                  <ProductName>{product.productName}</ProductName>
                  {product.pastPrice ? (
                    <SectionPrice>
                      <Price>{product.price}</Price>
                      <PastPrice>{product.pastPrice}</PastPrice>
                    </SectionPrice>
                  ) : (
                    <Price>{product.price}</Price>
                  )}
                  <Image
                    src="/assets/rating.png"
                    alt=""
                    width={140}
                    height={20}
                  />
                </SectionInfo>
              </ContainerProduct>
            ))}
          </SectionCaroselSales>
        ))}
      </Carosel>
      {props.isCarousel ? null : (
        <ButtonViewAll>View All Products</ButtonViewAll>
      )}
    </ContainerCaroselSales>
  );
};

export default CaroselSales;
