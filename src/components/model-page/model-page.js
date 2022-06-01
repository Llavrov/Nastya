import React, {useEffect, useState} from "react";
import styles from './model-page-style.module.css';
import Nastya from '../../assets/nastya-model-first.jpg';

function ModelPage() {
    const [title, setTitle] = useState('Модель');

    useEffect(() => {
        if (title === 'Модель') {
            setTimeout(() => setTitle("Стилист"), 5000);
        } else {
            setTimeout(() => setTitle("Модель"), 5000);
        }
    }, [title, setTitle])

    return (
      <div className={styles.container}>
          <div className={styles.logo}>Анастасия Шипигузова</div>
          <div className={styles.left}>
              <div className={styles.border}></div>
              <ul className={styles.menu}>
                  <li>Услуги</li>
                  <li>Работы</li>
                  <li>Контакты</li>
              </ul>
              <div className={styles.title}>
                  <p key={title}>{title}</p>
              </div>
          </div>
          <div className={styles.right}>
              <img src={Nastya}/>
          </div>
      </div>
    );
}

export default ModelPage;