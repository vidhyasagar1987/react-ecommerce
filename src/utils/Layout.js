import React from 'react'
import "../assets/css/defaults.css"
import TopHeader from '../components/Header/TopHeader'
import Footer from '../components/Footer/Footer'

const Layout = ({children}) => {
  return (
    <>
 <TopHeader/>
    {children}
   <Footer/>
    </>
  )
}

export default Layout