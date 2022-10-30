import React from 'react'
import {Box, Grid, IconButton} from '@mui/material'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import WIdget from '../../components/widgets/WIdget'
import Orders from '../../components/orders/Orders'
import Transaction from '../../components/transaction/Transaction'


const Home = () => {
  return (
    <Box sx={{display:'flex'}}>         
        <Sidebar/>
        <Box className='home-container' sx={{flex:6}}>    
          <Navbar/>
          <Box className='widgets' sx={{display:'flex', mt:4, gap:{xs:'80px', md:'20px'}, padding:'20px', flexDirection:{xs:'column', md:'row'}}} >
              <WIdget/>
              <WIdget/>
              <WIdget/>
              <WIdget/>
          </Box>
          <Box className='transaction' sx={{mt:4, display:'flex', gap:'10px', justifyContent:'space-between', flexDirection:{xs:'column', md:'row'}, p:4}}>
              <Orders/>
              <Transaction/>
          </Box>
        </Box>
    </Box>
  )
}

export default Home