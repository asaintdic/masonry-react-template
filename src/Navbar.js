import React, { useState } from 'react'
import styled from 'styled-components'
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import SearchIcon from '@material-ui/icons/Search'
import TextsmsIcon from '@material-ui/icons/Textsms'
import FaceIcon from '@material-ui/icons/Face'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import IconButton from '@material-ui/core/IconButton'
import { Link } from 'react-router-dom'


function Navbar() {
    const [input, setInput] = useState("")
    return (
       
            <Wrapper>
                <LogoWrapper>
                    <IconButton>
                       <FitnessCenterIcon /> 
                    </IconButton>
                </LogoWrapper>
                <HomePageButton>
                    <Link to="/">HomePage</Link>

                </HomePageButton>
                <WorkoutsButton> 
                    <Link to="/workouts">Workouts</Link>
                </WorkoutsButton>
                <ExercisesButton> 
                    <Link to="/exercises">Exercises</Link>
                </ExercisesButton>
                <SearchWrapper> 
                    <SearchBarWrapper>
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                        <form>
                            <input type="text" />
                            <button type="submit" ></button>
                        </form>
                    </SearchBarWrapper>
                </SearchWrapper>
                <IconsWrapper>
                    <IconButton>
                        <TextsmsIcon />
                    </IconButton>
                    <IconButton>
                        <FaceIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardArrowDownIcon />
                    </IconButton>
                </IconsWrapper>
            </Wrapper>
      
    )
}
   
     


export default Navbar

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 56px;
    padding: 12px 4px 4px 16px;
    background-color: white;
    color: black;
`

const LogoWrapper = styled.div`
    .MuiSvgicon-root {
        color: blue;
        font-size: 32px;
        cursor: pointer;
    }`

const HomePageButton = styled.div`
    display: flex;
    height: 48px;
    min-width: 123px;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    cursor: pointer;
    background-color: rgb(17, 17, 17);
        
    a {
        text-decoration: none;
        color: white;
        font-weight: 700;
    }`

const WorkoutsButton = styled.div`
    display: flex;
    height: 48px;
    min-width: 123px;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    cursor: pointer;
    background-color: white;
        
    a {
        text-decoration: none;
        color: black;
        font-weight: 700;
    }
    
    :hover {
        background-color: #e1e1e1;
    }`

const ExercisesButton = styled.div`
display: flex;
height: 48px;
min-width: 123px;
align-items: center;
justify-content: center;
border-radius: 24px;
cursor: pointer;
background-color: white;
    
a {
    text-decoration: none;
    color: black;
    font-weight: 700;
}

:hover {
    background-color: #e1e1e1;
}`

const SearchWrapper = styled.div`
    flex: 1;
`

const SearchBarWrapper = styled.div`
    background-color: #efefef;
    display: flex;
    height: 48px;
    width: 100%;
    border-radius: 50px;
    border: none;
    padding-left: 10px;

    form {
        display: flex;
        flex: 1;
    }

    form > input {
        background-color: transparent;
        border: none;
        width: 100%;
        margin-left: 5px;
        font-size: 16px;
    }

    form > button {
        display: none;
    }

    input:focus{
        outline:none;
    }
`
const IconsWrapper = styled.div``