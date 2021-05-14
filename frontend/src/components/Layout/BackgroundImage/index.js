import { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';
import classes from './index.module.css';

const images = [
    { id: 0, url: '/images/background_1.png' },
    { id: 1, url: '/images/background_2.png' },
    { id: 2, url: '/images/background_3.png' },
    { id: 3, url: '/images/background_4.png' },
    { id: 4, url: '/images/background_5.png' },
    { id: 5, url: '/images/background_6.png' },
    { id: 6, url: '/images/background_7.png' },
];

const BackgroundImage = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const transitions = useTransition(images[imageIndex], (item) => item.id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
    });

    useEffect(() => {
        setInterval(() => {
            setImageIndex(Math.floor(Math.random() * 7));
        }, 20000);
    }, []);

    return transitions.map(({ item, props, key }) => (
        <animated.div
            key={key}
            className={classes['background-img']}
            style={{
                ...props,
                backgroundImage: `url("${item.url}")`,
            }}
        />
    ));
};

export default BackgroundImage;
