import React from 'react'
import styles from  './Down.module.css'
import { getImageUrl } from '../../utils'

export const Down = () => {
  return (
    <div className={styles.container}>
        <img src={getImageUrl("down.png")} alt="Scroll Down" />

    </div>
  )
}
