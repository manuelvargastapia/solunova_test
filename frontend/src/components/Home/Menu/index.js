import classes from './index.module.css';

const Menu = ({ children }) => {
    return <div className={classes.menu}>{children}</div>;
};

export default Menu;
