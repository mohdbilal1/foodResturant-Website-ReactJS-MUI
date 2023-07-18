import { Box, Button } from "@mui/material"


function Errorpage() {
  return (
    <>
    
    <Box sx={{bgcolor:'black', textAlign:'center',
         height:'100vh',paddingTop:'160px'
     }}>
      <h1 style={{fontSize:'150px',
       textShadow:'1px 2px 0 #ff0080, 1px 2px 0 #7e05f7, -3px 1px 0 #7e05f7, 1px -3px 0 #7e05f7'}}>
        <i>404</i></h1>
      <p style={{marginLeft:'14px',
          color:'white',fontSize:'40px',letterSpacing:10,textShadow:' 3px 3px 2px #7e05f7',
      }}><b>PAGE NOT FOUND!</b></p>
      <Button sx={{marginTop:'20px',padding:'15px 50px', color:'#ff0080',fontWeight:'bold',
        borderColor:"#ff0080"}} variant="outlined" href="/">Homepage</Button>
    </Box>
    </>
    
  )
}

export default Errorpage