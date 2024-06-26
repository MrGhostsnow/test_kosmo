"use client";
import Image from "next/image";
import LogInForm from "./Form/FormLogIn";
import { ContainerLogIn } from "./styles";
import Footer from "../Footer";
import NavBar from "../NavBar";
import TopHeader from "../TopHeader";

export default function LogIn() {
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
        <LogInForm />
      </ContainerLogIn>
      <Footer />
    </>
  );
}
