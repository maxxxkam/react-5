import React from 'react'
import './App.scss'
import Header from './companents/Header/Header'
import Hero from './companents/Hero/Hero'
import Catalog from './companents/Catalog/Catalog'
import Footer from './companents/Footer/Footer'
import Profile from './companents/Profile/Profile'
import Clients from './companents/Clients/Clients'



const App = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <Catalog/>
    <Profile/>
    <Clients/>
    <Footer/>
    </>
  )
}

export default App