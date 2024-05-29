import React from 'react'

import './Footer.scss'

import { BiMap } from 'react-icons/bi'
import { BsFillTelephoneFill, BsClock } from 'react-icons/bs'

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'


const Footer = () => {


    const card = [
        {
            iconname: <BiMap className='ficon' />,
            detail: "Our Address",
            place: "A108 Adam Street, New York, NY 535022"

        },

        {
            iconname: <BsFillTelephoneFill className='ficon' />,
            detail: "Call Us",
            place: "Phone: +1 5589 55488 55, Email: contact@example.com"
        },

        {
            iconname: <BsClock className='ficon' />,
            detail: "Opening Hours",
            place: "Mon-Sat: 11AM - 23PM; Sunday: Closed"
        },
    ]
    return <section>
        <div className='footcon'>
            <div className='footrow1'>
                <div className='footcol1'>

                    {
                        card.map((a, b) => {

                            return <div className='footcard' key={b}>
                                <div className='footicons'>
                                    {a.iconname}
                                </div>

                                <div className='footdetails'>
                                    <h3>
                                        {a.detail}
                                    </h3>

                                    <p>
                                        {a.place}
                                    </p>

                                </div>

                            </div>

                        })
                    }


                </div>

                <div className='footcol2'>
                    <h3>
                        Follow Us
                    </h3>
                    <div className='footicon'>

                        <div>
                            <FaTwitter className='ic' />

                        </div>

                        <div>
                            <FaFacebook className='ic' />

                        </div>


                        <div>
                            <FaInstagram className='ic' />

                        </div>

                        <div>
                            <FaLinkedinIn className='ic' />

                        </div>

                    </div>
                </div>

            </div>


            <div className='footrow2'>
                <div>
                    © Copyright <span>Yummy</span>. All Rights Reserved<br />
                    Designed by <span>BootstrapMade</span>
                </div>

            </div>

        </div>


    </section>
}

export default Footer