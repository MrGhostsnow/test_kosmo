"use client";
import Image from "next/image";
import LogInForm from "./Form/FormLogIn";
import SignUpForm from "./Form/FormSignUp";
import { ContainerLogIn } from "./styles";

export default function LogIn() {
  return (
    <ContainerLogIn>
      <Image src="/assets/side-image.png" width={805} height={706} alt="logo" />
      {/* <SignUpForm /> */}
      <LogInForm />
    </ContainerLogIn>
  );
}
