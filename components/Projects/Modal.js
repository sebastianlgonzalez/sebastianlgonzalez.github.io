import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import projects from "./projects.config.json"
import Redirection from '@/components/Projects/Redirection.js'
export default function Modal() {
  const router = useRouter()
  const dialogRef = useRef(null)
  const currentProject = projects.find(project => (project.id == router.query.project && project.type == 0))

  useEffect(() => {
    if (currentProject) {
      dialogRef.current.showModal()
    } else {
      dialogRef.current.close()
    }
  }, [currentProject])

  return (
    <dialog ref={dialogRef}>
      {currentProject && (
        <Redirection url={currentProject.href}/>
      )}
    </dialog>
  )
}
