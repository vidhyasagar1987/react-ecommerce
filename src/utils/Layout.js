import React from 'react'
import TopHeader from '../components/header/TopHeader'
import Footer from '../components/header/Footer'

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