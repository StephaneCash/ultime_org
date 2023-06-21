import React from 'react'
import "./Carte.css"
import carte from "../../assets/images/map-etablissements.png"

const Carte = () => {
    return (
        <div className='carte'>
            <div className='large-title'>Carte des établissements et associations</div>
            <div className='card'>
                <div className='text'>
                    <div className='title-small'>
                        Au coeur des territoires
                    </div>
                    <div className='desc'>
                        Les besoins émergent, partout, chacun avec ses spécificités locales et territoriales.
                        Le Groupe SOS est implanté dans plus de 40 pays pour répondre aux besoins des plus vulnérables, des
                        générations futures et des territoires. Le Groupe SOS agit sur
                        le terrain pour construire avec les habitants et les acteurs locaux
                        des solutions à leurs problématiques écologiques et sociales.
                    </div>
                    <div className='button'>
                        <button className='btn'>Découvrir</button>
                    </div>
                </div>

                <div className='imageCarte'>
                    <img src={carte} alt="Image_carte" />
                </div>
            </div>
        </div>
    )
}

export default Carte