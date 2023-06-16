import React from 'react'
import "./Secteurs.css"
import im1 from "../../assets/images/im3.jpg"
import im2 from "../../assets/images/im4.jpeg"
import im3 from "../../assets/images/im5.jpeg"

const Secteurs = () => {
    return (
        <div className='secteurs'>
            <div className='row1'>
                <div className='title'>
                    Entreprendre au profit de tous
                </div>
            </div>
            <div className='row2'>
                <div className='card'>
                    <div className='textBtn'>
                        <div className='title'>Auprès
                            des plus vulnérables</div>
                        <button className='btn'>En savoir plus</button>
                    </div>
                    <div className='imageEntreprendre'>
                        <img src={im1} alt="Photo_Vul" />
                    </div>
                </div>
                <div className='card'>
                    <div className='textBtn'>
                        <div className='title'>Pour les générations futures</div>
                        <button className='btn'>En savoir plus</button>
                    </div>
                    <div className='imageEntreprendre'>
                        <img src={im2} alt="Photo_futureGénération" />
                    </div>
                </div>
                <div className='card'>
                    <div className='textBtn'>
                        <div className='title'>
                            Au service des territoires
                        </div>
                        <button className='btn'>En savoir plus</button>
                    </div>
                    <div className='imageEntreprendre'>
                        <img src={im3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Secteurs