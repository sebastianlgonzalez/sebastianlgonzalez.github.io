import styles from '@/styles/landing.module.css'
export default function Landing() {
  return (
    <section id={styles.section}>

      <div id={styles.navbar}>
        <div id={styles.version}>v0.05</div>
      </div>

      <div id={styles.info_wrapper}>
        <h1 id={styles.name}>
          <span id={styles.first_name}>SEBASTIAN</span>
          <span id={styles.last_name}>GONZALEZ</span>
        </h1>
        <h2 id={styles.profession}>Computer Engineer</h2>

      </div>

    </section>
  )
}
