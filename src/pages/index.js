import React from 'react'
import Don from '../components/formDon/Don'
import Actus from '../components/actus/Actus'
import Accueil from '../components/accueil/Accueil'
import Video from '../components/videos/Video'
import Agir from '../components/agir/Agir'
import Secteurs from '../components/secteurs/Secteurs'
import Carte from '../components/carte/Carte'
import Temoignages from '../components/temoignages/Temoignages'
import RX from '../components/rx/RX'
import Main from '../components/decouvrir/Main'

const Home = () => {
    return (
        <>  
            <Accueil />
            <Don />
            <Secteurs/>
            <Carte/>
            <Actus />
            <Video />
            <Agir/>
            <Temoignages/>
            <Main/>
            <RX/>
        </>
    )
}

export default Home;