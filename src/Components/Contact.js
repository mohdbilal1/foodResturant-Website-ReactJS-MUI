
import { Box, IconButton, Typography } from '@mui/material'
import chicken from '../images/imgcontact.jpg'
import '../styles/contactStyle.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Navbar from './Header';



function Contact() {
  return (
    <>
      <Navbar/>
      <Box>
        <div className='contact-div' style={{
          backgroundImage: `url(${chicken})`
        }}>
          <div className='content-div'>
            <h1>We would love to hear from you!</h1>
          </div>
        </div >
      </Box>
      <div className='contact-responsive' style={{
          display:'flex',flexWrap: 'wrap' ,margin:'70px' }}>

        <div className='contact-p'>
          <IconButton sx={{color:'#5d78f1',marginLeft:' 110px',display:{xs:{marginLeft:'2px'}}
            ,borderRadius:'50%',bgcolor:'#e7e5e5'}}>
            <LocationOnIcon />
          </IconButton>
          <Typography sx={{marginTop:'10px',marginLeft:'87px',
            display:{xs:{marginLeft:'2px',fontWeight:'bold'}}}} >Address</Typography>
          
          <p style={{marginLeft:'30px',color:'#aaa5a5',display:{xs:{marginLeft:'2px'}}}}>G-82,NFC Road, new delhi</p>
        </div>


        <div className='contact-p'>
          <IconButton sx={{color:'#5d78f1',marginLeft:' 110px',display:{xs:{marginLeft:'2px'}},
             borderRadius:'50%',bgcolor:'#e7e5e5'}}>
            <EmailIcon />
          </IconButton>
          <Typography sx={{marginTop:'10px',marginLeft:'105px',
            display:{xs:{marginLeft:'2px'}}}} >Email</Typography>
          
          <p style={{marginLeft:'25px',color:'#aaa5a5',display:{xs:{marginLeft:'2px'}}}}>mohdbilal.mymail@gmail.com</p>
        </div>


        <div className='contact-p'>
          <IconButton sx={{color:'#5d78f1',marginLeft:' 110px',
             display:{xs:{marginLeft:'2px'}}, borderRadius:'50%',bgcolor:'#e7e5e5'}}>
            <PhoneIcon />
          </IconButton>
          <Typography sx={{marginTop:'10px',marginLeft:'87px',display:{xs:{marginLeft:'2px'}}}} >Phone no</Typography>
          
          <p style={{marginLeft:'75px',color:'#aaa5a5',display:{xs:{marginLeft:'2px'}}}}>+91 9760786071</p>
        </div>

      </div>
     
    </>
  )
}

export default Contact