import React from "react";
import styles from './style.module.css';
import model01 from '../../assets/model01.jpg';
import model02 from '../../assets/model02.jpg';
import model03 from '../../assets/model03.jpg';
import model04 from '../../assets/model04.jpg';
import gallery01 from '../../assets/gallery01.jpg';
import gallery02 from '../../assets/gallery02.jpg';
import gallery03 from '../../assets/gallery03.jpg';


function Gallery() {

    const photos = [model01, model02, model03, model04, gallery01, gallery02, gallery03, gallery01, gallery02, gallery03, gallery02, gallery03];

    return (
        <div className={styles.background}>
            <div className={styles.bluperOne}></div>
            <div className={styles.bluperTwo}></div>
            <div className={styles.bluperThree}></div>
            <p className={styles.title}>
                Дизайн, фотография, персональный стиль.<br/>
                Ознакомьтесь с галереей
            </p>
            <div className={styles.container}>
                <div className={styles.imagesContainer}>
                    {photos.map((image) => {
                        return (
                            <img className={styles.image} src={image} alt={image}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Gallery;