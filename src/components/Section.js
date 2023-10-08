import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';

function Section({title, description, leftBtn, rightBtn, backgroundImg}) {
  return (
    <Wrap bgImg ={backgroundImg}>
      <Fade bottom>
      <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
      </ItemText>
      </Fade>


      <Choices>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>
              {leftBtn}
            </LeftButton>
            {rightBtn &&
            <RightButton>
            {rightBtn}
            </RightButton>
            }

          </ButtonGroup>
        </Fade>

        <DownArrow src="/images/down-arrow.svg"/>

      </Choices>

    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('/images/model-s.jpg');
  background-size: cover;
  background-position: centre;
  background-reapeat: no-repeat;
  display: flex;
  flex-direction : column;
  justify-content: space-between;
  align-items: center; //horizontal
  background-image: ${props =>`url("/images/${props.bgImg}")`}
`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: centre;
`
const ButtonGroup = styled.div`
display: flex;
margin-bottom: 30px;
@media(max-width:768px){
  flex-direction: col
}
`

const LeftButton = styled.div`
background-color: black;
width: 256px;
height:40px;
color:white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.85;
margin:20px;
font-size: 15px;
text-transform: uppercase;
cursor: pointer;
`
const RightButton  =styled(LeftButton)`
  background: white;
  opacity: 0.85;
  color: black;
`
const DownArrow = styled.img`
  height:40px;
  overflow-x: hidden;
  animation: animateArrow infinite 1.5s;
`
const Choices = styled.div``

