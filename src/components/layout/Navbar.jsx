import { NavLink } from "react-router-dom"
import Banner from './../pages/banner/Banner';
import logo from './logo.png'
import './Navbar.css';
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Navbar = () => {
  const langauges = [{
    name:'ಕನ್ನಡ',
    code:'kn'
  },{
    name:'English',
    code:'en'
  },{
    name:'हिंदी',
    code:'hi'
  },{
    name:'العربية',
    code:'ar'
  }]

  const {i18n} = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  }

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-light shadow lead">
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
                  <ul className="navbar-nav justify-content-end flex-grow-1">
                    <li className="nav-item">
                      <NavLink className='nav-link' aria-current="page" to={`/home`}>Home</NavLink>
                    </li> 
                    <li className="nav-item">
                      <NavLink className="nav-link" aria-current="page" to={`/create`}>Create</NavLink>
                    </li>
                    <li className="nav-item">
                      <ul className="navbar-nav justify-content-end flex-grow-1">                    
                          <li className="nav-item dropdown">
                              <NavLink className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Languages <IoIosArrowDropdownCircle />
                              </NavLink>
                              <ul className="dropdown-menu">
                                <li>
                                {langauges.map((lang) => (                              
                                  <NavLink key={lang.code}
                                    className={lang.code === i18n.language ? 'dropdown-item active text-center' : 'dropdown-item text-center'}
                                    onClick={()=>changeLanguage(lang.code)}
                                  >{lang.name}</NavLink>                                                         
                                ))}  
                                </li> 
                              </ul>
                          </li>                                     
                      </ul>
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