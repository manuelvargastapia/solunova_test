import classes from './index.module.css';

const VideoEmbed = () => (
    <video
        className={classes.video}
        autoPlay
        muted
        loop
        src="/videos/trailer.mp4"
        type="video/mp4"
    >
        Your browser does not support HTML5 video.
    </video>
);

export default VideoEmbed;
