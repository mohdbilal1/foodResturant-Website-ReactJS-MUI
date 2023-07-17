
import { Box, IconButton, Typography } from '@mui/material'
import Layout from '../Components/Layout/Layout'
import chicken from '../images/imgcontact.jpg'
import '../styles/contactStyle.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  return (
    <Layout>
      <Box>
        <div className='contact-div' style={{
          backgroundImage: `url(${chicken})`
         }}>
          <div className='content-div'>
            <h1 >We would love to hear from you!</h1>
          </div>
        </div >
      </Box>
      <Box sx={{minHeight:'500px'}}>
        
          <IconButton>
            <LocationOnIcon/>
          </IconButton>
          <Typography>Address</Typography>
          <br/>
          <p>G-82,NFC Road, new delhi</p>
        
        
        <IconButton>
          <EmailIcon/>
        </IconButton>
          <Typography>Email</Typography>
          <br/>
          <p>mohdbilal.mymail@gmail.com</p>
        
        
        <IconButton>
          <PhoneIcon/>
        </IconButton>
          <Typography>Phone no</Typography>
          <br/>
          <p>+91 9760786071</p>
        
      </Box>
    </Layout>
  )
}

export default Contact