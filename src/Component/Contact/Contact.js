import React, { Component } from 'react'

import './Contact.scss'

import { BiMap, BiEnvelope, BiSolidShareAlt } from 'react-icons/bi'
import { BsFillTelephoneFill } from 'react-icons/bs'


class Contact extends Component {


    render() {


        const card = [
            {
                icon: <BiMap className='icon'/> ,
                name: "Our Address",
                use: "A108 Adam Street, New York, NY 535022"

            },

            {
                icon: <BiEnvelope className='icon'/> ,
                name: "Email Us",
                use: "contact@example.com"
            },

            {
                icon: <BsFillTelephoneFill className='icon'/> ,
                name: "Call Us",
                use: "+1 5589 55488 55"
            },

            {
                icon: <BiSolidShareAlt className='icon'/>,
                name: "Opening Hours",
                use: "Mon-Sat: 11AM - 23PM; Sunday: Closed"
            },
        ]

        return <section style={{height:"100opx"}} >
            <div className='contactcon'>
      <h5>
                    CONTACT
                </h5>

                <h2>
                    Need Help? <span> Contact Us </span>

                </h2>
                <div className='contactrow'>
                    <div className='contactcol1'>
                        <iframe  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" >

                        </iframe>


                    </div>

                    <div className='contactcol2'>

                        {
                            card.map((a, b) => {

                                return <div className='contactcard' key={b}>
                                    <div className='contacticon'>
                                        {a.icon}
                                    </div>

                                    <div className='contactdetails'>
                                        <h3>
                                            {a.name}
                                        </h3>

                                        <p>
                                            {a.use}
                                        </p>

                                    </div>

                                </div>

                            })
                        }




                    </div>

                    <div className='contactcol3'>
                        <div className='input'>
                            <div className='inputcol'>
                                <input type='text' placeholder='Your Name' />
                            </div>

                            <div  className='inputcol'>
                                <input type='email' placeholder='Your Email' />
                            </div>

                            <div  className='inputcol'>
                                <input type='text' placeholder='Subject' />
                            </div>

                            <div className='area'>
                                <textarea>Message</textarea>
                            </div>

                            <div className='table'>
                                <div className='book'>
                                    Send Message
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

           

        </section>
    }
}

export default Contact