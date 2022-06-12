import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/jessicaseverinoo.png" />
                    <div className={styles.authorInfo}>
                        <strong>Jessica Severino</strong>
                        <span>IT Analyst</span>
                    </div>
                </div>
                
                <time title="12 de junho às 00:04h" dateTime="2022-06-12 00:04:20">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href="#">jessica.developer/react</a></p>
                <p><a href="#">#novoprojeto</a> <a href="#">#nlw</a> <a href="#">#rocketseat</a></p>
            </div>
        </article>
    )
}