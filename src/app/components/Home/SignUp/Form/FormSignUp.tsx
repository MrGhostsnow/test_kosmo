"use client";
import styled from "styled-components";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <FormContainer>
      <SectionTitle>
        <Title>Create an account</Title>
        <Subtitle>Enter your details below</Subtitle>
      </SectionTitle>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          placeholder="Name"
        />

        <Input
          type="text"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          placeholder="Email or Phone Number"
        />

        <Input
          type="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          placeholder="Password"
        />
        <ContainerButtons>
          <Button type="submit">Create Account</Button>
          <GoogleSignUpButton>
            {
              <Image
                src="/assets/icon-google.png"
                alt="google"
                width={24}
                height={24}
              />
            }{" "}
            Sign up with Google
          </GoogleSignUpButton>
          <AlreadyHaveAccount>
            Already have an account?{" "}
            <Link href="/login">
              <LogInLink>Log in</LogInLink>
            </Link>
          </AlreadyHaveAccount>
        </ContainerButtons>
      </Form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  width: 371px;
  height: 530px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 24px;
`;

const SectionTitle = styled.div`
  width: 339px;
  height: 78px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 500;
  line-height: 30px;
  color: #000000;
`;

const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #000000;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 40px;
  width: 100%;
  height: 404px;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  outline: none;
`;

const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Button = styled.button`
  background-color: #db4444;
  color: #fff;
  width: 371px;
  height: 56px;
  border: none;
  border-radius: 4px;
  padding: 16px 122px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #fafafa;
`;

const GoogleSignUpButton = styled.button`
  background-color: #fff;
  color: #000000;
  width: 371px;
  height: 56px;
  border: 1px solid #00000066;
  border-radius: 4px;
  padding: 16px 86px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  display: flex;
  align-items: center;
  gap: 14px;
`;

const AlreadyHaveAccount = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #000000;
  align-self: center;
`;

const LogInLink = styled.a`
  text-decoration: underline;
  color: #000000;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export default SignUpForm;
