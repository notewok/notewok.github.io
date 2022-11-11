import React, {useState} from 'react';
import vauhtiKiihtyy from '../video/matti_ja_teppo_vauhti_kiihtyy_2021.mp4'
import {useSelector} from "react-redux";
import Snow from "./Snow";
import matti from '../images/matti.png';
import teppo from '../images/teppo.png';

const Video = ({index}) => {
    const {
        rgbaValues
    } = useSelector((state) => state.figmaStyles)
    const [isVideoVisible, setIsVideoVisible] = useState(false);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const baseSpeed = 0.2;

    const playVideo = () => {
        const video = document.querySelector('video');
        setIsVideoPlaying(true);
        console.log(baseSpeed+(0.1*index))
        video.playbackRate = baseSpeed+(0.1*index);
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

    const animationSpeed = 4/24*(25-index);

    return (
        <>
            <div className='day'
                 onClick={() => setIsVideoVisible(true)}
                 style={{background: rgbaValues.green, color: rgbaValues.lightRed}}>
                {index}
            </div>
            {isVideoVisible &&
                <div className='backdrop'>
                    <div id='Matti'
                         className={`mattiteppo ${isVideoPlaying && 'spinAnimation'}`}
                         style={{animationDuration: `${animationSpeed}s`}}>
                        <img src={matti} alt={"Matti"}/>
                    </div>

                    <div id='Teppo'
                         className={`mattiteppo ${isVideoPlaying && 'spinAnimation'}`}
                         style={{animationDuration: `${animationSpeed}s`}}>
                        <img src={teppo} alt={"Teppo"}/>
                    </div>

                    <div className='video-container'>
                        <div className="button-container" style={{background: rgbaValues.lightGreen}}>
                            <button onClick={closeVideo}
                                    style={{background: rgbaValues.lightRed, color: rgbaValues.green}}
                                    className='close'>
                                Sulje
                            </button>
                        </div>
                        <video width="100%" height="auto">
                            <source src={vauhtiKiihtyy} type="video/mp4"/>
                        </video>
                        <div className='controls' style={{background: rgbaValues.lightGreen}}>
                            <button onClick={playVideo} style={{background: rgbaValues.lightRed, color: rgbaValues.green}}>
                                Soita
                            </button>
                            <button onClick={pauseVideo}
                                    style={{background: rgbaValues.lightRed, color: rgbaValues.green}}>
                                Pysäytä
                            </button>
                        </div>
                    </div>
                    {isVideoPlaying && <Snow/>}
                </div>
            }
        </>
    );
};

export default Video;