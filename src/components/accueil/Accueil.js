import React, { useEffect, useState } from 'react';
import "./Accueil.css"
import { FaArrowRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { baseUrlImage } from '../../bases/baseUrl';

const Accueil = () => {

  const doc = useSelector(state => state.documents.value);
  const images = useSelector(state => state.images.value);

  const [imagesTrie, setImagesTrie] = useState([])

  useEffect(() => {
    let div = document.querySelector(".textDiv");
    doc && doc.map(val => {
      if (val.nom === "accueilSite") {
        return div.innerHTML = val.description
      } else {
        return null
      }
    })
  }, [doc]);

  useEffect(() => {
    let arr = []
    images && images.length > 0 && images.map(val => {
      if (val && val.nom && val.nom.match(/Accueil/))
        arr.push(val)
      return arr;
    })
    setImagesTrie(arr)
  }, [images]);

  return (
    <div className='acceuil'>
      <div className='text'>
        <div className='textDiv' style={{ width: "100%" }}></div>
        <div className='divBtn'>
          <button className='btn'>
            <span>En savoir plus </span>
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className='imagesCarrousel'>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={5000}
        >
          {
            imagesTrie && imagesTrie.length > 0 ?
              imagesTrie.map(value => {
                return <div key={value.id}>
                  <img src={baseUrlImage + "/" + value.url} alt={value.nom} />
                  <p className="legend">{value.nom}</p>
                </div>
              })
              : <div></div>
          }
        </Carousel>
      </div>
    </div>
  )
}

export default Accueil