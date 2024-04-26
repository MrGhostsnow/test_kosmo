import {
  ContainerSalesBenefits,
  SalesBenefit,
  TitleBenefit,
  DescriptionBenefit,
} from "./styles";
import Image from "next/image";

export default function SalesBenefits() {
  return (
    <ContainerSalesBenefits>
      <SalesBenefit>
        <Image
          src="/assets/icon-delivery.png"
          alt="delivery"
          width={80}
          height={80}
        />
        <TitleBenefit>FREE AND FAST DELIVERY</TitleBenefit>
        <DescriptionBenefit>
          Free delivery for all orders over $140
        </DescriptionBenefit>
      </SalesBenefit>
      <SalesBenefit>
        <Image
          src="/assets/icon-customer.png"
          alt="delivery"
          width={80}
          height={80}
        />
        <TitleBenefit>24/7 CUSTOMER SERVICE</TitleBenefit>
        <DescriptionBenefit>Friendly 24/7 customer support</DescriptionBenefit>
      </SalesBenefit>
      <SalesBenefit>
        <Image
          src="/assets/icon-security.png"
          alt="delivery"
          width={80}
          height={80}
        />
        <TitleBenefit>MONEY BACK GUARANTEE</TitleBenefit>
        <DescriptionBenefit>We reurn money within 30 days</DescriptionBenefit>
      </SalesBenefit>
    </ContainerSalesBenefits>
  );
}
