import { forwardRef } from 'react';
import classes from './index.module.css';

const Input = forwardRef(
    ({ icon, type, placeholder, required = false }, ref) => {
        return (
            <div className={classes.input}>
                <div className={classes['input-icon']}>{icon}</div>
                <input
                    ref={ref}
                    type={type}
                    placeholder={placeholder}
                    required={required}
                />
            </div>
        );
    }
);

export default Input;
