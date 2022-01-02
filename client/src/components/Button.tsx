import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';

interface Props {
  onClick: MouseEventHandler;
  children: string;
}

const Wrapper = styled.div`
  align-items: center;
  background: linear-gradient(300deg, rgba(8, 212, 105, 1) 56%, rgba(109, 255, 69, 1) 100%);
  border: 0;
  border-radius: 10px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 700;
  height: 54px;
  justify-content: center;
  letter-spacing: 0.4px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 3px;
  text-decoration: none;
  text-transform: uppercase;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 250px;

  &:active {
    outline: 0;
  }

  &:hover {
    outline: 0;
  }

  &:hover span {
    transform: scale(0.9);
    opacity: 0.75;
  }

  @media screen and (max-width: 991px) {
    font-size: 15px;
    height: 50px;
  }
`;

const Text = styled.span`
  transition: all 200ms;
`;

function Button({ children, onClick }: Props) {
  return (
    <Wrapper onClick={onClick}>
      <Text>{children}</Text>
    </Wrapper>
  );
}

export default Button;
