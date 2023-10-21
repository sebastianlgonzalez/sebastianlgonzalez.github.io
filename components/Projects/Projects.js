import Link from "next/link"
import styles from "@/styles/projects.module.css"
import projects from "./projects.config.json"
import Modal from '@/components/Projects/Modal.js'
import { useRef, useEffect } from "react";

export default function Projects() {
  const projectRefs = projects.map(() => useRef())
  const linkRefs = projects.map(() => useRef())
  useEffect(() => {
    linkRefs.forEach((linkRef, index) => {
      if (linkRef.current) {
        const width = linkRef.current.getBoundingClientRect().width;
        console.log(width)
        projectRefs[index].current.style.width = `${width}px`;
      }
    });
  }, []);

  return (
    <>
    <section id={styles.section}>
      <div id={styles.heading}>Projects</div>
      <div id={styles.wrapper}>
        {projects.map(({ id, name, type }, index) => (
          <Link
            key={id}
            ref={projectRefs[index]}
            className={styles.project}
            href={type === 2 ? `/projects/${id}` : `/?project=${id}`}
            as={`/projects/${id}`}
            scroll={false}
          >
            <p ref={linkRefs[index]} className={styles.link}>{name}</p>
          </Link>
        ))}
      </div>
    </section>
    <Modal/>
    </>
  )




  return (
    <section id={styles.section}>
      <div id={styles.heading}>Projects</div>
      <div id={styles.wrapper}>
        {projects.map(({ id, name, type }, index) => (
          <div ref={wrapperRefs[index]} className={styles.project} key={id}>
            <Link
              ref={linkRefs[index]}
              className={styles.link}
              href={type === 2 ? `/projects/${id}` : `/?project=${id}`}
              as={type === 2 ? `/projects/${id}` : `/projects/${id}`}
              scroll={false}
            >
              {name}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}