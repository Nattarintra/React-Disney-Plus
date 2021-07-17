import React from "react"
import styled from "styled-components"

function Login() {
  return (
    <Component>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et inventore aliquid sed eveniet, iure rem facere ducimus ratione praesentium nemo reprehenderit distinctio illo non.</Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Component>
  )
}

export default Login

const Component = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url("/images/login-background.jpg");
    opacity: 0.7;
    z-index: -1;
  }
`
const CTA = styled.div`
  max-width: 650px;
  width: 90%;
  padding: 80px 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
`
const CTALogoOne = styled.img``

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background: #0483ee;
  }
`
const Description = styled.p`
  font-size: 11px;
  line-height: 1.5;
  letter-spacing: 1.5px;
  text-align: center;
`
const CTALogoTwo = styled.img`
  width: 90%;
`
