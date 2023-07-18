import { Box, IconButton, Typography } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
function Footerbar() {
  return (
    <>
    <Box sx={{bgcolor:'black', textAlign:'center',py:3}}>
        <IconButton >
            <LinkedInIcon sx={{color:'white',mr:2}} fontSize="large"/>
            <InstagramIcon sx={{color:'white',mr:2}} fontSize="large"/>
            <YouTubeIcon sx={{color:'white',mr:2}} fontSize="large"/>
            <GitHubIcon sx={{color:'white',mr:2}} fontSize="large"/>

            
        </IconButton>
        <Typography sx={{color:'white'}}>
            © 2023 - All rights reserved. Created by Mohd Bilal.
        </Typography>
    </Box>
    </>
  )
}

export default Footerbar