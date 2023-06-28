import React from 'react'
import "./Main.css"

const Main = () => {
    return (
        <div className='mainApps'>
            <h5>Découvrir</h5>

            <div className='cards'>
                <div className='card'>
                    <div className='card-body'>
                        Ecole
                    </div>
                </div>

                <div className='card'>
                    <div className='card-body'>
                        Hôpital
                    </div>
                </div>

                <div className='card'>
                    <div className='card-body'>
                        Magazine
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main