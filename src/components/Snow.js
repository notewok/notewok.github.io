import React from 'react';
import snowflake1 from '../images/snowflake1.svg';
import snowflake2 from '../images/snowflake2.svg';
import snowflake3 from '../images/snowflake3.svg';

function getRandomInt(max, min = 1, floor = true) {
    return floor ? Math.floor(Math.random() * (max - min)) + min : Math.random() * (max - min) + min;
}

const Snow = () => {
    const createSnowfall = () => {
        const snowflakeImages = {
            0: snowflake1,
            1: snowflake2,
            2: snowflake3
        };
        const windowWidth = window.innerWidth;
        const snowflakeAmount = 150;
        const snowflakeSizes = ['20px', '40px', '60px'];

        const snowflakes = [];
        for (let i = 0; i <= snowflakeAmount; i++) {
            const imageSize = snowflakeSizes[getRandomInt(3)];
            snowflakes.push(<img alt='snowflake' key={i} className={`filter-blue${getRandomInt(3)} fall snowflake`}
                                 src={snowflakeImages[getRandomInt(3)]}
                                 style={{
                                     width: imageSize,
                                     height: imageSize,
                                     left: getRandomInt(windowWidth - 70, 10),
                                     animationDuration: `${getRandomInt(20, 5)}s`,
                                     animationDelay: `${getRandomInt(10, 1, false)}s`
                                 }}/>);
        }
        return snowflakes;
    }

    return createSnowfall();
};

export default Snow;