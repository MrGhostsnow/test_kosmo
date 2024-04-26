import { SectionCarouselCategoriesProps } from "./SectionCategories";

export interface CarouselCategoriesProps {
    title: string;
    salesType: string;
    sections: SectionCarouselCategoriesProps[];
    isCarousel?: boolean;
    isOverflow?: boolean;
    isWrap?: boolean;
  }