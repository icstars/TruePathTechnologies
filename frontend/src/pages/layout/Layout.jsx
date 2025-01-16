import Header from '../../widgets/header/Header'
import { Outlet } from 'react-router'
import Navbar from '../../widgets/navbar/Navbar'


export default function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <nav>
        <Navbar />
      </nav>
    </div>
  )
}
