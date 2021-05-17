import classes from './index.module.css';

const Form = ({
    children,
    title,
    onSubmitHandler,
    submitButtonTitle,
    subtext,
}) => {
    return (
        <div className={classes.form}>
            <form onSubmit={onSubmitHandler}>
                <h3 className={classes['form-title']}>{title}</h3>
                {children}
                <button type="submit">{submitButtonTitle}</button>
                {subtext}
            </form>
        </div>
    );
};

export default Form;
