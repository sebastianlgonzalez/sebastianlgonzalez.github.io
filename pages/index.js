import Head from 'next/head'
import Landing from '@/components/Landing/Landing.js'
import Projects from '@/components/Projects/Projects.js'
export default function Home() {
  return (
    <>
      <Head>
        <title>Sebastian Gonzalez</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Landing/>
        <Projects/>
      </main>
    </>
  )
}
