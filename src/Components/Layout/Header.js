import { AppBar, Box, Divider, Drawer, IconButton, Link, List, Toolbar, Typography } from "@mui/material"
import FoodBankIcon from '@mui/icons-material/FoodBank';
import MenuIcon from '@mui/icons-material/Menu';
import '../../styles/HeaderStyles.css';
import { useState } from "react";

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
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/menu'}>Menu</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>Contact</Link>
                    </li>

                </List>
            
        </Box>
    )
    return (
        <>
            <Box>
                <AppBar>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            sx={{ mb: 1, display: { sm: 'none' } }}
                            edge='start'
                            aria-label="open drawer"
                            size="medium"
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
                            <IconButton sx={{ mb: 1 }} size="medium" color="inherit">
                                <FoodBankIcon />
                            </IconButton>
                            Al-Baik Resturant
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <List className="navbar" sx={{ display: "flex" }}>
                                <li>
                                    <Link to={'/'}>Home</Link>
                                </li>
                                <li>
                                    <Link to={'/menu'}>Menu</Link>
                                </li>
                                <li>
                                    <Link to={'/about'}>About</Link>
                                </li>
                                <li>
                                    <Link to={'/contact'}>Contact</Link>
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
                <Toolbar/>
            </Box>
        </>
    )
}

export default Navbar
