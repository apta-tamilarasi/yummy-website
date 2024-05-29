import React from 'react'

import './Nav.scss'

import { FaBars } from 'react-icons/fa'
const Nav = () => {

    return <section id='navsec'>

        <div className='navcontainer'>
            <div className='navrow'>
                <div className='navcol1'>
                    <h3>
                        Yummy <span>.</span>
                    </h3>

                </div>

                <div className='navcol2'>
                    <div>
                        <a href='#' id='home'>
                            Home
                        </a>
                    </div>

                    <div>
                        <a href='#'>
                            About
                        </a>
                    </div>

                    <div>
                        <a href='#'>
                            Menu
                        </a>
                    </div>

                    <div>
                        <a href='#'>
                            Events
                        </a>
                    </div>

                    <div>
                        <a href='#'>
                            Chefs
                        </a>
                    </div>

                    <div>
                        <a href='#'>
                            Gallery
                        </a>
                    </div>

                    <div className='drop'>
                        <a href='#'>DropDown</a>
                        <div className='dropdown'>
                            <div>
                                <a href='#'>DropDown 1</a>
                            </div>

                            <div>
                                <a href='#'> DropDown 2</a>
                            </div>

                            <div className='deep'>
                                <a href='#'> DeepDropDown</a>
                                <div className='deepdown'>
                                    <div>
                                        <a href='#'> DeepDropDown 1</a>
                                    </div>

                                    <div>
                                        <a href='#'>DeepDropDown 2</a>
                                    </div>

                                </div>


                            </div>

                            <div>
                                <a href='#'> DropDown 3</a>
                            </div>


                            <div>
                                <a href='#'>DropDown 4</a>
                            </div>
                        </div>

                    </div>

                    <div>
                        <a href='#'>
                            Contact
                        </a>
                    </div>

                </div>

                <div className='navcol3'>
                    <div>
                        Book a Table
                    </div>

                </div>

                <div id="bar">
                    <div>
                        <FaBars />
                    </div>


                    <div className='navcol2'>
                        <div>
                            <a href='#' id='home'>
                                Home
                            </a>
                        </div>

                        <div>
                            <a href='#'>
                                About
                            </a>
                        </div>

                        <div>
                            <a href='#'>
                                Menu
                            </a>
                        </div>

                        <div>
                            <a href='#'>
                                Events
                            </a>
                        </div>

                        <div>
                            <a href='#'>
                                Chefs
                            </a>
                        </div>

                        <div>
                            <a href='#'>
                                Gallery
                            </a>
                        </div>

                        <div className='drop'>
                            <a href='#'>DropDown</a>
                            <div className='dropdown'>
                                <div>
                                    <a href='#'>DropDown 1</a>
                                </div>

                                <div>
                                    <a href='#'> DropDown 2</a>
                                </div>

                                <div className='deep'>
                                    <a href='#'> DeepDropDown</a>
                                    <div className='deepdown'>
                                        <div>
                                            <a href='#'> DeepDropDown 1</a>
                                        </div>

                                        <div>
                                            <a href='#'>DeepDropDown 2</a>
                                        </div>

                                    </div>


                                </div>

                                <div>
                                    <a href='#'> DropDown 3</a>
                                </div>


                                <div>
                                    <a href='#'>DropDown 4</a>
                                </div>
                            </div>

                        </div>

                        <div>
                            <a href='#'>
                                Contact
                            </a>
                        </div>

                    </div>

                    

                </div>
            </div>
        </div>

    </section>
}

export default Nav 