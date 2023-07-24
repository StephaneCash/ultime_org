import React from 'react'
import "./Don.css"
import { toast } from 'react-toastify'

const Don = () => {

    const donHandle = () => {
        toast("Service non disponible et encours de développement...");
    };

    return (
        <div className='don'>
            <div className='title'>Soutenez la fondation</div>
            <div className='col1'>
                <div className='btnMontant'>
                    <input type="text" className='form-control' placeholder='Montant libre en $' />
                </div>
                <div className='tranches'>
                    <div className="row1">
                        <input className="row1-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <div className="row1-div" htmlFor="flexRadioDefault1">
                            50 $
                        </div>
                    </div>
                    <div className="row1">
                        <input className="row1-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <div className="row1-div" htmlFor="flexRadioDefault2">
                            100 $
                        </div>
                    </div>
                    <div className="row1">
                        <input className="row1-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <div className="row1-div" htmlFor="flexRadioDefault2">
                            200 $
                        </div>
                    </div>
                    <div className="row1">
                        <input className="row1-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <div className="row1-div" htmlFor="flexRadioDefault2">
                            500 $
                        </div>
                    </div>
                </div>
                <div className='btnJedonne'>
                    <button className='btn' onClick={() => donHandle()}>Je donne maintenant</button>
                </div>
            </div>
        </div>
    )
}

export default Don