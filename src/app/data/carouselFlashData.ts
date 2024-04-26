// carouselData.ts

export interface Product {
    imageURL: string;
    productName: string;
    price: string;
    width: number;
    height: number;
    pastPrice: string;
}

export interface Section {
    sales: Product[];
}

export interface CarouselData {
    title: string;
    salesType: string;
    sections: Section[];
}

export const carouselFlashData: CarouselData = {
    title: "Today's",
    salesType: "Flash Sales",
    sections: [
        {
            sales: [
                {
                    imageURL: "https://s3-alpha-sig.figma.com/img/5d5c/2e52/50752d55f8b60f2aa2923183dadbc135?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jpu8ivXL0FNai8359Z3nIbcBPlPRZWclSK9DVSXK2z6rPSFX~cXfi7EWpKzYCXV-sbW8LixlFUU62NYzjIk0L3k0PADrUB59HMSOLu8uEWJMT9KNnzxlDR49IyaxRuEb8-PwArYXwGxscQizV2GBunuEvXmNc-EwKlbCEawHhsZgmXWJNAjcVO9t7PcAODuj~DcPg23-jX9UJWSjajX-8KTI44dkFk2TzwuCZQ3SwCyJouJwjLJ4YjL~kmQIUSyhH37HAAqwd5zQcPmdyBZNeC-E-V5cb6SN854EybWCVk4itStBVgjprNBfa42HN9vWiW18KWgSeSELXfeU2Uf~HA__",
                    productName: "HAVIT HV-G92 Gamepad",
                    price: "$120",
                    width: 172,
                    height: 152,
                    pastPrice: "$160",
                },
                {
                    imageURL: "https://s3-alpha-sig.figma.com/img/e59d/9f34/8cc24eeff489863523b63971c3ff8e4a?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OVJFBpSze9bpB77UpQV3vk8NxI52L4Nr7Wmv-pTTK-5nGFRnqgyC1mURQu0wqvyvPhz7z45e927LFIhF1HK14W92bfPo9mvp4GAmVrHoxAgXsF4W63wkVw4~0-0Jx3v-9Ot2OffwZoONmdF5KmVvD~LlskwlAnRk-I3jNWo6PAqHrRt2xXkCBQJ6CeQBDZyMqNIXwkGhYL2VCx08m95ZT-i0FvyDbIN1GWQ0rhCUL8ouy8F8iPe8xZftYTPihtYe8Sr5qHrNz0hvBhUM9E-Cz7Ha3nAEUzYCQHlNaXXdkZC6V5M1m9L2wLwa8jERIzAHTeu51zo-AK7CIpBcG0qFWg__",
                    productName: "AK-900 Wired Keyboard",
                    price: "$960",
                    width: 191,
                    height: 101,
                    pastPrice: "$1160",
                },
                {
                    imageURL: "https://s3-alpha-sig.figma.com/img/5e63/4682/db5174aff99bb9337d2dc9598a0b44e4?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o6587HJwzwCFwG9RNvad45On1Nd6HaJxKyP-BPpV61gIkWjI7a1mSJfdy6Kewn~jva~gAZpc7L~RtjDs1N6IJpKImDdoMuD1V~Hou4dlIyjhP4WuFvJ30o9HKkTt9szVLd3yNx2xqwDbkC88kgOIX94~nE81YpZEekCk1BdH8X6cBwaMt1PzzWn8C9T5FSuoVryzwOU1S9h5bsXl~wd7Aca6AiYQv5ANQbwGuenZdxxeeGEVRDLCAF4KzdQn66uhI2iDZOjAi-1jlA75xfYdnLWTcn2GVUZpj-kAQ382F7N7O9wwuo-um2U1b3qJLm1hquBt92YYW7DXCHJawCJXKQ__",
                    productName: "IPS LCD Gaming Monitor",
                    price: "$370",
                    width: 180,
                    height: 179,
                    pastPrice: "$400",
                },
                {
                    imageURL: "https://s3-alpha-sig.figma.com/img/288d/a330/273c46e1c3dc0a8915c4b031d0345347?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HqiwD8XT8kOiLqjnx3T7UIgL67BJZN~UfbZZoGbIPo7RFYHlAQewymVrMXTrxbKYZS6L6Dvw0J-UheFueCSY5~YK73c1MkQ9H0Fd7blT1aZpjf67Kp9E7L2O0N2idrU4wOPCajTHX~h6W8F7iv8-4ftTbjsOKdiXyQA60hDOu8SOf3G9C3ixdkXpI17dMeAkOIL~iARgH3E6DVwmFzgfWPfII5REgdBmD2w5cUqftU-fnCN02ZWb3kF7BjUpLFJgBm7RRDkld2tEJl0OcgwFxGgejB~57RqExFKjxNwlzBdnWAc5B5r5hHXOTqOB~E9qxfotOmZUkTduXQfW0pIg7A__",
                    productName: "S-Series Comfort Chair ",
                    price: "$375",
                    width: 157,
                    height: 180,
                    pastPrice: "$400",
                },
                {
                    imageURL: "https://s3-alpha-sig.figma.com/img/288d/a330/273c46e1c3dc0a8915c4b031d0345347?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HqiwD8XT8kOiLqjnx3T7UIgL67BJZN~UfbZZoGbIPo7RFYHlAQewymVrMXTrxbKYZS6L6Dvw0J-UheFueCSY5~YK73c1MkQ9H0Fd7blT1aZpjf67Kp9E7L2O0N2idrU4wOPCajTHX~h6W8F7iv8-4ftTbjsOKdiXyQA60hDOu8SOf3G9C3ixdkXpI17dMeAkOIL~iARgH3E6DVwmFzgfWPfII5REgdBmD2w5cUqftU-fnCN02ZWb3kF7BjUpLFJgBm7RRDkld2tEJl0OcgwFxGgejB~57RqExFKjxNwlzBdnWAc5B5r5hHXOTqOB~E9qxfotOmZUkTduXQfW0pIg7A__",
                    productName: "S-Series Comfort Chair ",
                    price: "$375",
                    width: 157,
                    height: 180,
                    pastPrice: "$400",
                },
                {
                    imageURL: "https://s3-alpha-sig.figma.com/img/288d/a330/273c46e1c3dc0a8915c4b031d0345347?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HqiwD8XT8kOiLqjnx3T7UIgL67BJZN~UfbZZoGbIPo7RFYHlAQewymVrMXTrxbKYZS6L6Dvw0J-UheFueCSY5~YK73c1MkQ9H0Fd7blT1aZpjf67Kp9E7L2O0N2idrU4wOPCajTHX~h6W8F7iv8-4ftTbjsOKdiXyQA60hDOu8SOf3G9C3ixdkXpI17dMeAkOIL~iARgH3E6DVwmFzgfWPfII5REgdBmD2w5cUqftU-fnCN02ZWb3kF7BjUpLFJgBm7RRDkld2tEJl0OcgwFxGgejB~57RqExFKjxNwlzBdnWAc5B5r5hHXOTqOB~E9qxfotOmZUkTduXQfW0pIg7A__",
                    productName: "S-Series Comfort Chair ",
                    price: "$375",
                    width: 157,
                    height: 180,
                    pastPrice: "$400",
                },
            ]
        },
    ],
};
