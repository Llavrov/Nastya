import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from "./style.module.css";
import 'swiper/css';
import model01 from '../../assets/model01.jpg';
import model02 from '../../assets/model02.jpg';
import model03 from '../../assets/model03.jpg';
import model04 from '../../assets/model04.jpg';

function PhotoStylish() {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <p className={styles.paragraph}>Вам стоит обратиться<br/>ко мне если:</p>
                <ul className={styles.points}>
                    <li>Много вещей,<br/>но постоянно нечего<br/>надеть</li>
                    <li>Вы теряетесь, заходя<br/>в магазин / вообще<br/>не любите шопинг </li>
                    <li>У вас почти нет вещей,<br/>так как вы не знаете<br/> что вам подходит</li>
                </ul>
                <p className={styles.title}>Стилист съемок</p>
                <ul className={styles.list}>
                    <li>Подбор образов</li>
                    <li>Сопровождение и помощь на съемке</li>
                    <li>Съемки в жанре fashion</li>
                    <li>Стоимость расчитывается исходя из количства образов и моделей</li>
                </ul>
                <p className={styles.paragraph}>Кейсы</p>
                <div className={styles.containerCases}>
                    <div className={styles.cases}>
                        <div className={styles.description}>
                            <p className={styles.titleSwiper}>
                                Съемка “Тренч”
                            </p>
                            <p>
                                Моя задача как стилиста состояла в создании базовых образов в нюдовых оттенках.<br/><br/>
                                В съёмке принимали участие модели, обучающиеся в продюссерском центре Fiy Prodaction.
                            </p>
                        </div>
                        <div className={styles.containerSwiper}>
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                <SwiperSlide>
                                    <img className={styles.imageSwiper} src={model01} alt="model01"/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className={styles.imageSwiper} src={model02} alt="model01"/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className={styles.imageSwiper} src={model03} alt="model01"/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className={styles.imageSwiper} src={model04} alt="model01"/>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhotoStylish;
