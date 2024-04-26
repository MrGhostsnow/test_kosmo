import { SectionCaroselSalesProps } from "./SectionCarouselSales";

  
 export  interface CaroselSalesProps {
    title: string;
    salesType: string;
    sections: SectionCaroselSalesProps[];
    isCarousel?: boolean;
    isOverflow?: boolean;
    isWrap?: boolean;
    isPromo?: boolean;
    isBorder?: boolean;
  }