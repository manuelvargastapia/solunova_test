import { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';
import classes from './index.module.css';

const BackgroundImage = () => {
    const [imageNumber, setImageNumber] = useState(1);
    const transitions = useTransition(`/images/background_${imageNumber}.png`, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
    });

    useEffect(() => {
        setInterval(() => {
            setImageNumber(Math.floor(Math.random() * 7) + 1);
        }, 20000);
    }, []);

    return transitions(({ opacity }, item) => (
        <animated.div
            className={classes['background-img']}
            style={{
                opacity,
                backgroundImage: `url("${item}")`,
            }}
        />
    ));
};

export default BackgroundImage;
