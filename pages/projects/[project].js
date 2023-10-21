import { useRouter } from 'next/router'
import Error from 'next/error'
import projects from "@/components/Projects/projects.config.json"
import Redirection from '@/components/Projects/Redirection.js'
import styles from '@/styles/project.module.css'
export default function Project() {
  const router = useRouter()
  const currentProject = projects.find(project => project.id == router.query.project && project.type == 0);

  if (currentProject) {
    return (
      <div id={styles.wrapper}>
        <Redirection url={currentProject.href} />
      </div>
      
    );
  } else {
    return <Error statusCode={404} />
  }
}
