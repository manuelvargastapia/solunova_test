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
            setImageNumber((prev) => (prev === 6 ? 7 : (prev + 1) % 7));
        }, 10000);
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
