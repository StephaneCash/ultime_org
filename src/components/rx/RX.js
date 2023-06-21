import React from 'react'
import "./RX.css"
import { Link } from 'react-router-dom'
import { FiPhone } from 'react-icons/fi';
import fb from "../../assets/images/fb.jpg"
import facebook from "../../assets/images/fblogo.png"
import instagram from "../../assets/images/icone-instagram-logo-insigne-moderne_578229-124.jpg"
import twitter from "../../assets/images/Twitter_2012_logo.svg.png";
import youtube from "../../assets/images/logo-youtube-lecteur-video-conception-3d-interface-lecteur-multimedia-video_41204-12379.jpg"

const RX = () => {
    return (
        <div className='rx'>
            <div className='row1'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <div className='title'>Retrouvez-nous sur:</div>
                        <div className='iconsRx'>
                            
                            <div className='col1'>
                                <div className='iconsText'>
                                    <img src={facebook} alt="" />
                                    <div className='desc'>
                                        <div className='nbr fb'>1099900</div>
                                        <Link to="/">Facebook</Link>
                                    </div>
                                </div>
                                <div className='iconsText'>
                                    <img src={instagram} alt="" />
                                    <div className='desc'>
                                        <div className='nbr in'>5656556</div>
                                        <Link to="/">Instagram</Link>
                                    </div>
                                </div>
                            </div>

                            <div className='col1'>
                                <div className='iconsText'>
                                    <img src={twitter} alt="" />
                                    <div className='desc'>
                                        <div className='nbr tw'>1556</div>
                                        <Link to="/">Twitter</Link>
                                    </div>
                                </div>
                                <div className='iconsText'>
                                    <img src={youtube} alt="" />
                                    <div className='desc'>
                                        <div className='nbr yt'>78776</div>
                                        <Link to="/">Youtube</Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='title'>Fil sur Facebook</div>
                        <div>
                            <img src={fb} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='row2'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <div className='title'>
                            Formation droits de l'enfant
                        </div>
                        <div>
                            L’association met au service des professionnels de la protection de l’enfance son expérience de
                            60 ans. Nos formations s’adressent à tous les professionnels de la protection de l’enfance.
                        </div>
                        <button className='btn'>INSCRIVEZ-VOUS</button>
                    </div>
                    <div className='col-sm-6'>
                        <div className='desc'>
                            <div className='iconText'>
                                <FiPhone />
                                <span>445</span>
                            </div>
                            <div>Allo enfance en danger</div>
                        </div>
                        <div className='border'></div>
                        <div className='desc'>
                            <div className='iconText'>
                                <FiPhone />
                                <span>11 445</span>
                            </div>
                            <div>Allo enfants disparus</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RX