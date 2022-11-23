import React from 'react';
import matti from "../images/matti.png";
import teppo from "../images/teppo.png";

const Soosoo = ({setIsSoosooVisible}) => {

    const mattiLines = [
        'Jaahas Teppo! Löydettiin kaveri joka syö kaikki joulukalenterisuklaat kerralla!',
        'Eiks niin Teppo että ei se joulu sen nopeempaa tuu vaikka niitä luukkuja kuinka availis?',
        'Eipäs kurkita etukenossa!',
        'Katos Teppo! Täällä yritetään juksuttaa!',
        'Älä suotta kuluta hiirtäs! Ei se luukku avaudu ennen aikojaan.',
        'Eihän kiltit lapset availe kalenteriluukkuja etukäteen!'
    ]
    const teppoLines = [
        'Soosoo!',
        'Aijai!',
        'Tuhmaa tuhmaa!'
    ]

    return (
        <div className='soosoo-container' onClick={() => setIsSoosooVisible(false)}>
            <div id='Matti-piilossa' className='piilossa animatePeekBottom'>
                <img src={matti} alt={"Matti"}/>
                <div className='bubble bottom'>
                    {mattiLines[Math.floor(Math.random()*mattiLines.length)]}
                    <div className='triangle'/>
                </div>
            </div>

            <div id='Teppo-piilossa' className='piilossa animatePeekRight'>
                <img src={teppo} alt={"Teppo"}/>
                <div className='bubble right'>
                    {teppoLines[Math.floor(Math.random()*teppoLines.length)]}
                    <div className='triangle'/>
                </div>
            </div>
        </div>
    );
};

export default Soosoo;