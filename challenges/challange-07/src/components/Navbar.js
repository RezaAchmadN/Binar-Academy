import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Navbar = () => {
    // const title = useSelector(state => state.ui.title)    
    return (
    <nav className="nav navbar fixed-top">
        <div className="container-fluid d-flex justify-content-between w-90">
            <Link className="brand bg-darkblue04" to="/#"></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="/#offcanvasRight"
                aria-controls="offcanvasRight">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="container-fluid d-flex justify-content-flex-end w-90">
                <Link className="nav-link color-black mx-2" aria-current="page" to="/#our-services">Our Services</Link>
                <Link className="nav-link color-black mx-2" to="/#why-us">Why Us</Link>
                <Link className="nav-link color-black mx-2" to="/#testimonial">Testimonial</Link>
                <Link className="nav-link color-black mx-2" to="/#faq">FAQ</Link>
                <a className="nav-link color-black">
                    <button 
                        type="button"
                        className="btn btn-success bg-limegreen04 no-border">Register
                    </button>
                </a>
            </div>
        </div>
    </nav>
    )
}

export default Navbar
