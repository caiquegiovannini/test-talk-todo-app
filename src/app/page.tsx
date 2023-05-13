import { ListTitle } from './components/list-title'
import { ToDoList } from './components/todo-list'
import { AddNewButton } from './components/add-new-button'
import styles from './Home.module.scss'

export default function Home() {
    return (
        <section className={styles.container}>
            <ListTitle title='Lista de tarefas' />
            <ToDoList />
            <AddNewButton />
        </section>
    )
}
