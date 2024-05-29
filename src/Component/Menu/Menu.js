import React from 'react'

import './Menu.scss'

import menu1 from '../../image/menu-item-1.png'
import menu2 from '../../image/menu-item-2.png'
import menu3 from '../../image/menu-item-3.png'

import menu4 from '../../image/menu-item-4.png'

import menu5 from '../../image/menu-item-5.png'

import menu6 from '../../image/menu-item-6.png'


const Menu = () => {

    let food = [
        {
            name: "Magnam Tiste",
            type: "Lorem, deren, trataro, filede, nerada",
            rate: "$5.95",
            src: menu1

        },

        {
            name: "Aut Luia",
            type: "Lorem, deren, trataro, filede, nerada",
            rate: "$14.95",
            src: menu2

        },


        {
            name: "Est Eligendi",
            type: "Lorem, deren, trataro, filede, nerada",
            rate: "$8.95",
            src: menu3

        },

        {
            name: "Eos Luibusdam",
            type: "Lorem, deren, trataro, filede, nerada",
            rate: "$12.95",
            src: menu4

        },

        {
            name: "Eos Luibusdam",
            type: "Lorem, deren, trataro, filede, nerada",
            rate: "$12.95",
            src: menu5

        },

        {
            name: "Laboriosam Direva",
            type: "Lorem, deren, trataro, filede, nerada",
            rate: "$9.95",
            src: menu6

        }


    ]


    return <section>
        <div className='menucon'>
            <div className='menurow1'>
                <div className='menucol1'>
                    <h4>
                        OUR MENU
                    </h4>

                    <h2>
                        Check Our <span> Yummy Menu</span>
                    </h2>

                </div>

                <div className='menucol2'>
                    <div id='start'>
                        Starters
                    </div>

                    <div id='break'>
                        <a>Breakfast</a>
                    </div>

                    <div id='lunch' >
                        <a>Lunch</a>
                    </div>

                    <div id='dinner'>
                        <a>Dinner</a>
                    </div>
                </div>

                <div className='menucol1' >
                    <h4>
                        MENU
                    </h4>

                    <h3 id='start1'>
                        <span >Starters</span>
                    </h3>

                    {/* <h2 id='break1'>
                        <span >Breakfast</span>
                    </h2>

                    <h2 id='lunch1'>
                        <span >Lunch</span>
                    </h2>

                    <h2 id='dinner1'>
                        <span >Dinner</span>
                    </h2> */}

                </div>

            </div>

            <div className='menurow2'>
                <div className='menucol'>
                    {
                        food.map((a, i) => {
                            return(
                            <div className='menucard' key={i}>

                                <div>
                                    <img src={a.src} />
                                </div>

                                <h3>
                                    {a.name}
                                </h3>

                                <h4>
                                    {a.type}
                                </h4>

                                <p>
                                    <span>{a.rate}</span>
                                </p>
                            </div>
                        )})
                    }

                </div>

            </div>


        </div>
    </section>
}




export default Menu