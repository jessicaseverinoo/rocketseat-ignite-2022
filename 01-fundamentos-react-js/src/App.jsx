import { Header } from './components/header/Header'
import { Sidebar } from './components/sidebar/Sidebar'
import { Post } from './components/post/Post'

import styles from './app.module.css'
import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
      <Sidebar />
        <main>
          <Post 
            author="Jessica Severino"
            content="Text example for content post and is nothing content, just exemplifying letters."
          />
          <Post 
            author="Jessica Severino"
            content="Text example for content post and is nothing content, just exemplifying letters."
          />
        </main>
      </div>
    </div>
  )
}
