import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {

    return (
        <footer id="footer">

            <div className='footer'>
                <div className='content'>
                    <a href="#">Mentions légales</a>
                    <a href="#">Contacts</a>
                    <a href="#">Questions-réponses</a>
                    <a href="#">Il faut tout un village pour grandir</a>
                </div>

                <div className='adresse'>
                    17, Croisement Tombalbaye/TravailleursC/ Gombe. Référence : en face de l’hôtel Belle vie Kinshasa, République démocratique du Congo
                </div>
            </div>
            <div className='createDev'>
                <p>
                    &copy; Fondation ultime Espoir & Compagnies 2023 tous droits réservés - Mentions légales
                </p>
            </div>
            
        </footer>
    )
}

export default Footer