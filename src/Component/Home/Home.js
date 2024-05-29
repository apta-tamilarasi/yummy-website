import React, { Component } from 'react'
import './Home.scss'

import { FaPlay } from 'react-icons/fa'

import food from '../../image/food.png'

class Home extends Component {

    render() {

        return <section>
            <div className='homecontainer'>
                <div className='homerow'>

                    <div className='homecol3'>
                        <img src={food}  alt='loading'/>
                    </div>

                    <div className='homecol1'>
                        <div id='homecol1-1'>
                            Enjoy Your Healthy <br/>Delicious Food
                        </div>

                        <div id='homecol1-4'>
                            Sed autem laudantium dolores.<br/>
                             Voluptatem itaque ea consequatur eveniet.
                              Eum quas beatae cumque eum <br/>
                              quaerat.
                        </div>

                        <div id='homecol1-2'>
                            Sed autem laudantium dolores. Voluptatem
                            itaque ea<br /> consequatur eveniet. Eum quas beatae 
                            cumque eum <br />quaerat.
                        </div>

                        <div id='homecol1-3'>
                            <div id='book'>
                                Book a Table
                            </div>

                            <div id='icons'>
                                <div id='icon'>
                                    <FaPlay />
                                </div>
                                <div id='watch'>
                                    Watch Video
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='homecol2'>
                        <img src={food}  alt='loading'/>

                    </div>

                </div>
            </div>
        </section>
    }

}


export default Home