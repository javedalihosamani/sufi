import { NavLink } from "react-router-dom"
import Banner from './../pages/Banner';

const Navbar = () => {
    
  return (
    <>
        <nav className="navbar navbar-expand-lg shadow bg-success">
            <div className="container">
                <NavLink className="navbar-brand">SUFI</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">CRUD AUTH</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                      <NavLink className="nav-link" aria-current="page">Home</NavLink>
                    </li> 
                    <li className="nav-item">
                      <NavLink className="nav-link" aria-current="page">Create</NavLink>
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