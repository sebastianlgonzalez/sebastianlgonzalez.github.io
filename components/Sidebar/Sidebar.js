import { useState } from "react"
import Link from 'next/link';
import VoiceAssistant from "@/components/Projects/VoiceAssistant"
import EcoliMachineLearning from "@/components/Projects/EcoliMachineLearning"
import projects from '@/components/Projects/project.config.json';
import { useQueryOff, useQueryOn, useQueryChange } from "@/hooks/useQueryHooks"
import styles from './sidebar.module.css'

export default function Sidebar({ query }) {
  const [fade, setFade] = useState(null)
  const [content, setContent] = useState(null)

  useQueryOn(() => {
    setContent(query)
    setFade("in")
  }, query)

  useQueryChange(() => {
    setFade("out")
    setTimeout(() => {
      setContent(query)
      setFade("in")
    }, 150)
  }, query)

  useQueryOff(() => {
    setFade("out");
    setTimeout(() => {
      setContent(query)
    }, 150)
  }, query)

  return (
    <div data-fade={fade} id={styles.wrapper}>
      {content ? (
        <>
          <section>
            {content == 'voice_assistant' ? <VoiceAssistant /> : content === 'ecoli_machine_learning' ? <EcoliMachineLearning /> : null}
          </section>
          <p>More Info: {projects[content]?.url}</p>
          <Link href={projects[content]?.url} scroll={false} target="_blank" rel="noopener noreferrer">
            Open in new tab.
          </Link>
        </>
      ) : null}
    </div>
  )
}
