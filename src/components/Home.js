import React from 'react'
import styled from 'styled-components'
import Section from './Section'


const Container = styled.div`
    height: 100vh;
`

const Home = () => {
  return (
    <div>
        <Container>
        <Section 
         title={'Tesla Model s'}
         description={'Order online for touchless delivery'}
         LeftButtontxt={'Order Online'}
         RightButtontxt={'Existing inventory'}
         backgroungImage={'model-s.jpg'}
        />
       <Section 
         title={'Tesla Model y'}
         description={'Order online for touchless delivery'}
         LeftButtontxt={'Order Online'}
         RightButtontxt={'Existing inventory'}
         backgroungImage={'model-y.jpg'}
        />
        <Section 
         title={'Tesla Model x'}
         description={'Order online for touchless delivery'}
         LeftButtontxt={'Order Online'}
         RightButtontxt={'Existing inventory'}
         backgroungImage={'model-x.jpg'}
        />
        <Section 
         title={'Tesla Model 3'}
         description={'Order online for touchless delivery'}
         LeftButtontxt={'Order Online'}
         RightButtontxt={'Existing inventory'}
         backgroungImage={'model-3.jpg'}
        />
        <Section 
         title={'Lowest cost solar panel in america'}
         description={'Money back gurantee'}
         LeftButtontxt={'Order now'}
         RightButtontxt={'Learn more'}
         backgroungImage={'solar-panel.jpg'}
        />
        <Section 
         title={'Solar for new roofs'}
         description={'Solar roofs less than a new roof plus solar panel'}
         LeftButtontxt={'Order now'}
         RightButtontxt={'Learn more'}
         backgroungImage={'solar-roof.jpg'}
        />
        <Section 
         title={'Accessories'}
         description={''}
         LeftButtontxt={'Order now'}
        //  RightButtontxt={'Learn more'}
         backgroungImage={'accessories.jpg'}
        />
        </Container>
    </div>
  )
}

export default Home

