import React from "react";

import './About2.scss'

import {BsFillClipboardDataFill} from 'react-icons/bs'

import {BsGem} from 'react-icons/bs'


import {BsFillInboxesFill} from 'react-icons/bs'


const About2=()=>{

    let card=[
        
        {
        icon:<BsFillClipboardDataFill className="ic"/>,
        para1:"Corporis voluptates officia eiusmod",
        para2:"Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip"


        },

        {
            icon:<BsGem className="ic"/>,
            para1:"Ullamco laboris ladore pan",
            para2:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt"
    
    
            },

        {
            icon:<BsFillInboxesFill  className="ic"/>,
            para1:"Labore consequatur incidid dolore",
            para2:"Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere"
        
        
            }
]



    return (<section>

        <div className='about2container'>
            <div className='about2row'>
                <div className='about2col1'>
                    <h3>
                         Why Choose Yummy?
                    </h3>

                    <p >
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                        
                    </p>

                    <h4>
                        Learn More
                        
                    </h4>
                    

                </div>
                <div className='about2col2'>
                    <div className='about2card'>
                        {
                            card.map((a,i)=>{
                                return(
                                    <div className="about2cardcol" key={i}>
                                        <div className="about2cardcol-icon">

                                            {a.icon}
                                        </div>
                                        <div className="about2cardcol-para1">
                                             {a.para1}
                                        </div>

                                        <div className="about2cardcol-para2">
                                             {a.para2}
                                        </div>
                                        
                                    </div>
                                    
                                )
                               
                            })
                        }
                        
                    </div>

                    

                </div>
            </div>

        </div>

    </section>)
}

export default About2