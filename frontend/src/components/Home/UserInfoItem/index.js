import classes from './index.module.css';

const UserInfoItem = ({ label, value }) => {
    return (
        <div className={classes.item}>
            <span className={classes['item-label']}>{label}:</span>
            <span className={classes['item-value']}>{value}</span>
        </div>
    );
};

export default UserInfoItem;
