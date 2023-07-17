import React from 'react'
import Layout from '../Components/Layout/Layout'
import img3 from '../images/img2.jpg';
import { Button } from '@mui/material';
import '../styles/HomeStyle.css'
function Home() {
  return (
    <>
      <Layout>
        <div className='homepage' style={{ backgroundImage: `url(${img3})`}}>
          <div className='homecontainer'>
            <h1>Al BAIK</h1>
            <p>Discover the best food</p>
            <Button variant='contained' sx={{boxShadow:'1px 1px red'}}>Order now</Button>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home