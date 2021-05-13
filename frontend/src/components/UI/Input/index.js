import { forwardRef } from 'react';
import classes from './index.module.css';

const Input = forwardRef(({ label, input }, ref) => {
    return (
        <>
            <label htmlFor={input.id}>{label}</label>
            <input className={classes.input} ref={ref} {...input} />
        </>
    );
});

export default Input;
