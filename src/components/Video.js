import React, {useState, useContext} from 'react';
import vauhtiKiihtyy from '../video/matti_ja_teppo_vauhti_kiihtyy_2021.mp4'
import kulkuset from '../video/kulkuset.mp4'
import Snow from "./Snow";
import matti from '../images/matti.png';
import teppo from '../images/teppo.png';
import Soosoo from "./Soosoo";
import facts from '../utils/facts.json';
import { CalendarContext } from '../context/CalendarContext';

const Video = ({index}) => {
    const {
        isVideoVisible, 
        setIsVideoVisible,
        isSoosooVisible, 
        setIsSoosooVisible,
        onDayClick
    } = useContext(CalendarContext);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const baseSpeed = 0.2;

    const playVideo = () => {
        const video = document.querySelector('video');
        setIsVideoPlaying(true);
        video.playbackRate = index === 24 ? 1 : baseSpeed+(0.1*index);
        video.play();
    }

    const pauseVideo = () => {
        setIsVideoPlaying(false);
       document.querySelector('video').pause()
    }

    const closeVideo = () => {
        setIsVideoPlaying(false);
        setIsVideoVisible(false);
    }

    const animationSpeed = index === 24 ? 4 : 4/24*(25-index);

    return (
        <>
            <div className='day'
                 onClick={onDayClick}>
                {index}
            </div>
            {isVideoVisible[index] &&
                <div className='backdrop'>
                    <div className="info-text-container">
                        <p>{facts[index]}</p>
                    </div>
                    <div id='Matti'
                         className={`mattiteppo ${isVideoPlaying && (index === 24 ? 'danceAnimation' : 'spinAnimation')}`}
                         style={{animationDuration: `${animationSpeed}s`}}>
                        <img src={matti} alt={"Matti"}/>
                    </div>

                    <div id='Teppo'
                         className={`mattiteppo ${isVideoPlaying && (index === 24 ? 'danceAnimation' : 'spinAnimation')}`}
                         style={{animationDuration: `${animationSpeed}s`}}>
                        <img src={teppo} alt={"Teppo"}/>
                    </div>

                    <div className='video-container'>
                        <div className="button-container">
                            <button onClick={closeVideo}
                                    className='close'>
                                Sulje
                            </button>
                        </div>
                        <video width="auto" height="300">
                            <source src={index === 24 ? kulkuset : vauhtiKiihtyy} type="video/mp4"/>
                        </video>
                        <div className='controls'>
                            <button onClick={playVideo}>
                                Soita
                            </button>
                            <button onClick={pauseVideo}>
                                Pysäytä
                            </button>
                        </div>
                    </div>

                    {isVideoPlaying && <Snow/>}

                </div>
            }
            {isSoosooVisible[index] && <Soosoo setIsSoosooVisible={setIsSoosooVisible}/>}
        </>
    );
};

export default Video;