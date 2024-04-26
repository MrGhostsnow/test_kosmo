import {
  ContainerBannerOffer,
  ContentBanner,
  Title,
  Subtitle,
  OfferTime,
  Button,
  SectionTime,
  Span,
} from "./styles";
import Image from "next/image";

export default function BannerOffer() {
  return (
    <ContainerBannerOffer>
      <ContentBanner>
        <Title>Categories</Title>
        <Subtitle>Enhance Your Music Experience</Subtitle>
        <OfferTime>
          <SectionTime>
            23 <Span>Hours</Span>
          </SectionTime>
          <SectionTime>
            59 <Span>Minutes</Span>
          </SectionTime>
          <SectionTime>
            {" "}
            35 <Span>Seconds</Span>
          </SectionTime>
        </OfferTime>
        <Button>Buy Now!</Button>
      </ContentBanner>
      <Image
        src="https://s3-alpha-sig.figma.com/img/3cc9/43ca/7e210f637fc0504b7d93cd207df744c2?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M2tgc-WzAxMgg7Fvx4t1UNEad2DBijzkYPvp5RgDrdtSvZij29ClT6~Fj2pkwOS16AiVDc~W4JIV-8iddRykUn8sj45p2PFl0l12Y-Sj89JIPMOMxMaYt48xNBzhxTl41A6o9~Rwgs6mW6oOs67yOEC87qOf3rdkjD-n~5JvwL09KC3Mv69BqQtb3beGpJ89zOrEWjcE2cG-daYXzJXRtdsP5rSxq3Usc1~nQx-pAL-PZGFL1jOlMhf2EdxYCQ73WVjQpw1pCmhu86q95hHQ45UnivCzHX9N4Zwwk~3BVCbAFsi41skSIVDPXFpX2HqoVDWtsFtwR-Baa0wIg3cBTQ__"
        alt=""
        width={658}
        height={600}
        style={{
          transform: "rotateY(180deg)",
        }}
      />
    </ContainerBannerOffer>
  );
}
