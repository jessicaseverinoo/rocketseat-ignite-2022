import styles from './Header.module.css'

import logoIgnite from '../../../src/assets/images/logo-ignite.png'

console.log(logoIgnite)

export function Header() { return (
    <header className={styles.header}>
        <img src={logoIgnite} alt="Ignite Feed Image" />
    </header>
)}