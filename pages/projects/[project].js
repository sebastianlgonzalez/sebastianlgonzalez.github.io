import { useRouter } from 'next/router'
import projects from "@/components/Projects/projects.config.json"
import Redirection from '@/components/Projects/Redirection.js'
import styles from '@/styles/project.module.css'
import Head from 'next/head'
export const getStaticProps = async () => {
  return {
    props: {
      projects,
    }
  };
}

export const getStaticPaths = async () => {
  const paths = projects
    .filter((project) => project.type == 0)
    .map((project) => ({
      params: {
        project: project.id,
      },
    }));

  return {
    paths,
    fallback: false,
  };
}

export default function Project() {
  const router = useRouter()
  const currentProject = projects.find(project => project.id == router.query.project && project.type == 0);

  return (
    <>
    <Head>
      <title>Sebastian Gonzalez</title>
      <meta name="description" content="Portfolio" />
      <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, viewport-fit=cover" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div id={styles.wrapper}>
      <Redirection url={currentProject.href} />
    </div>
    </>
  )
}
