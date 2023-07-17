import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { MenuList } from '../dataapi/db'
import { FoodList } from '../dataapi/db2'


function Menu() {
  return (
    <Layout>

      <Box sx={{ display: 'flex', flexWrap: 'wrap',
         justifyContent: 'center' ,backgroundColor:'#F9F9F4',
         padding:'30px 20px'
      }}>
        
        {FoodList.map((val, i) => {
          return (
            <>
              <div style={{ maxWidth: '100px', margin: ' 0 45px'}}>

                <CardMedia 
                 key={i} 
                  src={val.image}
                  alt={val.name}
                  component={'img'}
                  sx={{ borderRadius: '50%', width: '140px', height: '140px' }}
                />
                <Typography sx={{ml:5,mt:3}}>{val.name}</Typography>

              </div>
              
            </>
          )
        })}
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {MenuList.map((menu, i) => {
          return (
            <Card key={i} sx={{ maxWidth: '370px', m: 2 }}>
              <CardActionArea>
                <CardMedia
                  src={menu.image}
                  alt={menu.name}
                  component={'img'}
                  sx={{ minHeight: '250px' }}
                />
              </CardActionArea>
              <CardContent>
                <Typography variant='h5'>{menu.name} <span style={{ float: 'right' }}>₹{menu.price}</span> </Typography>


              </CardContent>
            </Card>
          )
        })}
      </Box>
    </Layout>
  )
}

export default Menu