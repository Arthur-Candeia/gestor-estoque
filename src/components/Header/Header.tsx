import {Link, Outlet} from 'react-router-dom'
import './Header.scss'

export default function Header() {
  return (
    <>
      <header>
        <div>
          <span>REACT STOCK</span>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/stock'>Items</Link>
          </nav>
        </div>
      </header>
      <>
        <Outlet></Outlet>
      </>
    </>
  )
}