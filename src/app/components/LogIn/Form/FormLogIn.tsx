"use client";
import styled from "styled-components";
import { useState } from "react";
import Image from "next/image";

const LogInForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <FormContainer>
      <SectionTitle>
        <Title>Log in to Exclusive</Title>
        <Subtitle>Enter your details below</Subtitle>
      </SectionTitle>
      <Form onSubmit={handleSubmit}>
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
          <Button type="submit">Log In</Button>
          <GoogleSignUpButton>Forget Password?</GoogleSignUpButton>
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
  align-items: center;
  gap: 87px;
`;

const Button = styled.button`
  background-color: #db4444;
  color: #fff;
  width: 143px;
  height: 56px;
  border: none;
  border-radius: 4px;
  padding: 16px 48px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #fafafa;
  display: flex;
  align-items: center;
`;

const GoogleSignUpButton = styled.button`
  background-color: #fff;
  color: #db4444;
  width: 141px;
  height: 24px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  display: flex;
  align-items: center;
`;

export default LogInForm;
