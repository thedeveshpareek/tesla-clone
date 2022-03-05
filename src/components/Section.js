import React from 'react'
import styled from 'styled-components'


const Section = ({title,description,LeftButtontxt,RightButtontxt,backgroungImage}) => {
  return (
    <Wrap bgimage={backgroungImage}>
        <ItemText>
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </ItemText>
    <Buttons>
        <ButtonGroup>
             <LeftButton>
                {LeftButtontxt}
             </LeftButton>
            {
             RightButtontxt &&
                <RightButton>
                {RightButtontxt}
                </RightButton>
            }
             
        </ButtonGroup>
     </Buttons>
        <DownArrow src="/images/down-arrow.svg"/>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    widht: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center; 
    background-repeat: no-repeat;
    // background-image:url("/images/model-3.jpg");   
    display:flex;
    flex-direction: column;
    justify-content: space-between; //vertical
    align-items: center; //horizontal
    background-image: ${props=>`url("images/${props.bgimage}")`}

`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`
 
const ButtonGroup = styled.div`
    display: flex;
    // margin-bottom: 30px;
    margin-top:auto;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`


const LeftButton = styled.button`
background-color: black;
height:40px;
width: 250px;
color: #fff;
display: flex;
justify-content:center;
align-items:center;
border-radius:  100px;
opacity: 0.5;
text-transform; uppercase;
font-size: 12px;
cursor: pointer;

`
const RightButton = styled(LeftButton)``

const DownArrow = styled.img`
    margin-top:20px;
    height:40px;
    animation: animatedown infinite 1.5s;
    overflow-x:hidden;
`

const Buttons = styled.div`

`