import { ListTitle } from './components/list-title'
import { List } from './components/list'
import { AddNewButton } from './components/add-new-button'
import styles from './Home.module.scss'

export default function Home() {
  return (
    <section className={styles.container}>
      <header>
        <ListTitle title='Lista de tarefas' />
      </header>
      <main>
        <List />
      </main>
      <footer>
        <AddNewButton />
      </footer>
    </section>
  )
}
