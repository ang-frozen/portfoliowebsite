import React from 'react'
import styles from './Awards.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { getImageUrl } from '../../utils';
AOS.init();


export const Awards = () => {
  return (
    <section id='awards' className={styles.container}>
        <div className={styles.intro}>
            <h3 className={styles.int} data-aos="zoom-out">International and National</h3>
            <h1 className={styles.awards} data-aos="zoom-out">Awards</h1>

        </div>
        <div className={styles.award}>
            <img src={getImageUrl("r10robo.png")} alt="r10 Robotics" className={styles.awpng} data-aos="zoom-out" />
            <img src={getImageUrl("sps5micc.png")} alt="SPS 5micc" className={styles.awpng} data-aos="zoom-out" />
            <img src={getImageUrl("wiebig.png")} alt="WIE Big Idea Pitch" className={styles.awpng} data-aos="zoom-out"/>
            <img src={getImageUrl("hult.png")} alt="Hult Prize2022"  className={styles.awpng} data-aos="zoom-out"/>
            <p className={styles.more}> More On <a href='https://www.linkedin.com/in/1angkon/' className={styles.uli}>LinkedIn</a></p>


        </div>

    </section>
  )
}
