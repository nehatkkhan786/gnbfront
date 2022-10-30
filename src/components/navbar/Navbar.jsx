


import { Box, IconButton, InputBase, Paper } from '@mui/material'
import {useTheme} from '@mui/material/styles'

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';
import { useState } from 'react';
import SideDrawer from '../mobile-drawer/SideDrawer';








const Navbar = () => {
  const theme = useTheme()
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <Box className='navbar' sx={{
        display: 'flex',
        alignItems:'center',
        height:'58px',
        borderBottom:'0.5px solid grey',
    }}>
    {/* Navbar Wrapper */}
    <IconButton sx={{display:{md:'none'}}} onClick={()=> setOpenDrawer(!openDrawer)}>
          <MenuRoundedIcon/>
        </IconButton>
    <Box className='navbar-wrapper' sx={{display:'flex', alignItems:'center', justifyContent:{xs:'center', md:'space-between'}, width:'100%', padding:'20px'}}>
       {/* <IconButton sx={{display:{md:'none'}}}>
          <MenuRoundedIcon/>
        </IconButton> */}
        <Box className='navbar-search' sx={{display:'flex',}}>
            <Paper component='form' sx={{display:'flex', p:'2px 4px', width:{xs:'200px',sm:'400px', md:'400px'}, alignItems:'center', borderRadius:'10px solid '}}>
                <InputBase 
                placeholder='Search'
                sx={{ml:1, flex:1}}
                />
                <IconButton >
                    <SearchRoundedIcon sx={{':hover':{color:'red'}}}/>
                </IconButton>
            </Paper>
        </Box>
        <Box className='navbar-icons' sx={{display:{xs:'none', sm:'none', md:'flex'}, alignItems:'center', justifyContent:'space-between', gap:3}}>
              <Brightness4RoundedIcon sx={{cursor:'pointer', ':hover':{bgcolor:'red'}}}/>
              <Person2RoundedIcon sx={{cursor:'pointer', ':hover':{bgcolor:'red'} }}/>
              <LogoutRoundedIcon sx={{cursor:'pointer', ':hover':{bgcolor:'red'}}}/>
        </Box>
    </Box>
    <SideDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />

    </Box>
  )
}

export default Navbar