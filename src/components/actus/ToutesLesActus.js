import React, { useEffect, useState } from 'react'
import { FaHome, FaAngleRight } from "react-icons/fa"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { baseUrlImage } from '../../bases/baseUrl'
import { dateParserFunction } from '../../utils'

const ToutesLesActus = () => {

  const categoriesActus = useSelector(state => state.categorieActus.value);
  const actualites = useSelector(state => state.actualites.value);

  const [selectItem, setSelectItem] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className='toutesActus'>
      <div className='path'>
        <div className='accueilPath'>
          <FaHome />
          <Link to="/">Accueil</Link>
        </div> <FaAngleRight /> <span>Toutes les actualités</span>
      </div>

      <div className='mainContent'>
        <div className='imageBg'>
          <div className='overPlay'></div>
          <div className='text'>Toutes nos actualités</div>
        </div>

        <ul>
          {
            categoriesActus ? categoriesActus.length > 0 ?
              categoriesActus.map(val => {
                return <li key={val.id} onClick={() => setSelectItem(val.id)} className={selectItem === val.id ? "selected" : ""}>{val.nom}</li>
              })
              : "Chargement..." : "Pas de données disponibles"
          }
          <li onClick={() => setSelectItem(0)}>Toutes les catégories</li>
        </ul>

        <div className='grille'>
          {
            actualites && actualites.length > 0 ? actualites.map(val => {
              if (selectItem) {
                if (val && val.categorie && val.categorie.id === selectItem) {
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

                    <div className='linkGetActusById'>
                      <Link to="/actus/">Lire la suite...</Link>
                    </div>
                  </div>
                }
              } else {
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

                  <div className='linkGetActusById'>
                    <Link to={{
                      pathname: `/actus/${val.nom}`
                    }} state={{
                      val: val
                    }} className='btn'>Lire la suite...</Link>
                  </div>
                </div>
              }
            }) : "Chargement..."
          }
        </div>
      </div>
    </div>
  )
}

export default ToutesLesActus