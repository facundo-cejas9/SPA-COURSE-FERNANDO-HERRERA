import React from 'react'
import AppRouter from './router/AppRouter'
import { Navbar } from './ui/components/Navbar'
import { AppRoutes } from './Heroes/Routes/AppRoutes'


const HeroesApp = () => {
  return (
    <>
        <AppRouter />
    </>
  )
}

export default HeroesApp