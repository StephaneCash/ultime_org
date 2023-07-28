import React, { useEffect, useState } from 'react'
import "./Publications.css"
import { FaAngleRight, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { baseUrlImage } from '../../bases/baseUrl'
import { FaRegFilePdf } from "react-icons/fa"

const Publications = () => {

    const [cunt, setCunt] = useState(3);
    const [windowSize, setWindowSize] = useState(
        window.innerWidth
    );

    const list = useSelector(state => state.publications.value);
    const listPub = list && list.length > 0 && list.slice(0,
        windowSize <= 1150 ? cunt + 1 : cunt);

    useEffect(() => {
        function handleRezise() {
            setWindowSize(window.innerWidth)
        }

        window.addEventListener('resize', handleRezise);

        return () => window.removeEventListener('resize', handleRezise)

    }, [windowSize]);

    console.log(windowSize)

    return (
        <div className='publications'>
            <div className='path'>
                <div className='accueilPath'>
                    <FaHome />
                    <Link to="/">Accueil</Link>
                </div> <FaAngleRight /> <span>Toutes les publications</span>
            </div>

            <div className='imageBg'>
                <div className='overPlay'></div>
                <div className='text'>Toutes nos publications</div>
            </div>
            <div className='title'>
                <h1>Publications</h1>
                <hr />
            </div>
            <div className='grille'>
                {
                    listPub && listPub.length > 0 && listPub.map(val => {
                        return <Link
                            to={{
                                pathname: `/publications/${val.nom}`
                            }} state={{
                                val: val
                            }} className='card' key={val.id}>
                            <img src={baseUrlImage + "/" + val.url} alt="" />

                            <div className='bodyCard'>
                                <span>
                                    {
                                        val && val.nom && val.nom.length > 30 ? val.nom.substring(0, 30) + "..." :
                                            val && val.nom
                                    }
                                </span>
                                <div className='desc'>
                                    {
                                        val && val.description && val.description.length > 100 ? val.description.substring(0, 100) + "..." :
                                            val && val.description
                                    }
                                </div>

                                {
                                    val && val.urlPDF ?
                                        <a className='btn' href={val && baseUrlImage + "/" + val.urlPDF} download>
                                            <FaRegFilePdf />     Télécharger
                                        </a> : ""
                                }
                            </div>
                        </Link>
                    })
                }
            </div>
            <div className='lastBtn'>
                {
                    listPub && list && list.length === listPub.length ?
                        <button disabled={listPub && list && list.length === listPub.length ? true : false} >Plus de données à affichier</button> :
                        <button onClick={() => setCunt(cunt + 3)}>Charger plus</button>
                }
            </div>
        </div>
    )
}

export default Publications