import React from "react"
import styled from "@emotion/styled"
import User from "./user"
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
`
const Image = styled.div`
  width: 40%;
  height: 100%;
  border-right: 1px solid lightblue;
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
        <Image />
        <Words>
          <Title>
            Shift the overall look and feel by <br />
            adding these wonderful touches to <br />
            furniture in your home
          </Title>
          <Description>
            Ever been in a room and felt like something was missing? <br />
            Perhaps it felt slightly bare and uninviting. I've got some <br />
            simple tips to help you make any room feel complete
          </Description>
          <User />
        </Words>
      </Card>
    </Background>
  )
}

export default App
