"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TimerContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
`;

const TimerSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`;

const Hours = styled.span`
  font-size: 32px;
  font-weight: 700;
  line-height: 30px;
  color: #000;
`;

const TimerLabel = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: #000;
`;

const Span = styled.span`
  width: 4px;
  height: 4px;
  display: flex;
  color: #e07575;
  gap: 8px;
  font-size: 18px;
  font-weight: 700;
`;

interface TimerProps {
  initialTime: number;
}

const Timer: React.FC<TimerProps> = ({ initialTime }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <TimerContainer>
      <TimerSection>
        <TimerLabel>Hours</TimerLabel>
        <Hours>{hours}</Hours>
      </TimerSection>
      <Span>:</Span>
      <TimerSection>
        <TimerLabel>Minutes</TimerLabel>
        <Hours>{minutes}</Hours>
      </TimerSection>
      <Span>:</Span>
      <TimerSection>
        <TimerLabel> Seconds</TimerLabel>
        <Hours>{seconds}</Hours>
      </TimerSection>
    </TimerContainer>
  );
};

export default Timer;
