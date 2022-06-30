import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="main container bg-darkblue01 w-100 padding-top-70">
        <div className="row align-items-center justify-content-between">
            <div className="col-md-6">
                <div className="main-title-inner w-75 m-auto py-3">
                    <h1>Sewa & Rental Mobil Terbaik di Kawasan BSD</h1>
                    <p className="text-tipis">Selamat datang di Binar Car Rental. Kami menyediakan mobil terbaik dengan
                        harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    <Link to="/cars" className="btn btn-success text-light no-border bg-limegreen04">Mulai Sewa Mobil</Link>
                </div>
            </div>
            <div className="col-md-6 no-padding">
                <img src="/images/img_car.svg" alt="main image" className="h-100 w-100" />
            </div>
        </div>
    </div>
    )
}

export default Header
