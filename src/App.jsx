import './App.css'
import { Display_Slider,Extra_Discounts,Footer,Home,Navbar,Offers_Discounts,Products } from './components'

import React from 'react'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Products/>
      <Display_Slider/>
      <Offers_Discounts/>
      <Extra_Discounts/>
      <Footer />
    </div>
  )
}

export default App
