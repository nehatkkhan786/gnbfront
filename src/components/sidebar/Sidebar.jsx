import React from 'react'
import {Box, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography} from '@mui/material'
import {useNavigate} from 'react-router-dom'



import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';

import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import Diversity3RoundedIcon from '@mui/icons-material/Diversity3Rounded';
import ProductionQuantityLimitsRoundedIcon from '@mui/icons-material/ProductionQuantityLimitsRounded';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';





const Sidebar = () => {
    const navigate = useNavigate()
  return (

    // Sidebar Conatiner
    <Box sx={{flex:1,height:'100vh', borderRight:'0.5px solid grey', display:{xs:'none', md:'block', position:'sticky', top:0,}}}>
        
       {/* SIDEBAR TOP */}
        <Box sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            height:'50px',
        }}>
            <Typography variant='h5' sx={{cursor:'pointer', ':hover':{color:'red'}}}>
                G N Brothers
            </Typography>
        </Box>
        <hr style={{height:0}}/>

       {/* SIDE BAR TOP END */}

       {/* Sidebar Middle */}
       <Box>
           <Box sx={{mt:2, mb:1}}>
                <Typography onClick={()=>navigate('/')} variant='title' sx={{ml:2}}>Main</Typography>
           </Box>
           
            <ListItem disablePadding sx={{':hover':{bgcolor:'red'}}}>
                <ListItemButton onClick={()=>navigate('/')}>
                    <ListItemIcon><DashboardRoundedIcon/></ListItemIcon>
                    <ListItemText primary='Dashboard'/>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{':hover':{bgcolor:'red'}}}>
                <ListItemButton onClick={()=>navigate('/products')}>
                    <ListItemIcon><ProductionQuantityLimitsRoundedIcon/></ListItemIcon>
                    <ListItemText primary='Products'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{':hover':{bgcolor:'red'}}}>
                <ListItemButton onClick={()=>navigate('/clients')}>
                    <ListItemIcon> <Diversity3RoundedIcon/> </ListItemIcon>
                    <ListItemText primary='Clients'/>
                </ListItemButton>
            </ListItem>

            <Box sx={{mt:2, mb:1}}>
                <Typography variant='title' sx={{ml:2}}>Secondary</Typography>
           </Box>

           <ListItem disablePadding sx={{':hover':{bgcolor:'red'}}}>
                <ListItemButton>
                    <ListItemIcon><InventoryRoundedIcon/></ListItemIcon>
                    <ListItemText primary='Damage Orders'/>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{':hover':{bgcolor:'red'}}}>
                <ListItemButton>
                    <ListItemIcon><ReceiptLongRoundedIcon/></ListItemIcon>
                    <ListItemText primary='Transaction'/>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{':hover':{bgcolor:'red'}}}>
                <ListItemButton>
                    <ListItemIcon><AddRoundedIcon/></ListItemIcon>
                    <ListItemText primary='Add Product'/>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{':hover':{bgcolor:'red'}}}>
                <ListItemButton>
                    <ListItemIcon><BorderColorRoundedIcon/></ListItemIcon>
                    <ListItemText primary='Create Damage'/>
                </ListItemButton>
            </ListItem>
           
       </Box>
       {/* Sidebar Middle End */}

       {/* Sidebar Bottom */}

       {/* Sidebar Bottom End */}
    </Box>
    // Sidebar Conatiner END
  )
}

export default Sidebar