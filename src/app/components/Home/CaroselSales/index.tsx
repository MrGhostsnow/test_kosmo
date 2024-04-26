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

import arrowLeft from "../../../../public/assets/icon_arrow-left.png";
import arrowRight from "../../../../public/assets/icon_arrow-right.png";

interface Product {
  imageURL: string;
  productName: string;
  price: string;
  pastPrice: string;
  width: number;
  height: number;
}

interface SectionCaroselSalesProps {
  sales: Product[];
}

interface CaroselSalesProps {
  title: string;
  salesType: string;
  sections: SectionCaroselSalesProps[];
}

const CaroselSales: React.FC<CaroselSalesProps> = (props) => {
  return (
    <ContainerCaroselSales>
      <SectionTag>
        <SpanTag></SpanTag>
        <TitleTag>{props.title}</TitleTag>
      </SectionTag>
      <SectionHeaderSales>
        <SalesType>
          <TitleType>{props.salesType}</TitleType>
          <Timer initialTime={1800} />
        </SalesType>
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
      </SectionHeaderSales>
      <Carosel>
        {props.sections.map((section, index) => (
          <SectionCaroselSales key={index}>
            {section.sales.map((product, index) => (
              <ContainerProduct>
                <Sales key={index}>
                  <Image
                    src={product.imageURL}
                    alt=""
                    width={product.width}
                    height={product.height}
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
      <ButtonViewAll>View All Products</ButtonViewAll>
    </ContainerCaroselSales>
  );
};

export default CaroselSales;
