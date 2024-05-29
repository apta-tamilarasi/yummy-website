import React, { Component } from 'react'

import './About.scss'

// import res from '../../image/res.jpg'

import res1 from '../../image/res1.jpg'

import { FaCheckDouble } from 'react-icons/fa'

import { FaPlay } from 'react-icons/fa'


class About extends Component {
    render() {
        return <section>

            <div className='aboutcontainer'>
                <div className='aboutrow1'>
                    <h3>ABOUT US</h3>
                    <p>Learn More <span>About Us</span></p>

                </div>

                <div className='aboutrow2'>
                    <div className='aboutcol1'>


                        <div id='aboutcol1-ad'>
                            <div>
                                Book a Table
                            </div>

                            <div>
                                <span>+1 5589 55488 55</span>
                            </div>

                        </div>

                    </div>

                    <div className='aboutcol2'>

                        <div id='aboutcol2-1'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et dolore <br />magna aliqua.

                        </div>

                        <div id='aboutcol2-2'>
                            Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod tempor incididunt<br /> ut labore et dolore magna aliqua.

                        </div>

                        <div id='aboutcol2-3'>
                            <span><FaCheckDouble /></span>
                            <div>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                        </div>

                        <div id='aboutcol2-3'>
                            <span><FaCheckDouble /></span>
                            <div>
                                Duis aute irure dolor in reprehenderit in voluptate velit.
                            </div>
                        </div>


                        <div id='aboutcol2-3'>
                            <span><FaCheckDouble /></span>
                            <div>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
                            </div>
                        </div>

                        <div id='aboutcol2-4'>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                        </div>

                        <div id='aboutcol2-img'>
                            <div id='about-img'>
                                <img src={res1} alt='loading'/>
                            </div>
                            <div id='play'>
                                <div id='aboutplay'>

                                    <FaPlay />
                                </div>

                                <div id='aboutrou1'>

                                </div>

                            </div>



                        </div>



                    </div>
                </div>
            </div >

            

        </section >


    }
}
export default About