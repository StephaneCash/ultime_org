import React from 'react';
import "./Actus.css"
import im3 from "../../assets/images/im5.jpeg";
import im4 from "../../assets/images/im4.jpeg";
import im5 from "../../assets/images/im4.jpeg";

const Actus = () => {
    return (
        <div className='actus'>
            <div className='title'>Actualités</div>
            <div className='grille'>
                <div className='card'>
                    <div className='cardImage'>
                        <img src={im5} alt="Actu1" />
                    </div>
                    <span>6 juin 2023</span>
                    <div className='titleActus'>
                        Le Groupe SOS à We Love Green !
                    </div>
                    <div className='descActus'>
                        Cinq associations du Groupe SOS seront présentes au Village des Initiatives Positives du Festival We Love Green : Planète Urgence,…
                    </div>

                    <div className='button'>
                        <button className='btn'>Lire la suite...</button>
                    </div>
                </div>

                <div className='card'>
                    <div className='cardImage'>
                        <img src={im4} alt="Actu1" />
                    </div>
                    <span>8 juin 2023</span>
                    <div className='titleActus'>
                        Le Groupe SOS à We Love Green !
                    </div>
                    <div className='descActus'>
                        Cinq associations du Groupe SOS seront présentes au Village des Initiatives Positives du Festival We Love Green : Planète Urgence,…
                    </div>

                    <div className='button'>
                        <button className='btn'>Lire la suite...</button>
                    </div>
                </div>

                <div className='card'>
                    <div className='cardImage'>
                        <img src={im3} alt="Actu1" />
                    </div>
                    <span>6 juin 2023</span>
                    <div className='titleActus'>
                        Pour une Union européenne porteuse d’une ambition sociale et solidaire !
                    </div>
                    <div className='descActus'>
                        Cinq associations du Groupe SOS seront présentes au Village des Initiatives Positives du Festival We Love Green : Planète Urgence,…
                    </div>

                    <div className='button'>
                        <button className='btn'>Lire la suite...</button>
                    </div>
                </div>

            </div>

            <div className='btnToutesActus'>
                <button className='btn'>
                    <div>Toutes les actualités </div>
                </button>
            </div>
        </div>
    )
}

export default Actus