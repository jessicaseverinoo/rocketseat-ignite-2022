import { ThumbsUp, Trash } from "phosphor-react";

import styles from "./Comment.module.css"

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/jessicaseverinoo.png" alt="Photo Person" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <time title="12 de junho às 00:04h" dateTime="2022-06-12 00:04:20">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Muito bom Jessica, parabéns!!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}