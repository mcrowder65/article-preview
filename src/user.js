import React from "react"
import styled from "@emotion/styled"
import avatar from "./avatar.png"
import Share from "./share"

const Container = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    > img {
      height: 40px;
      width: 40px;
      margin-right: 16px;
    }
  }
`
const Oval = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background: #ecf2f8;
  border-radius: 50px;
`
const Metadata = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`
const Name = styled.div`
  font-family: sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.121875px;
  color: #48556a;
`

const Date = styled.div`
  font-family: sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.121875px;

  color: #9daec2;
`

function User() {
  return (
    <Container>
      <div>
        <img src={avatar} alt="avatar" />
        <Metadata>
          <Name>Michelle Appleton</Name>
          <Date>28 Jun 2020</Date>
        </Metadata>
      </div>
      <Oval>
        <Share />
      </Oval>
    </Container>
  )
}

export default User
