
interface Category {
    imageURL: string;
    categoryName: string;
    isSelected?: boolean;
  }
  
  interface Section {
    categories: Category[];
  }
  
  interface CarouselData {
    title: string;
    salesType: string;
    sections: Section[];
  }

export const carouselCategoriesData: CarouselData = {
    title: "Categories",
    salesType: "Browse By Category",
    sections: [
        {
            categories: [
                {
                    imageURL: "/assets/category-phone.png",
                    categoryName: "Phones",
                },
                {
                    imageURL: "/assets/category-computer.png",
                    categoryName: "Computers",
                },
                {
                    imageURL: "/assets/category-smartwatch.png",
                    categoryName: "SmartWatche",
                },
                {
                    imageURL: "/assets/category-camera.png",
                    categoryName: "Camera",
                    isSelected: true,
                },
                {
                    imageURL: "/assets/category-headphone.png",
                    categoryName: "Headphones",
                },
                {
                    imageURL: "/assets/category-gamepad.png",
                    categoryName: "Gaming",
                },
            ]
        },
    ],
};
