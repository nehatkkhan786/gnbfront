import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';

const data = [{
    "id": 1,
    "name": "Lesley Vinck",
    "email": "lvinck0@nasa.gov",
    "phone": "958-282-4883"
  }, {
    "id": 2,
    "name": "Carleen Bontine",
    "email": "cbontine1@sogou.com",
    "phone": "711-977-3941"
  }, {
    "id": 3,
    "name": "Raddy Waterhouse",
    "email": "rwaterhouse2@mac.com",
    "phone": "980-576-9597"
  }, {
    "id": 4,
    "name": "Yancey Jaggard",
    "email": "yjaggard3@comsenz.com",
    "phone": "610-716-2563"
  }, {
    "id": 5,
    "name": "Germain Comino",
    "email": "gcomino4@ehow.com",
    "phone": "819-574-5557"
  }]

const Orders = () => {
  return (
    <Box sx={{flex:3}}>
        <Box>
            <Typography>Recent Damage Orders</Typography>
        </Box>
        <TableContainer component={Paper}  sx={{height:'450px', width:{xs:330, md:'100%'} }}>
            <Table aria-label='simple-table' sx={{width:'max-content'}}>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Client</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item)=>{
                        return (
                            <TableRow key={item.id}>
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell>{item.phone}</TableCell>
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

export default Orders