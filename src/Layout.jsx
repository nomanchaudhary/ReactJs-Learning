import React from 'react'
import Header from './Router/Components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Router/Components/Footer'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout
