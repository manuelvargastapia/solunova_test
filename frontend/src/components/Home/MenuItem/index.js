import classes from './index.module.css';

const MenuItem = ({ iconSrc, title }) => {
    return (
        <div className={classes.item}>
            <img src={iconSrc} alt="Gameplay icon" />
            <span>{title}</span>
        </div>
    );
};

export default MenuItem;
