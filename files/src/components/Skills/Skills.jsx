import React from 'react'
import styles from './Skills.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { getImageUrl } from '../../utils';
AOS.init();

export const Skills = () => {
  return (
    <section id='skills' className={styles.mainContainer}>

      <div className={styles.intro}>
        <h3 className={styles.hard} data-aos="zoom-out">Soft and Hard</h3>
        <h1 className={styles.skils} data-aos="zoom-out">Skills</h1>

      </div>
      <div className={styles.images}> 
        <div className={styles.image1} data-aos="zoom-out">
          <img src={getImageUrl("Technical.png")} alt="Technical " />

          <img src={getImageUrl("TechnicalBlack.png")} alt="Technical " />
        </div>
        <div className={styles.image2} data-aos="zoom-out">
          <img src={getImageUrl("Design.png")} alt="Design " />
          <img src={getImageUrl("DesignBlack.png")} alt="Design " />
        </div>

      </div>
     
      

    </section>
  )
}
