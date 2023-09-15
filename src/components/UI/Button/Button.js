import styles from './Button.module.css'

const Button = (props) => {
  return <button 
    type={props.type} 
    className={props.alt ? `${styles.buttonAlt}` : `${styles.button}`}>
    {props.label}
  </button>
}

export default Button;