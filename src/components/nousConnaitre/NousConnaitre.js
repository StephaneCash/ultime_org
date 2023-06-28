import React, { useState } from 'react'
import { FaAngleRight, FaHome } from 'react-icons/fa'
import "./NousConnaitre.css"
import { Link } from 'react-router-dom'
import Histoire from './histoire/Histoire'

const NousConnaitre = () => {

    const [selectItem, setSelectItem] = useState(0);

    return (
        <div className='nousConnaitre'>
            <div className='path'>
                <div className='accueilPath'>
                    <FaHome />
                    <Link to="/">Accueil</Link>
                </div> <FaAngleRight /> <span>Nous connaître</span>
            </div>

            <div className='mainNousConnaitre'>
                <ul>
                    <li onClick={() => setSelectItem(0)} className={selectItem === 0 ? "selected" : ""}>Notre histoire</li>
                    <li onClick={() => setSelectItem(1)} className={selectItem === 1 ? "selected" : ""}>Portraits</li>
                    <li onClick={() => setSelectItem(2)} className={selectItem === 2 ? "selected" : ""}>La gouvernance</li>
                    <li onClick={() => setSelectItem(3)} className={selectItem === 3 ? "selected" : ""}>Notre fondation</li>
                </ul>
            </div>

            <div className='dataShow'>
                {
                    selectItem === 0 ?
                        <Histoire /> : ""
                }
            </div>
        </div>
    )
}

export default NousConnaitre