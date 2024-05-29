import React from "react";

import './Chef.scss'

import { FaTwitter, FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import c1 from '../../image/chefs-1.jpg'
import c2 from '../../image/chefs-2.jpg'
import c3 from '../../image/chefs-3.jpg'
import cover from '../../image/cover.png'

const Chef = () => {

    let work = [
        {
            name: "Walter White",
            icont: <FaTwitter className="icon"></FaTwitter>,
            iconf: <FaFacebook className="icon"/>,
            iconi: <FaInstagram className="icon"/>,
            iconl: <FaLinkedinIn className="icon"/>,

            head: "Master Chef",
            para: "Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.",
            image: c1

        },

        {
            name: "Sarah Jhonson",
            head: "Patissier",
            icont: <FaTwitter className="icon"></FaTwitter>,
            iconf: <FaFacebook className="icon"/>,
            iconi: <FaInstagram className="icon"/>,
            iconl: <FaLinkedinIn className="icon"/>,

            para: "Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.",
            image: c2

        },

        {
            name: "William Anderson",
            icont: <FaTwitter className="icon"></FaTwitter>,
            iconf: <FaFacebook className="icon"/>,
            iconi: <FaInstagram className="icon"/>,
            iconl: <FaLinkedinIn className="icon"/>,

            head: "Cook",
            para: "Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.",
            image: c3

        }
    ]
    return <section>

        <div className="chefcon">
            <div className="chefrow">
                <div className="chefcol1">
                    <h5>
                        CHEFS
                    </h5>
                    <h2>
                        Our <span>Proffesional</span> Chefs

                    </h2>


                </div>

                <div className="chefcol2">

                    <div className="chefcard">


                        {
                            work.map((a, b) => {
                                return <div className="chefcards" key={b}>

                                    <div className="chefimg">
                                        <img src={a.image}  alt='loading'/>
                                    </div>

                                    <div className="cheficon">
                                        {a.icont}<br /><br />
                                        {a.iconf}<br /><br />
                                        {a.iconi}<br /><br />
                                        {a.iconl}
                                    </div>

                                    <div className="chefcover">
                                        <img src={cover}  alt='loading'/>
                                    </div>

                                    <div className="detail">

                                        <h2>
                                            {a.name}

                                        </h2>

                                        <h3>
                                            {a.head}
                                        </h3>

                                        <p>

                                            {a.para}

                                        </p>
                                    </div>

                                </div>
                            })
                        }

                    </div>

                </div>

            </div>
        </div>

    </section>
}

export default Chef