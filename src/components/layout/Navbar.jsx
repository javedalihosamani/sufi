import { NavLink } from "react-router-dom"
import Banner from './../pages/Banner';
import logo from './logo.png'
const Navbar = () => { 
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-light shadow py-4">
            <div className="container">
                <NavLink className="navbar-brand" to={`/`}>
                <img src={logo} alt="" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">ಹಜರತ್ ಸೂಫಿ ಅಬ್ದುಲ್ ರೆಹಮಾನ್ ಶಾ ಬಾಬಾ</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                      <NavLink className='nav-link' aria-current="page" to={`/home`}>ಮುಖಪುಟ</NavLink>
                    </li> 
                    <li className="nav-item">
                      <NavLink className="nav-link" aria-current="page" to={`/create`}>Create</NavLink>
                    </li>
                  </ul>
                </div>
                </div>
            </div>
        </nav>
        <Banner/>
    </>
  )
}

export default Navbar