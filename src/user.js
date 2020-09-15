import React from 'react'
import styled from "@emotion/styled"
const Container = styled.div`
  height: 40px;
  width: 100%;
`
const Oval = styled.div`
  width: 32px;
  height: 32px;
  background: #ecf2f8;
  border-radius: 50px;
`
const Avatar = styled.div`
  ${Oval};
  margin-right: 16px;
`
const Metadata = styled.div``
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
      <Avatar />
      <Metadata>
        <Name>Michelle Appleton</Name>
        <Date>28 Jun 2020</Date>
      </Metadata>
    </Container>
  )
}

export default User
