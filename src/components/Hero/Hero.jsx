import React from 'react'
import styles from "./Hero.module.css"
import { getImageUrl } from '../../utils'


export const Hero = () => {
  return (
    <section className={styles.container}>
      <img src={getImageUrl("angkon.png")} alt="Image of Angkon" className={styles.image}/>

      <div className={styles.content}>
        <h4 className={styles.hello}>Hello. I'm</h4>
        <h1 className={styles.angkon}>Angkon Deb</h1>
        <h4 className={styles.description1}>An AI enthusiast... Researcher...</h4>
        <h4 className={styles.description2}>Creative Designer... Programmer... Student...</h4>
        <div className={styles.socials}>
        <a href='https://github.com/ang-frozen'><img src={getImageUrl("githubIcon.png")} alt="Github Icon" /></a>
        <a href='https://scholar.google.com/citations?user=H3siLB4AAAAJ&hl=en'><img src={getImageUrl("scholarIcon.png" )} alt="Scholar Icon" /></a>
        <a href='https://www.behance.net/aaroncrt_d'><img src={getImageUrl("behanceIcon.png")} alt="Behance Icon" /></a>
        <a href='https://www.linkedin.com/in/1angkon/'><img src={getImageUrl("linkedInIcon.png")} alt="Linkedin Icon" /></a>
        </div>
        <a href="mailto:angkon.deb18@gmail.com" className={styles.contact}>Contact Me</a>

      </div>

      
    </section>
  )
}
