import React, { Component } from 'react'
import styled from "styled-components"

const Divider = () => {
    return (
        <DividerContainer>
            <img alt="" src="/assets/img/divider.svg" />
        </DividerContainer>
    )
}

const DividerContainer = styled.div`
  width: 30%;
  margin-top: 14px;
  img{
    width: 100%;
    opacity: 0.75;
  }
`

export default Divider