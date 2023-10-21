import { useEffect, useState } from 'react';
import styles from '@/styles/resume.module.css'
import resumeContent from '@/components/Resume/resume.html';

function Resume() {
  const [bodyContent, setBodyContent] = useState('');

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(resumeContent, 'text/html');

    const body = doc.querySelector('body').innerHTML;

    const styles = doc.querySelectorAll('style, link[rel="stylesheet"]');

    const styleElement = document.createElement('style');
    styleElement.textContent = Array.from(styles)
      .map(style => style.textContent)
      .join('\n');

    document.head.appendChild(styleElement);

    setBodyContent(body);
  }, []);

  return (
    <div id={styles.wrapper} dangerouslySetInnerHTML={{ __html: bodyContent }} />
  );
}

export default Resume;
