import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import img from '../images/img8.jpg'
import Navbar from './Header'

function About() {
  return (
    <>
        <Navbar/>
        <Box sx={{padding:5, bgcolor:'#F9F9F4'}}>
          <Typography sx={{padding:'25px',textAlign:'center',
            backgroundImage:`url(${img})`,backgroundRepeat:'no-repeat',backgroundSize: 'cover'}} variant='h3'>About us</Typography>
          <Divider/>
          <Typography sx={{mt:3}} variant='h6'>
            Welcome to Al Baik, 
            Our restaurant is the culmination of years of passion and dedication to the art of food.
            Nestled in the heart of Delhi NCR, our journey began with a vision to create a dining
            experience that celebrates the vibrant flavors and rich traditions of Biryani.
          </Typography>
          <Divider/>
          <Typography sx={{mt:3}} variant='h6'>
            At Al Baik, we believe that food is more than just sustenance; it is an expression of culture,
            creativity, and love. Our talented team of chefs meticulously crafts each dish using only the finest,
            locally sourced ingredients. We take pride in working closely with local farmers and suppliers
            who share our commitment to sustainability and quality. As a result, every bite you savor
            at Al Baik is bursting with freshness and flavor, transporting you to the heart
            of INDIA.
          </Typography>
          <Divider/>
          <Typography sx={{mt:3}} variant='h6'>
            Beyond the kitchen, our restaurant offers a welcoming ambiance that reflects the warmth and hospitality
            for which New delhi is renowned. Whether you're celebrating a special occasion, enjoying a romantic
            dinner for two, or simply seeking a delightful meal, our attentive staff is dedicated to ensuring your
            dining experience exceeds expectations. We invite you to join us at Al Baik and embark on a
            culinary journey that tantalizes the taste buds, nourishes the soul, and creates lasting memories.
          </Typography>
        </Box>
      
    </>
  )
}

export default About