import classes from './index.module.css';

const UserInfoItem = ({ label, value }) => {
    return (
        <tr>
            <td className={classes['item-left-td']}>{label}:</td>
            <td className={classes['item-right-td']}>{value}</td>
        </tr>
    );
};

export default UserInfoItem;
