import { Box, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ProductsTable from '../../components/products/ProductsTable'
import Sidebar from '../../components/sidebar/Sidebar'

const Clients = () => {
  return (
   <Box sx={{display:'flex'}}>
       <Sidebar/>
       <Box sx={{flex:6}}>
            <Navbar/>
            <Typography variant='h4' align='center' marginTop={4} >Clients</Typography>
            <Box>
               
            </Box>
       </Box>
   </Box>
  )
}

export default Clients