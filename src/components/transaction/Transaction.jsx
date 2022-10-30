import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import React from 'react'

const data = [{
    "id": 1,
    "product": "Regrant",
    "timestamp": "1/29/2022",
    "type": "Amigo"
  }, {
    "id": 2,
    "product": "Viva",
    "timestamp": "9/7/2022",
    "type": "Blazer"
  }, {
    "id": 3,
    "product": "Cardify",
    "timestamp": "2/18/2022",
    "type": "Mazdaspeed 3"
  }, {
    "id": 4,
    "product": "Bytecard",
    "timestamp": "6/11/2022",
    "type": "Envoy"
  }, {
    "id": 5,
    "product": "Sonair",
    "timestamp": "4/6/2022",
    "type": "XJ Series"
  }]
  

const Transaction = () => {
  return (
    <Box sx={{flex:5}}>
        <Box>
            <Typography>Recent Transaction</Typography>
        </Box>
        <TableContainer component={Paper} sx={{height:'450px', width:{xs:330, md:'100%'}}}>
                <Table aria-label='simple-table' sx={{width:'max-content'}}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Item</TableCell>
                            <TableCell>Timestamp</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item)=>{
                            return (
                                <TableRow key={item.id}>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>Added</TableCell>
                                    <TableCell>{item.product}</TableCell>
                                    <TableCell>{item.timestamp}</TableCell>
                                    <TableCell>
                                    <Button sx={{color:'inherit', ':hover':{color:'red'}}} variant='outlined' size='small' endIcon={<VisibilityRoundedIcon/>}>View</Button>
                                </TableCell>

                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
        </TableContainer>
    </Box>
  )
}

export default Transaction