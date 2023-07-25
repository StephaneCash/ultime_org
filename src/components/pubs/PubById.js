import React, { useEffect, useState } from 'react'
import "./PubById.css"
import { Link, useLocation } from 'react-router-dom'
import { dateParserFunction } from '../../utils';
import { baseUrlImage } from '../../bases/baseUrl';
import { FaAngleRight, FaHome } from 'react-icons/fa';

const PubById = () => {

    const [img, setImg] = useState('');

    const location = useLocation();
    const { state } = location;

    useEffect(() => {
        if (state) {
            setImg(state && state.val && state.val.url.replace(/\\/g, "/"));
        }
    }, [state]);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const desc = state && state.val && state.val.description;
    const splitDesc = desc && desc.split('.');

    const nom = state && state.val && state.val.nom;

    return (
        <div className='pubById'>
            <div className='toolbar'>
                <div className='accueilPath'>
                    <FaHome />
                    <Link to="/">Accueil</Link>
                </div>
                <FaAngleRight />
                <Link to="/publications">Publications</Link>
                <FaAngleRight /> <span>
                    {nom && nom.length > 100 ? nom.substring(0, 100) + "..." : nom}
                </span>
            </div>

            <div className='annonce' style={{ backgroundImage: `url(${baseUrlImage + "/" + img})` }}>
                <div className='overPlay'></div>
                <div className='text'>
                    <div className='theme'>Publications</div>
                    <div className='title'>
                        {
                            state && state.val && state.val.nom
                                && state.val.nom.length > 150 ? state.val.nom.substring(0, 150) + "..." : state.val.nom
                        }
                    </div>
                    <div className='catDate'>
                        <div className='dateParser'>
                            {
                                dateParserFunction(state && state.val && state.val.createdAt)
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className='description'>
                <div className='title'>
                    {state && state.val && state.val.nom}
                </div>
                <div className='desc'>
                    <div className='text'>
                        {
                            splitDesc && splitDesc.map((val, i) => {
                                return <p key={i}>
                                    {splitDesc[i]}
                                </p>
                            })
                        }
                    </div>
                    <div className='image'>
                        <img src={state && state.val && baseUrlImage + "/" + state.val.url} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PubById