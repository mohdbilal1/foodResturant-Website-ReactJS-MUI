import Footerbar from "./Footer"
import Navbar from "./Header"

function Layout({children}) {
  return (
    <>
    <Navbar/>
    <div>{children}</div>
    <Footerbar/>

    </>
    
  )
}

export default Layout