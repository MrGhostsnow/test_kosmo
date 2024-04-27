import { ContainerHome } from "./styles";
import CaroselSales from "./CaroselSales";
import CarouselCategories from "./CarouselCategories";
import { carouselFlashData } from "@/app/data/carouselFlashData";
import { carouselBestSalesData } from "@/app/data/carouselBestSalesData";
import { carouselExploreData } from "@/app/data/carouselExploreData";
import { carouselCategoriesData } from "@/app/data/carouselCategories";
import NewArrival from "./NewArrival";
import SalesBenefits from "./SalesBenefits";
import BannerOffer from "./BannerOffer";
import Footer from "../Footer";
import TopHeader from "../TopHeader";
import NavBar from "../NavBar";
import HeaderHome from "./HeaderHome";

export default function HomePage() {
  return (
    <>
      <TopHeader />
      <NavBar />
      <ContainerHome>
        <HeaderHome />
        <CaroselSales
          {...carouselFlashData}
          isCarousel={false}
          isOverflow={false}
          isWrap={false}
          isPromo={true}
          isBorder={true}
        />
        <CarouselCategories {...carouselCategoriesData} />
        <CaroselSales
          {...carouselBestSalesData}
          isCarousel={true}
          isOverflow={false}
        />
        <BannerOffer />
        <CaroselSales
          {...carouselExploreData}
          isCarousel={false}
          isOverflow={false}
          isWrap={true}
        />
        <NewArrival />
        <SalesBenefits />
      </ContainerHome>
      <Footer />
    </>
  );
}
