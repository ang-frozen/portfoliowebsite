import React from 'react'
import styles from './Experience.module.css'
import { getImageUrl } from '../../utils'


export const Experience = () => {
  return (
    <section id='experience' className={styles.container}>
        <div className={styles.intro}>
            <h3  className={styles.little}>A little bit of</h3>
            <h1  className={styles.exp}>Experience</h1>
        </div>
        <div className={styles.allExps}>
            <div className={styles.exps}>
                    <img src={getImageUrl("expWhite.png")} alt="EXP" className={styles.expimg} />
                    <div className={styles.indExps}>
                    
                    <h1  className={styles.title}>Graphic Designer</h1>
                    <p  className={styles.company}>SOHOPATHI</p>
                    <p  className={styles.start}>Jan 2019 - Dec 2022</p>
                    <p  className={styles.work}>Brand Design, UI/UX, Video Editing</p>
                </div>

            </div>
            <div className={styles.exps}>
                <img src={getImageUrl("expBlack.png")} alt="EXP" className={styles.expimg} />
                <div className={styles.indExps}>
                    
                    <h1  className={styles.title}>Academic Adviser</h1>
                    <p  className={styles.company}>SOHOPATHI</p>
                    <p  className={styles.start}>Jan 2019 - Dec 2020</p>
                    <p  className={styles.work}>Subject: Physics, Math, Chemistry</p>
                </div>

            </div>
            <div className={styles.exps}>
                <img src={getImageUrl("expWhite.png")} alt="EXP" className={styles.expimg} />
                <div className={styles.indExps}>
                    
                    <h1  className={styles.title}>Intern</h1>
                    <p  className={styles.company}>Bangladesh Satellite Company</p>
                    <p  className={styles.start}>Nov 2023</p>
                    <p  className={styles.work}>SOCC, NOCC, GMMC, Operation</p>
                </div>

            </div>

        </div>
            

    </section>
  )
}
