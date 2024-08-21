import React from 'react'
import styles from "./About.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { getImageUrl } from '../../utils';
AOS.init();
export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <div className={styles.content}>
            <h4 className={styles.getKnow} data-aos="zoom-in">Get to know</h4>
            <h1 className={styles.aboutMe} data-aos="zoom-in"> About Me</h1>
        </div>


        <div className={styles.aboutContainer} >
            <div className={styles.education}>
                <div className={styles.imageContainer} data-aos="zoom-out">
                    <img src={getImageUrl("educationWhite.png")} alt="education" className={styles.educationImage} id='img1'/>
                    <img src={getImageUrl("educationBlack.png")} alt="education" className={styles.educationImage} id='img2' />

                </div>
            
                <div className={styles.educationDes} data-aos="zoom-out">
                    
                    <p className={styles.degree}>BSc in Electrical and Electronic Engineering</p>
                    <p className={styles.univ}>Bangladesh University of Engineering and Technology (BUET)</p>
                    <p className={styles.cgpa}>CGPA 3.74 out of 4.00 || 2019 - 2024 (July)</p>
                    <p className={styles.major}>Major: Communication and Signal Processing</p>
                    <p className={styles.thesis}>Thesis: Speech Enhancement with deep learning in super noisy environment and batch enhancement when clean dataset is unavailable</p>
                </div>

            </div>
            <div className={styles.interest}>
                <div className={styles.intimageContainer} data-aos="zoom-out">
                    <img src={getImageUrl("interestBlack.png")} alt="education" className={styles.intImage} id='img1'/>
                    <img src={getImageUrl("interestWhite.png")} alt="education" className={styles.sintImage} id='img2' />

                </div>
            
                <div className={styles.interestDes} data-aos="flip-up" >
                    
                    <p className={styles.dlml} >Deep Learning, Machine Learning and AI</p>
                    <p className={styles.dlml} >Robotics and Automation</p>
                    <p className={styles.dlml} >Electrical and Electronic Engineering (Communication and Signal Processing)</p>
                    <p className={styles.dlml} >Web Design</p>
                    <p className={styles.dlml} >Creative Designing</p>
                    
                    
                   
                </div>

            </div>
        </div>
    </section>
  )
}
