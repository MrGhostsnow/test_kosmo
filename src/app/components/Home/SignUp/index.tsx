"use client";
import Image from "next/image";
import Footer from "../../Footer";
import NavBar from "../../NavBar";
import TopHeader from "../../TopHeader";
import SignUpForm from "./Form/FormSignUp";
import { ContainerLogIn } from "./styles";

export default function CreateAccount() {
  return (
    <>
      <TopHeader />
      <NavBar />
      <ContainerLogIn>
        <Image
          src="/assets/side-image.png"
          width={805}
          height={706}
          alt="logo"
        />
        <SignUpForm />
      </ContainerLogIn>
      <Footer />
    </>
  );
}
