import React from 'react'
import Navbar from './components/navbar'
import Slider from './components/slider'
import Message from './components/message'
import Offer from './components/offer'
import Counter from './components/counter'
import Patners from './components/patners'
import Homecourses from './components/homecourses'
import Footer from './components/footer'


const App = (props) => {
  
    return(
      <>
        <Navbar handleMove={props.handleMove} />
        <Slider />
        <Offer handleMove={props.handleMove} />
        <Message />
        <Homecourses />
        <Counter />
        <Patners />
        <Footer handleMove={props.handleMove} />
        
      </>
    )

}

export default App
