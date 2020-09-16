import React from "react"
import styled from "@emotion/styled"
import User from "./user"
import image from "./image.png"
const Background = styled.div`
  background-color: #ecf2f8;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Card = styled.div`
  background: #ffffff;
  width: 730px;
  height: 280px;
  box-shadow: 0 40px 40px -10px rgba(201, 213, 225, 0.503415);
  border-radius: 10px;
  display: flex;
  @media (max-width: 730px) {
    width: 312px;
    flex-direction: column;
    height: 512px;
  }
`
const Image = styled.img`
  width: 40%;
  @media (max-width: 730px) {
    width: 100%;
    height: 200px;
  }
`
const Words = styled.div`
  padding: 32px 40px 32px 40px;
  > div {
    margin-bottom: 12px;
  }
`
const Title = styled.div`
  font-family: sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.25px;
  color: #48556a;
  @media (max-width: 730px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.2px;
  }
`
const Description = styled.div`
  font-family: sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  /* or 154% */
  letter-spacing: 0.121875px;
  color: #6e8098;
`
const App = () => {
  return (
    <Background>
      <Card>
        <Image src={image} />
        <Words>
          <Title>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </Title>
          <Description>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I've got some simple tips to help
            you make any room feel complete
          </Description>
          <User />
        </Words>
      </Card>
    </Background>
  )
}

export default App
