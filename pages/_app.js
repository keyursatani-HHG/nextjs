import '@/styles/globals.css'
import styles from '@/styles/Home.module.css'
import Link from "next/link"
export default function App({ Component, pageProps }) {
  return<>
  <Component {...pageProps} />
  <div className={styles.grid}>
          <Link
            href="/"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2>
              Home Page
            </h2>
            <p>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </Link>
          <Link
            href="/about"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2>
              About Page
            </h2>
            <p>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </Link>
          <Link
            href="/contact"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2>
              Contact Page
            </h2>
            <p>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </Link>
    </div>
  </> 
}
