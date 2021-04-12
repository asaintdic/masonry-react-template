import React from 'react'
import styled from 'styled-components'
import Pin from './Pin.js'

function Mainboard() {
    return (
        <Wrapper>
            <Container>
              < Pin />
            </Container>
        </Wrapper>

    )
}

export default Mainboard

const Wrapper = styled.div`
    background-color: white;
    display: flex;
    height: 100%;
    width: 100%;
    margin-top: 15px;
    justify-content: center;
`

const Container = styled.div`
    display: flex;
    width: 80%;
    background-color: white;

`
