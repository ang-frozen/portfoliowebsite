import React, {useState} from 'react'
import styles from "./Navbar.module.css"
import { getImageUrl } from '../../utils';


export default function Navbar() {
  const [menuOpen, setMenuOpen] =useState(false);

  return (
    <nav className={styles.navbar}>
        <a href="/" className={styles.title}>ANGKON</a>
        <div className={styles.menu}>
            <img src={menuOpen ? getImageUrl("closeIcon.png"):getImageUrl("menuIcon.png")} 
            alt="menu Icon" className={styles.menuBtn}
            onClick={()=> setMenuOpen(!menuOpen)}
            />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={()=>setMenuOpen(false)}>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#awards">Awards</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>

            </ul>
        </div>
    </nav>
  )
}
