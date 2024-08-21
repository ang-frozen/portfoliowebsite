import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./ProjectCard.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

export const ProjectCard = ({
    project:{title, imageSrc, skills, demo, source,description }}) => {
    
  return (
    <div className={styles.container}  data-aos="zoom-out">
        <img src={getImageUrl('project.png')} alt={`Image of ${title}`} className={styles.image} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>{skills.map((skill, id)=> {
            return <li key={id} className={styles.skill}>{skill}</li>
        })}
        </ul>
            <div className={styles.links}>
                <a href={demo} className={styles.link}>Demo</a>
                <a href={source} className={styles.link}>Source</a>
            </div>
    </div>
  );
};
