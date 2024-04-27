"use client";
import Image from "next/image";
import {
  ContainerFooter,
  ContentFooter,
  MainColumn,
  Logo,
  TextColumn,
  InfoColumn,
  InfoColumnDownload,
  InputColumn,
  SectionImagesDownload,
  SectionDownload,
  SocialMedia,
  IconSend,
  CopyRight,
} from "./styles";

import qrCode from "../../../../public/assets/qr-code.png";
import appStore from "../../../../public/assets/appstore.png";
import googlePlay from "../../../../public/assets/googleplay.png";
import iconFacebook from "../../../../public/assets/icon-facebook.png";
import iconTwitter from "../../../../public/assets/icon-twitter.png";
import iconInstagram from "../../../../public/assets/icon-instagram.png";
import iconLinkedin from "../../../../public/assets/icon-linkedin.png";
import iconSend from "../../../../public/assets/icon-send.png";
import Link from "next/link";

export default function Footer() {
  return (
    <ContainerFooter>
      <ContentFooter>
        <MainColumn>
          <Logo>Exclusive</Logo>
          <TextColumn>Subscrive</TextColumn>
          <InfoColumn>Get 10% off your first order</InfoColumn>
          <InputColumn placeholder="Enter your email" />
          <IconSend>
            <Image src={iconSend} width={24} height={24} alt="search logo" />
          </IconSend>
        </MainColumn>
        <MainColumn>
          <TextColumn>Support</TextColumn>
          <InfoColumn>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</InfoColumn>
          <InfoColumn>exclusive@gmail.com</InfoColumn>
          <InfoColumn>+88015-88888-9999</InfoColumn>
        </MainColumn>
        <MainColumn>
          <TextColumn>Acount</TextColumn>
          <InfoColumn>My Account</InfoColumn>
          <Link href="/signup">
            <InfoColumn>Login / Register</InfoColumn>
          </Link>
          <InfoColumn>Cart</InfoColumn>
          <InfoColumn>Wishlist</InfoColumn>
          <InfoColumn>Shop</InfoColumn>
        </MainColumn>
        <MainColumn>
          <TextColumn>Quick Link</TextColumn>
          <InfoColumn>Privacy Policy</InfoColumn>
          <InfoColumn>Terms Of Use</InfoColumn>
          <InfoColumn>FAQ</InfoColumn>
          <InfoColumn>Contact</InfoColumn>
        </MainColumn>
        <MainColumn>
          <TextColumn>Download App</TextColumn>
          <InfoColumnDownload>
            Save $3 with App New User Only
          </InfoColumnDownload>
          <SectionImagesDownload>
            <Image src={qrCode} alt="qr code" width={80} height={80} />
            <SectionDownload>
              <Image
                src={googlePlay}
                alt="google play"
                width={110}
                height={40}
              />
              <Image src={appStore} alt="app store" width={110} height={40} />
            </SectionDownload>
          </SectionImagesDownload>
          <SocialMedia>
            <Image src={iconFacebook} alt="facebook" width={24} height={24} />
            <Image src={iconTwitter} alt="twitter" width={24} height={24} />
            <Image src={iconInstagram} alt="instagram" width={24} height={24} />
            <Image src={iconLinkedin} alt="linkedin" width={24} height={24} />
          </SocialMedia>
        </MainColumn>
      </ContentFooter>
      {/* <CopyRight>Copyright 2022 Exclusive. All Rights Reserved</CopyRight> */}
    </ContainerFooter>
  );
}
