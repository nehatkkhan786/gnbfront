import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ProductsTable from '../../components/products/ProductsTable'
import Sidebar from '../../components/sidebar/Sidebar'

const Products = () => {
  return (
    <Box display="flex">
        <Sidebar/>
        <Box className='product-container' sx={{flex:6}}>
            <Navbar/>
            <Typography variant='h4' align='center' marginTop={4}>Products</Typography>
            <Box>
              <ProductsTable/>
            </Box>
        </Box>
    </Box>
  )
}

export default Products