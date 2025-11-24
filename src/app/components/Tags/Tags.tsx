import styles from './tags.module.scss'

type Tag = {
    text: string
}
export const Tags = ({ text }: Tag) => {
    return (
        <span className={styles.tag}>
            {text}
        </span>
    )
}