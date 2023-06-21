import React from 'react';
import "./Accueil.css"
import imgAc from "../../assets/images/main.jpg"
import { FaArrowRight } from 'react-icons/fa';

const Accueil = () => {
  return (
    <div className='acceuil'>
      <div className='overPlay'></div>
      <div className='text'>
        <div>
          <h6>Se construire dans la persévérance</h6>
          <div className='smallTextAndBnt'>
            <span className='text-small'>Que ce soit au siège ou en village d’enfants SOS, nous avons tous un rôle à jouer auprès des enfants que nous accueillons.
            </span>
          </div>

          <div className='divBtn'>
            <button className='btn'>
              <span>En savoir plus </span>
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className='imageContent'>
          <img src={imgAc} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Accueil