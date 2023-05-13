import { ListTitle } from './components/list-title'
import { List } from './components/list'
import { AddNewButton } from './components/add-new-button'
import styles from './Home.module.scss'

export default function Home() {
    return (
        <section className={styles.container}>
            <ListTitle title='Lista de tarefas' />
            <List />
            <AddNewButton />
        </section>
    )
}
