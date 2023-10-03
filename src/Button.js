import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({text}){
    return (<button className={styles.title}>{text}</button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

export default Button; // App.js에서 Button을 가져 올 수 있게 하기 위해서