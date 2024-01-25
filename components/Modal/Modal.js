import { useQueryOn, useQueryOff } from "@/hooks/useQueryHooks"
import { useRef, useState } from "react"
import Link from "next/link"
import styles from './modal.module.css'
import Sidebar from "@/components/Sidebar/Sidebar"
export default function Modal({query}) {
  const dialog = useRef(null)
  const [fade, setFade] = useState("out")

  useQueryOn(() => {
    if (dialog.current) {
      dialog.current.showModal()
      setFade("in")
    }
  }, query)

  useQueryOff(() => {
    if (dialog.current) {
      setFade("out")
      setTimeout(() => {
        dialog.current.close()
      }, 300)
    }
  }, query)
    
  return (
    <dialog data-fade={fade} ref={dialog} id={styles.modal}>
      <Link href="/" scroll={false}>X</Link>
      <Sidebar query={query}/>
    </dialog>
  )
}
