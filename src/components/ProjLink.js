import React, { Component } from 'react'
import styled from "styled-components"
import { GREYACCENT, BLACK } from "../constants/"

class ProjLink extends Component {
    state = {
        bool: false,
        color: 'white'
    }

    setColor(color) {
        // if(color == 'purple') {
        //     this.state.color = '#e4c0ffd0'
        // }
        // if(color == 'green') {
        //     this.state.color = '#c0ffc2d0'
        // }
        // if(color == 'yellow') {
        //     this.state.color = '#fff7c0d0'
        // }
        switch(color) {
            case 'purple':
                this.state.color = '#e4c0ffd0'
                break
            case 'yellow':
                this.state.color = '#fff7c0d0'
                break
            case 'green':
                this.state.color = '#c0ffc2d0'
                break
            case 'red':
                this.state.color = '#ffc0c9d0'
                break
            case 'blue':
                this.state.color = '#c0dfffd0'
                break
            case 'orange':
                this.state.color = '#ffd7c0d0'
                break
        }
    }

    componentWillMount() {
        this.setColor(this.props.color)
    }

    render() {
        const { bool, color } = this.state

        return (
            <Work>
                <ImgWrap bool={bool}>
                    <img src={ this.props.imgSrc }></img>
                </ImgWrap>
                <OL1
                    color={color}
                    onMouseOver={() => this.setState({ bool: true })} onMouseOut={() => this.setState({ bool: false })}/>
                <OL2
                    color={color}
                    onMouseOver={() => this.setState({ bool: true })} onMouseOut={() => this.setState({ bool: false })}/>
                <ProjName>
                    <h3>{ this.props.projName }</h3>
                </ProjName>
            </Work>
        )
    }
}


const Work = styled.div`
    width: 22vw;
    height: 22vw;
    margin-bottom: 3.5vw;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
  
const ProjName = styled.div`
    width: 100%;
    height: 40px;
    background: #24292e80;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3 {
        z-index: 1;
        color: white;
        font-size: 16px;
    }
`

const ImgWrap = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: absolute;
    img {
        width: 164%;
        // background-size: ${({ bool }) => bool ? "164%" : "144%"};
        position: relative;
        left: -57px;
        top: -79px;
    }
    div {
        height
    }
`

const OL1 = styled.div`
    width: 22vw;
    height: 11vw;
    background: ${({ color }) => color};
    position: absolute;
    bottom: 0;
`

const OL2 = styled.div`
    width: 22vw;
    height: 11vw;
    background: ${({ color }) => color};
    position: absolute;
    top: 0;
`

export default ProjLink