import React from 'react'
import styles from './Certificates.module.css'
export const Certificates = () => {
  return (
    <section className={styles.container}>
        <div className={styles.intro}>
            <h3>Few listed</h3>
            <h1>Certificates</h1>

        </div>
        <div className={styles.cers}>
            <p>Programming with MATLAB - 2020</p>
            <p>Python Crash Course by Google - 2020</p>
            <p>Deep Learning Specialization - 2020</p>
            <p>Graphic Design Specialization - 2020</p>
            <p>Beginner Archery Training Course by BKSP - 2014</p>
            <p>Other certifications including the listed ones are available on LinkedIn or upon request</p>

        </div>
    </section>
  )
}
