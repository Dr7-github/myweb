import Experience from '../experience/Experience'
import styles from '../styles/main.module.css'

export default function Home() {
  return(
    <div>
      <div className="wrapper">
        <Experience />
      </div>
      <div className={styles.intro_wrapper}>
        <h1 className={styles.intro_title}>I&aposm Zacky</h1>
        <h1 className={styles.intro_subtitle}>Crossover Explorer</h1>
        <p className={styles.intro_page}>I have dedicated myself to exploring unknown boundaries and broadening my perception of myself and the world. I am passionate about design, but also have accumulated development work and a great interest in the crypto.</p>
      </div>
    </div>
    
  )
}
