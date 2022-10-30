import { CssBaseline } from '@mui/material'
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Products from './pages/products/Products'
import AppThemeProvider from './themes/AppThemeProvider'
import Clients from './pages/clients/Clients'


const App = () => {
  return (
    <AppThemeProvider>
      <CssBaseline/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route  path='/products' element={<Products/>}/>
        <Route path='/clients' element={<Clients/>}/>
      </Routes>
    </BrowserRouter>
    </AppThemeProvider>
  )
}

export default App