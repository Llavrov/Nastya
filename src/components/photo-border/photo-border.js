import React from "react";
import styles from './style.module.css';
import model01 from '../../assets/model01.jpg';
import model02 from '../../assets/model02.jpg';
import model03 from '../../assets/model03.jpg';
import model04 from '../../assets/model04.jpg';

function PhotoBorder() {
    return (
        <div className={styles.container}>
            <div data-title={'Вот такое вот описание'}><img src={model01} alt={model01}/></div>
            <div data-title={'Вот такое вот описание'}><img src={model02} alt={model02}/></div>
            <div data-title={'Вот такое вот описание'}><img src={model03} alt={model03}/></div>
            <div data-title={'Вот такое вот описание'}><img src={model04} alt={model04}/></div>
        </div>
    )
}

export default PhotoBorder;