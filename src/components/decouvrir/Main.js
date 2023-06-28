import React from 'react'
import "./Main.css"
import ecole from "../../assets/images/im4.jpeg"
import hopital from "../../assets/images/hop.JPG"
import magazine from "../../assets/images/imagehandle.jpeg"
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <div className='mainApps'>
            <h5>Découvrir</h5>

            <div className='cards'>
                <div className='card'>
                    <div className='card-body'>
                        <img src={ecole} alt="" />
                        <div>Ecole FUE</div>
                        <p>
                            Établissement où l'on donne un enseignement collectif général. 2. Institution chargée de donner un
                            enseignement collectif général aux enfants...
                        </p>
                    </div>
                    <div className='card-footer'>
                        <Link to="/">
                            <div>En savoir plus</div>
                        </Link>
                    </div>
                </div>

                <div className='card'>
                    <div className='card-body'>
                        <img src={hopital} alt="" />
                        <div>HOPITAL FUE</div>
                        <p>
                            Établissement où l'on donne un enseignement collectif général. 2. Institution chargée de donner un enseignement
                            collectif...
                        </p>
                    </div>
                    <div className='card-footer'>
                        <Link to="/">
                            <span>En savoir plus</span>
                        </Link>
                    </div>
                </div>

                <div className='card'>
                    <div className='card-body'>
                        <img src={magazine} alt="" />
                        <div>MAGAZINE FUE</div>
                        <p>
                            Un magazine est une publication périodique, le plus souvent illustrée, de pagination variable,
                            traitant de sujets généralistes ou spécialisés...
                        </p>
                    </div>
                    <div className='card-footer'>
                        <Link to="/">
                            <span>En savoir plus</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main