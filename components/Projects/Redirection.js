import Link from 'next/link'
import styles from '@/styles/redirection.module.css'
export default function Redirection({url}) {
  return (
    <>
      <p className={styles.text}>You are going to</p>
      <p id={styles.url}>{url}</p>
      <p className={styles.text}>Would you like to:</p>
      <form method='dialog' id={styles.wrapper}>
        <a className={styles.button} href={url} >Open in this tab.</a>
        <a className={styles.button} target="_blank" rel="noopener noreferrer" href={url}>Open in a new tab.</a>
        <Link autoFocus className={styles.button} href="/" scroll={false}>Cancel.</Link>
      </form>
    </>

  )
}
