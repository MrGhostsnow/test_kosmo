// carouselData.ts

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

export const carouselExploreData: CarouselData = {
    title: "Our Products",
    salesType: "Explore Our Products", 
    sections: [
        {
            sales: [
                {
                    imageURL: "https://s3-alpha-sig.figma.com/img/78e7/2711/8c99fe72271cf43f5e3566b39ca7c8f4?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E-x~nNuxBu1d4d~W7RxQAmPWnKE-Vmm9IT6YLC80dV1WfmMy9F3euife1YBRm97VxmwzW04ejBstpNXKG00z8ntZFop7PrQ57I~oHOTJPrseQXliGblwPtm9~u3HD6CHxO8dAuDOznIB7~y2MYR26fIXyTxXWGZDTjRJis5nE9~7mWfOB9ByCRW79DjhNE1BC13MczvctNA92spWQTIdSlDg6KgtMxLhxdPHEplUbZVBJ8g1v1HoczfN1os~846ypn3bTxEdAWUhirmgRMtsfolTnUhk44P7rVSvJGNDKaoctd~F1l3mX~N-jVjbPPB88H5wJSi6EpdKsRyUCKBarg__",
                    productName: "Breed Dry Dog Food",
                    price: "$100",
                    width: 115,
                    height: 180,
                },
                {
                    imageURL: "https://s3-alpha-sig.figma.com/img/e608/92a4/f0a3d5d144dce622c7338ec5be12908f?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AtGgfllrMgrXvcufb9IPg4PIG3pgxLf03gWuEaVu-5QZHe1BT6qpDs874Va0BQGfOzL2ZHLs9thF7Tx0cxFXWd41j5gmPUaz3yXMh3NNQ-qMuafKhq4aeqTGmR1M1Bv1bcb3lxV~qnLExEZ5BNPGOW4MsMrauCdED5ovBuU379ZVt6feeqzBoZPBoj-pAZU7fHt1cmb0Zwf~M4XjcWOiBjrUzs6WcV-8BI6aXFR~H117y4VjV1mQgw3kW2VVVsi5VSazwW~3oc3-Lq7mX1hxIbr76osl79WdT3xHFN7aEYXZfggDT2KYM6XwC~vVWpY7pmfaIn198LGNEIhL39ZBwA__",
                    productName: "CANON EOS DSLR Camera",
                    price: "$360",
                    width: 166,
                    height: 163,
                },
                {
                    imageURL: "https://s3-alpha-sig.figma.com/img/203b/e522/b7b02d10672f6f6147762cf52bfcfc54?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U2POVDkYsJN9qZFU1vJLW12tYD2NczjYA6yyotDJDJqWppdfTQTP9xUUP0jLCaTOkeoYHfpN9u5pbD77fjXLMkV7v7KrJUCoPi9lO9oV-rasPyjNaMdulqzgwotnUjqIgPrACNbMu0cwkbcFv2wA2UrzjJOqtDiCKYhAycMiLBxC-D2dAC0dY~dU9uIUsLYN19Yi3HWJhakWQxJ~ftUd4xIRt2WkHqw5tg-HwdJO9tNzR4nX9iT-uMvwoKAmB4QrokqJfrV6miaQMavrv8UWVvQdZuT37zWMJd5pDrIdU11U5IuK4EjsI8CLqMFJpG1vXg3BQX6aBeIxXT6Q2u9xpg__",
                    productName: "ASUS FHD Gaming Laptop",
                    price: "$700",
                    width: 172,
                    height: 180,
                },
                {
                    imageURL: "https://s3-alpha-sig.figma.com/img/e7bd/d116/62ea1dfc2d615a5bb054e139a764f306?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YEg8YG-EO9ajehSy-n53~or8ZoxBkmVqocY5ph~fOiAURxsKRUBNXPbfJH4dAUvBWrjIL5dVpeSf~61uRHqCSMfkK8gplhgtbQQ-hwPaXpxYxFaoLIPg7ZeX1GQo-hXsjn3TJ-bHR2pJLZGYWIhYAMD1YHbxF-F7S2NN~NMl6ym6irftauIP7u1ZNjKme-E0fCQgR65Xjj3oHS6gIMYSNuF~vRJnCxDwlq1CWe8JWiToMwmPnoGHtdN4W-b7HxrEjmCEysmm3aymTLm2UJlKeR9p9GldJLKYZ14jVDVwIBOqOphA14oIz0fgKxOBQxkEBXo42tFFNFh0ojM1yiiyqQ__",
                    productName: "Curology Product Set",
                    price: "$500",
                    width: 202,
                    height: 209,
                },
                {
                    imageURL: "https://s3-alpha-sig.figma.com/img/5f4e/a9ac/f805319ddf3897fc9daaf58559542260?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cmzipiNvlNnJmLHqXzzNG079rCwccbDgddGUHA04MttFjIk6y2je8iSZXhAoql0yvgG8ix6MnJvAHsmfpJZKclj7lcavwa1jPVeDUjnbaQxoEt84CKiwPk0nlD2UJqXgOZAVoPKGnLlUlE~k3chM5nYYu2issY3HAvuiRPiqrS6A6LtvTCI6-9ltfnLkF9zJ2CwmjdPVENOgNB5dz-nb91G9oUpqMgVLJMrvYXvftzD5goJ3FLGF00hWCgkqc5Osvm4KOcT-bjXd53M5lvFa-GX2m4yuWTHDyNIVikO0-ciJm07YUjQ2XQ7hiQBzPqwkSsKnqysRFZXz3e635Qpb-Q__",
                    productName: "Kids Electric Car",
                    price: "$960",
                    width: 150,
                    height: 133,
                },
                {
                    imageURL: "https://s3-alpha-sig.figma.com/img/d0b7/bb25/884f6fdfc1357634d7d7b09e05755c2f?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OK3CzoJ-0rX32BLYjH3m14BHBg2Ayw2CFii4rLuc1FhYZa0OXA7UXE1SxIcPta1QChShUwo-iT0abP7pJBNL9ylfh0VJ2VOaOWtq8bXA9zPdgvmDQi-l5nKWBrRLR4j7t4yzTeIAftMgdV534N1gUws~T8X4STAYcIcezcDr~-xUu4XmKyytAC66W5Td4HgmaEszLPQL3BNTNocSFWhOAcKVV9yFS2JwwqDNQ8pxrqsD1-Y6Riw8bPpC1DgOgjVnuyfk1rjzjNR8Ukzmq0z~TNurDrmj72OVZnGHvTrAEjWmhLEGiCbtEIWHO1B5W5yuv4GtsX4YKcaP-aB9jnzRFQ__",
                    productName: "Jr. Zoom Soccer Cleats",
                    price: "$1160",
                    width: 186,
                    height: 164,
                },
                {
                    imageURL: "https://s3-alpha-sig.figma.com/img/288e/0133/65fe639fccc1fe4168fca740ef1f85e7?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mls0U4I~AmqDpF~ojhtM0BxYHnC3REr2qXIjYGqVuyBdcq4tAYsaRgcQaiAPa-DFGBuJiZbDJAHS6ildDJGe9HJfIlNeEWq2lPrsFPSLp0-NLaTBQWLvRHlCDTNQdccUpfsRy-UO1O87LuGZQZcW2rJx-186E57enL995hmBCUDSu4qmPB8ZOTxRngC9NuuwTOpU9iJlbtobiVnxEoofLnr8G3oS738cSDQ7XMwn-OTuroAeNHlQ2MbPp5IqiChDjEYso1Q7K7SpsjKRFLx2bDWptaV8JZevSx87FnAW6aKGIMtP1rEopaQE-efcLjpb23XoiI-T~cpqVhG-dvVtLw__",
                    productName: "GP11 Shooter USB Gamepad",
                    price: "$660",
                    width: 278,
                    height: 170,
                },
                {
                    imageURL: "https://s3-alpha-sig.figma.com/img/04a1/915f/d6cedd7c8b1073685c5f1be1b50e1ac6?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hiieYjbVKIwV8npqj6XWlkA-9hdt5ieA9LLgnKhqvBxw8cXiD-sRDJe65TVEcm~DV2guE6hbKZdcd27T9vCWbOWEmR7R2FIbiVn8ow3QXGWZcgVmi~QgyW0n6hERpVkPrhD56fqQBfGdUqLVXfpmf1xJQwf3mBfDtVkEY5udt7wPWJtzPuOGRNZUWPJCnGgpBGzgP83FDnNkrv2OGjPGzUrL-MJiyKPALWQdvjC2tgMFcpnZJ-WWLu4XiqLGzBX5~jvI6qQIoXk2HXx3LHdEug1wnQLElbkfo7VxMapHAOvr3UwVpAdxSe2z8vW75erjiNfHJjeJpVCjQm~7OXoH6w__",
                    productName: "Quilted Satin Jacket",
                    price: "$660",
                    width: 182,
                    height: 179,
                },
            ]
        },
    ],
};
