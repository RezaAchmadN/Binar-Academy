import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
// import Swiper core and required modules
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { setTitle } from "../reducers/ui-store"

const Home = () => {
    const dispatch = useDispatch()
    const currentTitle = useSelector(state => state.ui.title)
    const [ customTitle, setCustomTitle ] = useState(currentTitle)

    return (
        <>
            {/* <!-- OUR SERVICES Section --> */}
            <div class="our-services w-100 container py-5 d-flex justify-content-center align-items-center padding-top-70" id="our-services">
                <div class="row w-90 align-items-center mx-auto">
                    <div class="our-services-image col-md-5 mx-auto d-flex justify-content-center align-items-center">
                        <img src="/images/img_service.svg" alt="our service image" class="w-100" />
                    </div>
                    <div class="our-services-description col-md-6 mx-auto d-flex justify-content-center flex-column">
                        <h2>Best Car Rental for any kind of trip in BSD!</h2>
                        <p>Sewa mobil di BSD bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain,
                            kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
                            meeting, dll.</p>
                        <ul class="fa-ul">
                            <li class="my-3"><span class="fa-li text-align-initial"><img src="/images/checklist.svg"
                                        class="checklist" alt="checklist" /></span>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                            <li class="my-3"><span class="fa-li text-align-initial"><img src="/images/checklist.svg"
                                        class="checklist" alt="checklist" /></span>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                            <li class="my-3"><span class="fa-li text-align-initial"><img src="/images/checklist.svg"
                                        class="checklist" alt="checklist" /></span>Sewa Mobil Jangka Panjang Bulanan</li>
                            <li class="my-3"><span class="fa-li text-align-initial"><img src="/images/checklist.svg"
                                        class="checklist" alt="checklist" /></span>Gratis Antar - Jemput Mobil di Bandara</li>
                            <li class="my-3"><span class="fa-li text-align-initial"><img src="/images/checklist.svg"
                                        class="checklist" alt="checklist" /></span>Layanan Airport Transfer / Drop In Out</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-------------------------------------------------------------------------------------------------------------------------------------------> */}

            
            {/* <!-- WHY US Section --> */}
            <div class="why-us container w-90  mx-auto padding-top-70" id="why-us">
                <h2>Why Us?</h2>
                <p>Mengapa harus memilih Binar Car Rental?</p>
                <div class="row align-items-center">
                    <div class="card col-md-3 mx-auto">
                        <div class="card-body d-flex flex-column justify-content-around">
                            <img src="/images/icon_complete.svg" class="icon-why-us" alt="complete icon" />
                            <h5 class="card-title">Mobil Lengkap</h5>
                            <p class="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih, dan terawat.</p>
                        </div>
                    </div>
                    <div class="card col-md-3  mx-auto">
                        <div class="card-body d-flex flex-column justify-content-around">
                            <img src="/images/icon_price.svg" class="icon-why-us" alt="price icon" />
                            <h5 class="card-title">Harga Murah</h5>
                            <p class="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain.
                            </p>
                        </div>
                    </div>
                    <div class="card col-md-3  mx-auto">
                        <div class="card-body d-flex flex-column justify-content-around">
                            <img src="/images/icon_24hours.svg" class="icon-why-us" alt="24 hours icon" />
                            <h5 class="card-title">Layanan 24 Jam</h5>
                            <p class="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir
                                minggu.</p>
                        </div>
                    </div>
                    <div class="card col-md-3  mx-auto">
                        <div class="card-body d-flex flex-column justify-content-around">
                            <img src="/images/icon_professional.svg" class="icon-why-us" alt="profesional icon" />
                            <h5 class="card-title">Supir Profesional</h5>
                            <p class="card-text">Sopir yang profesional, berpengalaman, jujur, ramah, dan selalu tepat waktu.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-------------------------------------------------------------------------------------------------------------------------------------------> */}

            
            {/* <!-- TESTIMONIAL Section --> */}
            <div class="testimonial overflowx-hidden mx-auto d-flex flex-column justify-content-around padding-top-70" id="testimonial">
                <h2 class="text-center">Testimonial</h2>
                <p class="text-center py-1">Berbagai review positif dari para pelanggan kami</p>
                <Swiper 
                    spaceBetween={30}
                    centeredSlides={true}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[Autoplay]}

                    class="swiper d-flex justify-content-center flex-column py-5 container">
                    <div class="swiper-wrapper py-1">
                        <SwiperSlide class="swiper-slide">
                            <div class="card w-100 py-3 px-2 col-4 bg-darkblue01 d-flex align-items-center justify-content-evenly" style={{height: '300px'}}>
                                <div class="row w-90">
                                    <div class="col-md-3 d-flex align-items-center justify-content-center">
                                        <img src="/images/img_photo.svg" class="card-img-top circle" alt="image profile" />
                                    </div>
                                    <div class="col-md-9">
                                        <i class="fa-solid fa-star color-gold"></i>
                                        <i class="fa-solid fa-star color-gold"></i>
                                        <i class="fa-solid fa-star color-gold"></i>
                                        <i class="fa-solid fa-star color-gold"></i>
                                        <i class="fa-solid fa-star color-gold"></i>
                                        <p class="card-text text-tipis">&quot;Lorem ipsum dolor sit amet consectetur,
                                            adipisicing elit. Numquam doloribus doloremque ullam voluptatibus! Consectetur optio
                                            cum a atque aut molestias asperiores voluptas. Laboriosam sapiente animi excepturi
                                            modi enim ullam debitis id suscipit ducimus odit! Unde numquam, voluptatum iusto
                                            vero ducimus cum possimus dignissimos veniam velit sint ad omnis accusamus
                                            alias.&quot;</p>
                                        <strong>John Dee 32, Bromo</strong>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide class="swiper-slide">
                            <div class="card w-100 py-3 px-2 col-4 bg-darkblue01 d-flex align-items-center justify-content-evenly" style={{height: '300px'}}>
                                <div class="row w-90">
                                    <div class="col-md-3 d-flex align-items-center justify-content-center">
                                        <img src="/images/img_photo2.svg" class="card-img-top circle" alt="image profile" />
                                    </div>
                                    <div class="col-md-9">
                                        <i class="fa-solid fa-star color-gold"></i>
                                        <i class="fa-solid fa-star color-gold"></i>
                                        <i class="fa-solid fa-star color-gold"></i>
                                        <i class="fa-solid fa-star color-gold"></i>
                                        <i class="fa-solid fa-star color-gold"></i>
                                        <p class="card-text text-tipis">&quot;Lorem ipsum dolor sit amet consectetur,
                                            adipisicing elit. Numquam doloribus doloremque ullam voluptatibus! Consectetur optio
                                            cum a atque aut molestias asperiores voluptas. Laboriosam sapiente animi excepturi
                                            modi enim ullam debitis id suscipit ducimus odit! Unde numquam, voluptatum iusto
                                            vero ducimus cum possimus dignissimos veniam velit sint ad omnis accusamus
                                            alias.&quot;</p>
                                        <strong>John Dee 32, Bromo</strong>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide class="swiper-slide">
                            <div class="card w-100 py-3 px-2 col-4 bg-darkblue01 d-flex align-items-center justify-content-evenly" style={{height: '300px'}}>
                                <div class="row w-90">
                                    <div class="col-md-3 d-flex align-items-center justify-content-center">
                                        <img src="/images/img_photo.svg" class="card-img-top circle" alt="image profile" />
                                    </div>
                                    <div class="col-md-9">
                                        <i class="fa-solid fa-star color-gold"></i>
                                        <i class="fa-solid fa-star color-gold"></i>
                                        <i class="fa-solid fa-star color-gold"></i>
                                        <i class="fa-solid fa-star color-gold"></i>
                                        <i class="fa-solid fa-star color-gold"></i>
                                        <p class="card-text text-tipis">&quot;Lorem ipsum dolor sit amet consectetur,
                                            adipisicing elit. Numquam doloribus doloremque ullam voluptatibus! Consectetur optio
                                            cum a atque aut molestias asperiores voluptas. Laboriosam sapiente animi excepturi
                                            modi enim ullam debitis id suscipit ducimus odit! Unde numquam, voluptatum iusto
                                            vero ducimus cum possimus dignissimos veniam velit sint ad omnis accusamus
                                            alias.&quot;</p>
                                        <strong>John Dee 32, Bromo</strong>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>
            {/* <!-------------------------------------------------------------------------------------------------------------------------------------------> */}

            
            {/* <!-- CTA BANNER Section --> */}
            <div class="cta-banner  padding-top-70">
                <div
                    class="jumbotron py-7-5 w-90 h-90 border-rad-25 bg-darkblue04 mx-auto text-center align-items-center d-flex flex-column justify-content-center">
                    <h2 class="w-75 text-light mx-auto">Sewa Mobil di BSD Sekarang</h2>
                    <p class="w-50 text-tipis text-light mx-auto padding-bot-50">Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Animi atque recusandae, facere similique at quos.</p>
                    <button type="button" class="btn btn-success text-light no-border bg-limegreen04  mx-auto">Mulai Sewa
                        Mobil</button>
                </div>
            </div>
            {/* <!-------------------------------------------------------------------------------------------------------------------------------------------> */}

            
            {/* <!-- FAQ Section --> */}
            <div class="faq py-5 padding-top-70" id="faq">
                <div class="container-faq  w-90 h-75 mx-auto container">
                    <div class="row h-100">
                        <div class="faq-title col-md-5">
                            <h2>Frequently Asked Question</h2>
                            <p class="text-tipis text-small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
                                qui.</p>
                        </div>
                        <div class="faq-accordion col-md-7 h-100">
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item my-3">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                            Apa saja syarat yang dibutuhkan?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, ex.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item my-3 border-accordion-top">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Berapa hari minimal sewa mobil lepas kunci?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, explicabo!
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item my-3 border-accordion-top">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Berapa hari sebelumnya sebaiknya booking sewa mobil?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, accusamus.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item my-3 border-accordion-top">
                                    <h2 class="accordion-header" id="headingFour">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Apakah Ada biaya antar-jemput?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                                        data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, sunt.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item my-3 border-accordion-top">
                                    <h2 class="accordion-header" id="headingFive">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            Bagaimana jika terjadi kecelakaan?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                                        data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, voluptas.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home