import styles from './button.module.scss'
type Button = {
    size?: 'full_width',
    variable?: 'primary' | 'ghost',
    text: string,
}
export const Button = ({ size, variable, text }: Button) => {
    return (
        <button className={`${styles.button} ${styles[size || '']} ${styles[variable || '']}`}>{text}</button>
    )
}

