import React from 'react';
import "./Actus.css"
import im5 from "../../assets/images/im4.jpeg";
import { useSelector } from 'react-redux';
import { baseUrlImage } from '../../bases/baseUrl';
import { dateParserFunction } from '../../utils';

const Actus = () => {

    const list = useSelector(state => state.actualites.value);

    const actualites = list && list.length > 0 && list.slice(0, 3)

    return (
        <div className='actus' id="actus">
            <div className='title'>Actualités</div>
            <div className='grille'>
                {
                    actualites && actualites.length > 0 ? actualites.map(val => {
                        return <div className='card'>
                            <div className='cardImage'>
                                <img src={baseUrlImage + "/" + val.url} alt="Actu1" />
                            </div>
                            <span>
                                {dateParserFunction(val.createdAt)}
                            </span>
                            <div className='titleActus'>
                                {
                                    val && val.nom && val.nom.length > 50 ? val.nom.substring(0, 50) + "..." : val.nom
                                }
                            </div>
                            <div className='descActus'>
                                {
                                    val && val.description && val.description.length > 200 ? val.description.substring(0, 200) + "..." : val.description
                                }
                            </div>

                            <div className='button'>
                                <button className='btn'>Lire la suite...</button>
                            </div>
                        </div>

                    }) : "Chargement..."
                }

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