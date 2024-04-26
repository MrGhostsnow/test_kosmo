"use client";
import {
  ContainerCaroselCategories,
  SectionTag,
  SpanTag,
  TitleTag,
  SectionHeaderCategories,
  CategoriesType,
  TitleType,
  SectionButtonCarosel,
  ButtonCarosel,
  Carosel,
  SectionCaroselCategories,
  ContainerProduct,
  Categories,
  SectionInfo,
  ProductName,
} from "./styles";
import Image from "next/image";
import { CarouselCategoriesProps } from "../../../interfaces/CategoriesProps";

const CarouselCategories: React.FC<CarouselCategoriesProps> = (props) => {
  return (
    <ContainerCaroselCategories>
      <SectionTag>
        <SpanTag></SpanTag>
        <TitleTag>{props.title}</TitleTag>
      </SectionTag>
      <SectionHeaderCategories>
        <CategoriesType>
          <TitleType>{props.salesType}</TitleType>
        </CategoriesType>
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
      </SectionHeaderCategories>
      <Carosel
        style={{
          overflowX: props.isOverflow ? "scroll" : "hidden",
        }}
      >
        {props.sections.map((section, index) => (
          <SectionCaroselCategories key={index}>
            {section.categories.map((category, index) => (
              <ContainerProduct>
                <Categories
                  key={index}
                  style={{
                    backgroundColor: category.isSelected ? "#DB4444" : "ffffff",
                    border: category.isSelected
                      ? "none"
                      : "1px solid #0000004D",
                  }}
                >
                  <Image
                    src={category.imageURL}
                    alt=""
                    width={56}
                    height={56}
                  />
                  <ProductName
                    style={{
                      color: category.isSelected ? "#ffffff" : "#000000",
                    }}
                  >
                    {category.categoryName}
                  </ProductName>
                </Categories>
              </ContainerProduct>
            ))}
          </SectionCaroselCategories>
        ))}
      </Carosel>
    </ContainerCaroselCategories>
  );
};

export default CarouselCategories;
