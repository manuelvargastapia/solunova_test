import classes from './index.module.css';

const Quote = ({ text }) => (
    <section className={classes.quote}>
        <h2>"{text}"</h2>
    </section>
);

export default Quote;
