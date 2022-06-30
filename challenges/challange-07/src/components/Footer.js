import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="py-5">
            <div className="container-footer w-90 mx-auto container">
                <div className="row">
                    <div className="col-md-3">
                        <p className="text-tipis">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                        <p className="text-tipis">binarcarrental@gmail.com</p>
                        <p className="text-tipis">081-233-334-808</p>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-2">
                        <p><Link to="/#our-services" className="text-reset">Our services</Link></p>
                        <p><Link to="/#why-us" className="text-reset">Why Us</Link></p>
                        <p><Link to="/#testimonial" className="text-reset">Testimonial</Link></p>
                        <p><Link to="/#faq" className="text-reset">FAQ</Link></p>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-3">
                        <p>Connect with us</p>
                        <div className="icon-connect d-flex my-1">
                            <Link to="/#"
                                className="d-flex justify-content-center align-items-center bg-darkblue04 circle icon-connect-with-us"><i
                                    className="fa-brands fa-facebook-f text-light"></i></Link>
                            <Link to="/#"
                                className="d-flex justify-content-center align-items-center bg-darkblue04 circle icon-connect-with-us"><i
                                    className="fa-brands fa-instagram text-light"></i></Link>
                            <Link to="/#"
                                className="d-flex justify-content-center align-items-center bg-darkblue04 circle icon-connect-with-us"><i
                                    className="fa-brands fa-twitter text-light"></i></Link>
                            <Link to="/#"
                                className="d-flex justify-content-center align-items-center bg-darkblue04 circle icon-connect-with-us"><i
                                    className="fa-solid fa-envelope text-light"></i></Link>
                            <Link to="/#"
                                className="d-flex justify-content-center align-items-center bg-darkblue04 circle icon-connect-with-us"><i
                                    className="fa-brands fa-twitch text-light"></i></Link>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <p>Copyright Binar 2022</p>
                        <div className="brand bg-darkblue04 my-1"></div>
                    </div>
                </div>
    
            </div>
        </footer>
    )
}

export default Footer