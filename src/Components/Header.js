import { AppBar, Box, Divider, Drawer, IconButton,List, Toolbar, Typography } from "@mui/material"
import FoodBankIcon from '@mui/icons-material/FoodBank';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/HeaderStyles.css'
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)
    //Handle menu click
    const handleDrawer = () => {
        setMobileOpen(!mobileOpen);
    }

    //menu drawer
    const drawer = (
        <Box onClick={handleDrawer}>
            <Typography
                color={'white'}
                bgcolor={'blue'}
                variant="h6"
                component='div'
                sx={{padding:'10px 0',textAlign:'center' }}
                width={250}
                

            >
                <IconButton sx={{ mb: 1 }} color="inherit">
                    <FoodBankIcon />
                </IconButton>
                Al-Baik Resturant
            </Typography>
           <Divider/>
                <List className="mobile-nav">
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/menu'>Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/about'}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/contact'}>Contact</NavLink>
                    </li>

                </List>
            
        </Box>
    )
    return (
        <>
            <Box>
                <AppBar>
                    <Toolbar sx={{height:'80px'}}>
                        <IconButton
                            color="inherit"
                            sx={{ mb: 1, display: { sm: 'none' } }}
                            edge='start'
                            aria-label="open drawer"
                            size="large"
                            onClick={handleDrawer}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            color={'white'}
                            variant="h6"
                            component='div'
                            sx={{ flexGrow: 1 }}

                        >
                            <IconButton sx={{ mb: 1 }} size="x-large" color="inherit">
                                <FoodBankIcon />
                            </IconButton>
                            Al-Baik Resturant
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <List className="navbar" sx={{ display: "flex" }}>
                                <li>
                                    <NavLink to={'/'}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/menu'}>Menu</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/about'}>About</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/contact'}>Contact</NavLink>
                                </li>

                            </List>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component='nav'>
                    <Drawer 
                       open={mobileOpen} 
                       variant="temporary"
                       onClose={handleDrawer}
                       sx={{display:{xs:'block',sm:'none'}}}
                       
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Toolbar sx={{mt:2}}/>
            </Box>
        </>
    )
}

export default Navbar
