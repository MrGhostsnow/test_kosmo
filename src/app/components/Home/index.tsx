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
import CaroselSales from "./CaroselSales";
import CarouselCategories from "./CarouselCategories";
import { carouselFlashData } from "@/app/data/carouselFlashData";
import { carouselBestSalesData } from "@/app/data/carouselBestSalesData";
import { carouselExploreData } from "@/app/data/carouselExploreData";
import { carouselCategoriesData } from "@/app/data/carouselCategories";
import NewArrival from "./NewArrival";
import SalesBenefits from "./SalesBenefits";

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
      <CaroselSales
        {...carouselFlashData}
        isCarousel={false}
        isOverflow={true}
        isWrap={false}
        isPromo={true}
      />
      <CarouselCategories {...carouselCategoriesData} />
      <CaroselSales
        {...carouselBestSalesData}
        isCarousel={true}
        isOverflow={false}
      />
      <CaroselSales
        {...carouselExploreData}
        isCarousel={false}
        isOverflow={false}
        isWrap={true}
      />

      <NewArrival />

      <SalesBenefits />
    </ContainerHome>
  );
}
