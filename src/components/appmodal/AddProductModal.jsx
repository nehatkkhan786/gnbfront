import {  Dialog, DialogContent, DialogTitle, MenuItem, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Box } from '@mui/system';

const company =[
    {
        name:'HUL'
    }, 
    {
        name:'ITC'
    },
    {
        name:'Loreal'
    },
    {
        name:'Mamy Poko'
    }
]



const AddProductModal = ({openModal, setOpenModal}) => {
   

  return (
    <Dialog open={openModal} onClose={()=>setOpenModal(false)}>
        <DialogTitle>
            <Typography sx={{textAlign:'center', fontSize:'30px'}}>Add Product</Typography>
        </DialogTitle>
        <DialogContent>
            <TextField variant='standard' label='Product Name' fullWidth/>
            <TextField variant='standard' label='Price'/>
            <TextField 
            id='standar-select-company'
            label='Select Company'
            variant="standard"
            select
            fullWidth
            >
                {company.map((item)=>{
                    return (
                        <MenuItem>{item.name}</MenuItem>
                    )
                })}
            </TextField>
        </DialogContent>
    </Dialog>
  )
}

export default AddProductModal