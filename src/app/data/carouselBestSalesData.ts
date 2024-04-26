export interface Product {
    imageURL: string;
    productName: string;
    price: string;
    width: number;
    height: number;
    pastPrice?: string;
}

export interface Section {
    sales: Product[];
}

export interface CarouselData {
    title: string;
    salesType: string;
    sections: Section[];
}

export const carouselBestSalesData: CarouselData = {
    title: "This Month's",
    salesType: "Best Sales Products",
    sections: [
        {
            sales: [
                {
                    imageURL: "https://s3-alpha-sig.figma.com/img/ee9a/3800/1e9f94261b28e16ea21bacb4144473e8?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KNowfWYXAgUN-LpSo4yLFevKp-kjaA2JqkwZT4yiFk-0r0JuZbiu~QkZ2I5YaaiO31LR-bVC9ZSAq47xwp9W8GqqNssHcds1guYXNuvkizHBYySHA~BsGagCNq6sUbXLxeYc7COyX~QRXPP4qPcGRwDF6fzR7j9m37BZa-gMEqe0nShD8glaPW3V43qHjZM7Xi08XsdxwjJw5AYSAU0jbpe8z5KxHDZQS606gbV2~N3jmWkb8HZ4eOv-9rfGWrIcK19Mmx1RDbcaHImQi9Emq0vQiNBv8AnV83dNp7YLz5vF54baWFghjg1tqn~fZYWVBbHIJKwwSlmuIn36eiR-bw__",
                    productName: "The north coat",
                    price: "$260",
                    width: 140,
                    height: 146,
                    pastPrice: "$360",
                },
                {
                    imageURL: "https://s3-alpha-sig.figma.com/img/4f3c/a1d1/2722dbdf98f25179d3c0b785988c513d?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cCgRIlL59W~BnvD1zlpHsiKF5unhyXoegksVJo-vXsrRM1dVt7Lhc58kiaieTe6uCwHz2Ge7-8W99~jZj-OynBd7fXZJI1ynZg-SYwwDC5KFMu16lbxivBgbmlhCPetdNpsy4byrvIpX-6yxYxrXQ~jXQAxcNlgnxXfL2u8akh6bd30SNbyDOt6n6XZIUv3zl2X7rZLc~Ow1QQjCFoNK2XPkT-iLkdopI~kp0chJFSTyr9cR~aRFjgk6ADFnsMdqVWTZ2cKz96PTS98xbUD-770p34TTsF1pwtEFZsz1B-f503x5d8txXYS9~BYXLxkREgsesGR~MlDIViotXYny3w__",
                    productName: "Gucci duffle bag",
                    price: "$960",
                    width: 158,
                    height: 139,
                    pastPrice: "$1160",
                },
                {
                    imageURL: "https://s3-alpha-sig.figma.com/img/6739/d39d/c218c97b645d616c8188a4f2e6aaf84b?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MomLCWo~h~PD26~RsZiiaHGl4x5nVuIfLRS~AEamsfgnkIZq4pqEPxO3mEld~wrewN8BxYijMZ9s7vf9Cv~ABjoy53B8Weu3br1ID99VaEOHouBlH1NHcOY~15oYbPKyKhrbQojYylIPVJPp3E4XV~b821ouqV0Ya4tre~qCJ~JBIjDI5sdYW6Ui7KVUI6dtItWRw1M-RTsqf1x0XKEgnamKA4sSpquca0iLwHSVEC2qgJFuIaw6V4sq4cjG80ka3rrgLDysnuyCt~v2JuVRjkzHvz4dS0uYCqFRNLzumUhoQTYMYIIWmt~9ilo-dg6fLssANActBEcvEy1rcr8NhQ__",
                    productName: "RGB liquid CPU Cooler",
                    price: "$160",
                    width: 151,
                    height: 160,
                    pastPrice: "$170",
                },
                {
                    imageURL: "https://s3-alpha-sig.figma.com/img/e86f/6e87/2757d20a14861e2e0ebd4e9889693f59?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DF2RvWBVhDcjyT~zyy5DrqfPuSuvtWlsKkM2GIY~ogrVnUXi9JrLNayT-aYwKlxClg51G1gz6y4zQwSqtUfzvO~6CEjH7Drj9t-Qd9kB02EbWHqNENayi9LP65oN5AbcBV1PphHJ7RL5afm8gaPnPdzWHOWgjVPaR8hI8W71cCWso4GXmnR3dMI8-s5V2-STN2qp68dRD6dbQuMaSlYGieDL-~gytVdm41Yo6ve7SHkfbEcMEK1fVwR4UUoiFJiH5Jo5BMHkztiSsmo3JtVr5rqTBK5zPbPZeHG2FcFG0xiJjEjkQNWrO3A3V2zi1ThiLN4PZbOWm1alDrLbUctAgw__",
                    productName: "S-Series Comfort Chair ",
                    price: "$360",
                    width: 210,
                    height: 176,
                },
            ]
        },
    ],
};
