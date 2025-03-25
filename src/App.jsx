import React from 'react'
import ApiProducts from './Components/ApiProducts'
import {Link , BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './Pages/Home'
import './App.css'
import CartPage from './Pages/CartPage'
import Section1 from './Components/Section1'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import AllProducts from './Pages/AllProducts'
import About from './Pages/About'
import Contact from './Pages/Contact'
import ProductPage from './Pages/ProductPage'
import CheckoutPage from './Pages/CheckoutPage'

const App = () => {
  return (
    <div>
      
      

    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/section1' element={<Section1/>}/>
      <Route  path='/Signup' element={<Signup/>}/>
      <Route  path='/about' element={<About/>}/>
      <Route  path='/contact' element={<Contact/>}/>
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/CheckoutPage" element={<CheckoutPage />} />
      <Route  path='/Login' element={<Login/>}/>
      <Route  path='/AllProducts' element={<AllProducts/>}/>
      <Route path="/cart" element={<CartPage />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
