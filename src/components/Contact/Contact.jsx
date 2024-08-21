import React from 'react'
import styles from './Contact.module.css'


export const Contact = () => {
  return (
    <footer id='contact' className={styles.foot}>
        <hr className={styles.rule}/>
        <div className={styles.forvl}>
            
            <div className={styles.excptvl}>
                <h1 className={styles.title}>Contact Me</h1>
                <h2 ><a href="mailto:angkon.deb18@gmail.com" className={styles.mail}>angkon.deb18@gmail.com</a></h2>
                <h2 className={styles.phone}>+880 1521 584 367</h2>
                <h2 className={styles.add}>Dhaka -1000, Bangladesh</h2>

            </div>
            <div className={styles.vl}></div>
            <div className={styles.resume} > <a href="https://drive.google.com/drive/folders/19b3SCxHtg7zuF8OqCsbo-1u9tLxhJod3?usp=sharing" className={styles.link} >Download Resume</a></div>
            

        </div>
        
        

    </footer>
  )
}
