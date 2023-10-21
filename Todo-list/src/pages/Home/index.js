import SignUpForm from "./components/Form/SignUp/SignUp";
import LoginForm from "./components/Form/Login/Login";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { flexCenter } from "../../styles/common";
import { useState } from "react";

function HomePage() {
  //ㄴ 로그인 누르면 로그인창, 사인 누르면 사인창뜨게 하기
  const [form, setForm] = useState('login');

  const onFormChange = (e) => {
    const { innerText } = e.target; 
    setForm(innerText.toLowerCase()); // ㄴform이 바뀔때마다 화면 리랜더
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.LoginSelector mode={form} onClick={onFormChange}>LOGIN</S.LoginSelector>
        <S.SingUpSelector mode={form} onClick={onFormChange}>SIGN</S.SingUpSelector>
      </S.Header>
      {form === "login" ? <LoginForm /> : <SignUpForm setForm={setForm} />} 
    </S.Wrapper>
  );
}

export default HomePage;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  padding-bottom: 60px;
  ${flexCenter};
  flex-direction: column;
`;

const Header = styled.header`
  background-color: ${({ theme }) => theme.PALETTE.primary[300]};
  width: 360px;
  height: 48px;
  position: relative;
  display: flex;

  & > div {
    // ㄴ내 자신의 자식 (&는 생략가능)
    height: 100%;
    width: 50%;
    ${flexCenter};
    cursor: pointer;
    :hover {
      background-color: #e0e0e0;
    }
  }
`;

const LoginSelector = styled.div`
  background-color: ${({mode}) => mode === 'login' ? '#e0e0e0' : '#f5f5f5'};
`;

const SingUpSelector = styled.div`
  background-color: ${({mode}) => mode === 'sign' ? '#e0e0e0' : '#f5f5f5'};
`;

const S = {
  Wrapper,
  Header,
  LoginSelector,
  SingUpSelector,
}
