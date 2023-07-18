
import img3 from '../images/img2.jpg';
import { Button } from '@mui/material';
import '../styles/HomeStyle.css'
import Menu from './Menu';
import Contact from './Contact';
import Footerbar from './Footer';
import Navbar from './Header';
function Home() {
  return (
    <>
        <Navbar/>
        <div className='homepage' style={{ backgroundImage: `url(${img3})`}}>
          <div className='homecontainer'>
            <h1>Al BAIK</h1>
            <p>Discover the best food</p>
            <Button variant='contained' sx={{boxShadow:'1px 1px red'}}>Order now</Button>
          </div>
        </div>
        <Menu/>
        <Contact/>
      <Footerbar/>
    </>
  )
}

export default Home