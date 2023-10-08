import React from 'react'
import styled from "styled-components"
import Section from "./Section"

function Home() {
  return (
    <Container>
        <Section
          title= 'Model S'
          description='Order Online For Touchless Delivery'
          backgroundImg = 'model-s.jpg'
          leftBtn= 'custom order'
          rightBtn = 'existing inventory'
        />
        <Section
          title= 'Model Y'
          description='Order Online For Touchless Delivery'
          backgroundImg = 'model-y.jpg'
          leftBtn= 'custom order'
          rightBtn = 'existing inventory' />
        <Section 
          title= 'Model 3'
          description='Order Online For Touchless Delivery'
          backgroundImg = 'model-3.jpg'
          leftBtn= 'custom order'
          rightBtn = 'existing inventory'/>
        <Section 
          title= 'Model X'
          description='Order Online For Touchless Delivery'
          backgroundImg = 'model-x.jpg'
          leftBtn= 'custom order'
          rightBtn = 'existing inventory'
        />
        <Section
        title= 'Solar for New  Roofs'
        description=''
        backgroundImg = 'solar-roof.jpg'
        leftBtn= 'Order Now'
        rightBtn = 'Learn More'
        />
        <Section
        title= 'Accessories'
        description=''
        backgroundImg = 'accessories.jpg'
        leftBtn= 'Shop Now'
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
height = 100vh;
`
