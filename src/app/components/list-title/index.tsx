import styles from './styles.module.scss'

interface ListTitleProps {
    title: string
}

export function ListTitle({title}: ListTitleProps) {
    return (
        <header className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
        </header>
    )
};