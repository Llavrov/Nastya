import React from "react";
import styles from './style.module.css';
import model01 from '../../assets/model-work01.jpg';
import model02 from '../../assets/model-work02.jpg';

function SelfInfo() {

    return (
        <div className={styles.container}>
            <div className={styles.border}>
                <p className={styles.title1}>Я - стилист</p>
                <p className={styles.subTitle1}>Создаю уникальные образы для своих клиентов.</p>
                <p className={styles.subTitle1}>В ходе работы со мной вопрос «Как найти свой стиль» перестанет вас беспокоить.
                    Мы разберём ваш гардероб, поймём какая одежда действительно нужна,
                    проведём нескучный и недолгий шопинг.
                </p>
                <p className={styles.subTitle1}>
                    После проделанной работы вы забудете о фразе «нечего надеть»,
                    так как теперь гардероб станет функциональным,
                    а вещи легко сочетаемыми друг с другом.
                </p>
                <p className={styles.subTitle1}>
                    Буду рада стать вашим личным стилистом - имиджмейкером.
                </p>
                <p className={styles.title2}>Список доступных услуг</p>
            </div>
            <div id="substrate-container" className={styles.substrateContainer} >
                <div className={styles.model01}>
                    <img id="model01" src={model01} alt="model01"/>
                    <p className={styles.modelTitleLeft}>Персональный стилист</p>
                </div>
                <div className={styles.model02}>
                    <p className={styles.modelTitleRight}>Студийный стилист</p>
                    <img id="model02" src={model02} alt="model02"/>
                </div>
            </div>
        </div>
    )
}

export default SelfInfo;


