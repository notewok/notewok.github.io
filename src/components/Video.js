import React, {useState} from 'react';
import vauhtiKiihtyy from '../video/matti_ja_teppo_vauhti_kiihtyy_2021.mp4'
import Matti from '../images/Matti.png';
import Teppo from '../images/Teppo.png';

const Video = ({index}) => {
    const [isVisible, setIsVisible] = useState(false);
    const baseSpeed = 0.2;

    const playVideo = () => {
        setIsVisible(true);
        const video = document.querySelector('video');
        console.log(baseSpeed+(0.1*index))
        video.playbackRate = baseSpeed+(0.1*index);
        video.play();
    }

    return (
        <>
            <div className='day' onClick={playVideo}>{index}</div>
            {isVisible &&
                <div className='backdrop'>

                    <div id='Matti' className='mattiteppo'>
                        <img src={Matti}/>
                    </div>

                    <div id='Teppo' className='mattiteppo'>
                        <img src={Teppo}/>
                    </div>

                    <button onClick={() => setIsVisible(false)} className='close'>Sulje</button>
                    <div className='video-container'>
                        <video width="320" height="240">
                            <source src={vauhtiKiihtyy} type="video/mp4"/>
                        </video>
                        <div className='controls'>
                            <button onClick={playVideo}>Soita</button>
                            <button onClick={() => document.querySelector('video').pause()}>Pysäytä</button>
                        </div>
                    </div>

                </div>
            }
        </>
    );
};

export default Video;