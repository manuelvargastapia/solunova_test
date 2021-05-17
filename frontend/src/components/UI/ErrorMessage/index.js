import classes from './index.module.css';

const ErrorMessage = ({ error }) => {
    return <span className={classes.error}>{error}</span>;
};

export default ErrorMessage;
