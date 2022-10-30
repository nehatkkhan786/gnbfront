import { Box, Typography } from '@mui/material'
import './widget.css'
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

const WIdget = () => {
  return (
    <Box className='widget-wrapper' sx={{display:'flex', justifyContent:'space-between', flex:1, padding:2}}>
        <Box className='widget-left'>
            <Typography>Products</Typography> 
            <Typography>2500</Typography>

        </Box>
        <Box className='widget-right'>
            <Box>
                <KeyboardArrowUpRoundedIcon/>
            </Box> 
            <Typography>40 %</Typography> 
        </Box>
    </Box>
  )
}

export default WIdget