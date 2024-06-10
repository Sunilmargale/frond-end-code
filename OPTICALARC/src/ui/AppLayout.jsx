import { Outlet } from 'react-router-dom'
import { NavbarSimple } from '../Navbars/NavbarSimple'
import { FooterF } from '../Footer/FooterF'

const AppLayout = () => {
  return (
    <div>
      <>
        <nav>
            <NavbarSimple/>
        </nav>
        <main>
            <Outlet/>
        </main>
        <foot>
            <FooterF/>
        </foot>
      </>
    </div>
  )
}

export default AppLayout;