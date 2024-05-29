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
                        <a href='#navsec' id='home'>
                            Home
                        </a>
                    </div>

                    <div>
                        <a href='#navsec'>
                            About
                        </a>
                    </div>

                    <div>
                        <a href='#navsec'>
                            Menu
                        </a>
                    </div>

                    <div>
                        <a href='#navsec'>
                            Events
                        </a>
                    </div>

                    <div>
                        <a href='#navsec'>
                            Chefs
                        </a>
                    </div>

                    <div>
                        <a href='#navsec'>
                            Gallery
                        </a>
                    </div>

                    <div className='drop'>
                        <a href='#navsec'>DropDown</a>
                        <div className='dropdown'>
                            <div>
                                <a href='#navsec'>DropDown 1</a>
                            </div>

                            <div>
                                <a href='#navsec'> DropDown 2</a>
                            </div>

                            <div className='deep'>
                                <a href='#navsec'> DeepDropDown</a>
                                <div className='deepdown'>
                                    <div>
                                        <a href='#navsec'> DeepDropDown 1</a>
                                    </div>

                                    <div>
                                        <a href='#navsec'>DeepDropDown 2</a>
                                    </div>

                                </div>


                            </div>

                            <div>
                                <a href='#navsec'> DropDown 3</a>
                            </div>


                            <div>
                                <a href='#navsec'>DropDown 4</a>
                            </div>
                        </div>

                    </div>

                    <div>
                        <a href='#navsec'>
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
                            <a href='#navsec' id='home'>
                                Home
                            </a>
                        </div>

                        <div>
                            <a href='#navsec'>
                                About
                            </a>
                        </div>

                        <div>
                            <a href='#navsec'>
                                Menu
                            </a>
                        </div>

                        <div>
                            <a href='#navsec'>
                                Events
                            </a>
                        </div>

                        <div>
                            <a href='#navsec'>
                                Chefs
                            </a>
                        </div>

                        <div>
                            <a href='#navsec'>
                                Gallery
                            </a>
                        </div>

                        <div className='drop'>
                            <a href='#navsec'>DropDown</a>
                            <div className='dropdown'>
                                <div>
                                    <a href='#navsec'>DropDown 1</a>
                                </div>

                                <div>
                                    <a href='#navsec'> DropDown 2</a>
                                </div>

                                <div className='deep'>
                                    <a href='#navsec'> DeepDropDown</a>
                                    <div className='deepdown'>
                                        <div>
                                            <a href='#navsec'> DeepDropDown 1</a>
                                        </div>

                                        <div>
                                            <a href='#navsec'>DeepDropDown 2</a>
                                        </div>

                                    </div>


                                </div>

                                <div>
                                    <a href='#navsec'> DropDown 3</a>
                                </div>


                                <div>
                                    <a href='#navsec'>DropDown 4</a>
                                </div>
                            </div>

                        </div>

                        <div>
                            <a href='#navsec'>
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