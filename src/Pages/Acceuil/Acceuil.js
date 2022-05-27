import React from 'react'
import Tcinema from '../../component/Tcinema/Tcinema';
import Ttv from '../../component/Ttv/Ttv';


function Acceuil() {

    return (
        <div>
            <div className='container-fluid' >
                <div className='container section' >
                    <Tcinema />
                    <Ttv />
                </div>
            </div>
        </div>
    )
}

export default Acceuil