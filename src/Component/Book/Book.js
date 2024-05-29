import React, { Component } from 'react'

import './Book.scss'

import re from '../../image/reservation.jpg'

class Book extends Component {
    render() {
        return <section>

            <div className='bookcon'>

                <h5>
                    BOOK A TABLE
                </h5>

                <h2>
                    Book <span>Your Stay </span> With Us

                </h2>
                <div className='bookrow'>

                    <div className='bookcol1'>
                        <img src={re} />

                    </div>

                    <div className='bookcol2'>
                        <div className='input'>
                            <div>
                                <input type='text' placeholder='Your Name' />
                            </div>

                            <div>
                                <input type='email' placeholder='Your Email' />
                            </div>

                            <div>
                                <input type='number' placeholder='Your Phone ' />
                            </div>

                            <div>
                                <input type='text' placeholder='Date' />
                            </div>

                            <div>
                                <input type='text' placeholder='Time' />
                            </div>

                            <div>
                                <input type='text' placeholder='# People' />
                            </div>
                        </div>

                        <div className='area'>
                            <textarea>Message</textarea>
                        </div>
                        
                        <div className='table'>
                            <div className='book'>
                                Book a Table
                            </div>

                        </div>



                    </div>



                </div>
            </div>

        </section>

    }

}

export default Book