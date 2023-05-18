import { CheckButton } from './components/check-button'
import styles from './styles.module.scss'

interface ToDoItemProps {
    todo: {
        id: string,
        description: string
        checked: boolean
    }
    onCheckToDo: () => void
}

export function ToDoItem({ todo, onCheckToDo }: ToDoItemProps) {
    const {
        id,
        description,
    } = todo;
    return (
        <li id={id} className={`${styles.item} ${todo.checked && styles.checked}`}>
            <span className={styles.description}>{description}</span>
            <CheckButton onCheckToDo={onCheckToDo} />
        </li>
    )   
}