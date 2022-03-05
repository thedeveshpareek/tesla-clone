import React from 'react'
import styled from 'styled-components'
 
const Header = () => {
  return (
    <Container>
        <a>
          <img src="/images/logo.svg" alt="images"/>
        </a>
        <Menu>
          <p><a href="#">Model-S</a></p>
          <p><a href="#">Model-3</a></p>
          <p><a href="#">Model-X</a></p>
          <p><a href="#">Model-Y</a></p>
          {/* <p><a href="#">Model S</a></p> */}
        </Menu>
    </Container>
  )
}

export default Header

const Container =styled.div`
  min-height:60px;
  position:fixed;
  display:flex;
  align-items:center;
  padding:0 20px;
`

const Menu = styled.div`
  display:flex;
  align-itens:center;
  justify-content:center;
  flex:1;
  p{
    font-weight:600px;
    text-transform:uppercase;
    padding: 0 10px;
    flex-wrap:nowrap;
  }
  a{
    color:black;
    font-weight:bold;
  }
`