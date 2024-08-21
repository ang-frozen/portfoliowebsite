import React from 'react'
import styles from './Publications.module.css'

export const Publications = () => {
  return (
    <section className={styles.container}>
        <div className={styles.intro}>
            <h3>Some of my</h3>
            <h1>Publications</h1>
        </div>
        <div className={styles.publications}>
            <p><b>A. Deb</b>, S. I. Ahmed, A. Islam, M. Haque, S. A. Fattah and C. Shahnaz, ”A Real-time Automatic Dengue Breeding Zone Detection and Prevention Scheme based on MobileNetV2 Enabled Autonomous Drone,” 2023 26th International Conference on Computer and Information Technology (ICCIT), Cox’s Bazar, Bangladesh, 2023, pp. 1-6, doi: 10.1109/ICCIT60459.2023.10441054.</p>
            <p><b>A. Deb</b>, R. Roy, I. Islam, A. Islam and C. Shahnaz, ”Bio-Markers Presence Detection Using Transfer and Ensemble Learning on Optical Coherence Tomography of Retinal Imagery,” 2024 6th International Conference on Electrical Engineering and Information & Communication Technology (ICEEICT), Dhaka, Bangladesh, 2024, pp. 915-920, doi: 10.1109/ICEEICT62016.2024.10534519.</p>

        </div>

    </section>
  )
}
