import classes from './index.module.css';

const VideoEmbed = () => (
    <iframe
        className={classes.iframe}
        src="https://www.youtube.com/embed/u4-FCsiF5x4?autoplay=1&mute=1&controls=0&playlist=u4-FCsiF5x4&loop=1"
        allow="autoplay"
        frameBorder="0"
        title="Horizon Zero Dawn - E3 2016 Trailer I PS4"
    />
);

export default VideoEmbed;
