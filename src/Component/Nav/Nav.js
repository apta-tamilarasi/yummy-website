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
                        <a id='home'>
                            Home
                        </a>
                    </div>

                    <div>
                        <a>
                            About
                        </a>
                    </div>

                    <div>
                        <a>
                            Menu
                        </a>
                    </div>

                    <div>
                        <a>
                            Events
                        </a>
                    </div>

                    <div>
                        <a>
                            Chefs
                        </a>
                    </div>

                    <div>
                        <a>
                            Gallery
                        </a>
                    </div>

                    <div className='drop'>
                        <a>DropDown</a>
                        <div className='dropdown'>
                            <div>
                                <a>DropDown 1</a>
                            </div>

                            <div>
                                <a> DropDown 2</a>
                            </div>

                            <div className='deep'>
                                <a> DeepDropDown</a>
                                <div className='deepdown'>
                                    <div>
                                        <a> DeepDropDown 1</a>
                                    </div>

                                    <div>
                                        <a>DeepDropDown 2</a>
                                    </div>

                                </div>


                            </div>

                            <div>
                                <a> DropDown 3</a>
                            </div>


                            <div>
                                <a>DropDown 4</a>
                            </div>
                        </div>

                    </div>

                    <div>
                        <a>
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
                            <a id='home'>
                                Home
                            </a>
                        </div>

                        <div>
                            <a>
                                About
                            </a>
                        </div>

                        <div>
                            <a>
                                Menu
                            </a>
                        </div>

                        <div>
                            <a>
                                Events
                            </a>
                        </div>

                        <div>
                            <a>
                                Chefs
                            </a>
                        </div>

                        <div>
                            <a>
                                Gallery
                            </a>
                        </div>

                        <div className='drop'>
                            <a>DropDown</a>
                            <div className='dropdown'>
                                <div>
                                    <a>DropDown 1</a>
                                </div>

                                <div>
                                    <a> DropDown 2</a>
                                </div>

                                <div className='deep'>
                                    <a> DeepDropDown</a>
                                    <div className='deepdown'>
                                        <div>
                                            <a> DeepDropDown 1</a>
                                        </div>

                                        <div>
                                            <a>DeepDropDown 2</a>
                                        </div>

                                    </div>


                                </div>

                                <div>
                                    <a> DropDown 3</a>
                                </div>


                                <div>
                                    <a>DropDown 4</a>
                                </div>
                            </div>

                        </div>

                        <div>
                            <a>
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