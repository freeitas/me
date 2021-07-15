import Head from 'next/head'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faStickyNote } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>gf.</title>
        <meta name="description" content="gf´s blog." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>guilherme freitas.</h1>
        <a href="https://github.com/freeitas" rel="noreferrer" target="_blank" >Find some of my code on github <FontAwesomeIcon icon={faGithubSquare} /></a>
        <a href="https://www.linkedin.com/in/guilhermehfds/" rel="noreferrer" target="_blank">Take a look at my linkedin <FontAwesomeIcon icon={faLinkedin} /></a>
        <a>or my cv <FontAwesomeIcon icon={faStickyNote} /></a>
      </main>

      <footer className={styles.footer}>
          Copyright © 2021 guilherme freitas{' '}
      </footer>
    </div>
  )
}
