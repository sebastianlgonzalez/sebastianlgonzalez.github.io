import Head from 'next/head'
import Link from 'next/link'

import Projects from '@/components/Projects/Projects'
import Wireframe from '@/components/Wireframe/Wireframe'

import styles from '@/styles/main.module.css'
export default function Home() {
  return (
    <>
      <Head>
        <title>Sebastian Gonzalez</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section id={styles.landing}>
          <header>
            <Link className={styles.link} href="/Resume.pdf" scroll={false}>Resume</Link>
            <Link className={styles.link} href="/CV.pdf" scroll={false}>CV</Link>
          </header>
          <div id={styles.wrapper}>
            <div id={styles.info}>
              <h1>
                <span>Sebastian</span>
                <br/>
                <span>Gonzalez</span>
              </h1>
              <h2>Computer Engineer</h2>
            </div>
            <Wireframe />
          </div>
        </section>
        <Projects/>
      </main>
    </>
    
  )
}