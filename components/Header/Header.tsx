import Link from 'next/link';
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>
          <a >
            Inspire
          </a>
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link href='/recipes'>
              <a>Recipes</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header