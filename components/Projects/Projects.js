import Link from 'next/link';
import { useSearchParams, usePathname } from 'next/navigation';
import Sidebar from '@/components/Sidebar/Sidebar';
import Modal from '@/components/Modal/Modal';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import projects from '@/components/Projects/project.config.json';
import styles from './projects.module.css'

export default function Projects() {
  const query = useSearchParams().get('project');
  const pathname = usePathname();
  const isMobile = useMediaQuery('(max-width: 705px)');

  return (
    <section id={styles.projects}>
      <div id={styles.wrapper}>
        <h2>Projects</h2>
        <ul id={styles.list}>
          {Object.keys(projects).map((id) => {
            const project = projects[id];
            return (
              <li key={id} data-toggled={query === id}>
                <Link
                  href={query === id ? pathname : `${pathname}?project=${id}`}
                  scroll={false}
                >
                  {project.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      {isMobile ? <Modal query={query} /> : <Sidebar query={query} />}
    </section>
  );
}