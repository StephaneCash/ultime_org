import React from 'react';
import "./Agir.css";
import { FiGlobe, FiHome, FiUserCheck, FiUsers } from 'react-icons/fi';

const Agir = () => {
    return (
        <div className='agir'>
            <span className='title-important'>Agissez avec nous</span>

            <div className='cards'>

                <div className='card'>
                    <div className='icon'>
                        <FiHome />
                    </div>
                    <div className='title'>Devenir parrain</div>
                    <div className='text'>
                        Le parrainage est un don régulier pour un village d’enfants SOS, sur la base de 20€/mois minimum
                    </div>
                </div>

                <div className='card'>
                    <div className='icon'>
                        <FiUserCheck />
                    </div>
                    <div className='title'>Faire un don</div>
                    <div className='text'>
                        Le parrainage est un don régulier pour un village d’enfants SOS, sur la base de 20€/mois minimum
                    </div>
                </div>

                <div className='card'>
                    <div className='icon'>
                        <FiGlobe />
                    </div>
                    <div className='title'>Nous rejoindre</div>
                    <div className='text'>
                        Le parrainage est un don régulier pour un village d’enfants SOS, sur la base de 20€/mois minimum
                    </div>
                </div>

                <div className='card'>
                    <div className='icon'>
                        <FiUsers />
                    </div>
                    <div className='title'>Devenir partenaire</div>
                    <div className='text'>
                        Le parrainage est un don régulier pour un village d’enfants SOS, sur la base de 20€/mois minimum
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Agir