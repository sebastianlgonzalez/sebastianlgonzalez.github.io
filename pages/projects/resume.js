import { useEffect, useState } from 'react';
import Head from 'next/head'
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
    <>
    <Head>
      <title>Sebastian Gonzalez</title>
      <meta name="description" content="Portfolio" />
      <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, viewport-fit=cover" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div id={styles.wrapper} dangerouslySetInnerHTML={{ __html: bodyContent }} />
    </>

  );
}

export default Resume;
