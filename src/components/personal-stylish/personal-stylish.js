import React from "react";
import styles from './style.module.css';

function PersonalStylish() {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <p className={styles.paragraph}>Вам стоит обратиться<br/>ко мне если:</p>
                <ul className={styles.points}>
                    <li>Много вещей,<br/>но постоянно нечего<br/>надеть</li>
                    <li>Вы теряетесь, заходя<br/>в магазин / вообще<br/>не любите шопинг </li>
                    <li>У вас почти нет вещей,<br/>так как вы не знаете<br/> что вам подходит</li>
                    <li>Вы хотите оказать другое впечатление, нежели создаёт сейчас ваша одежда</li>
                    <li>Не можете справиться со своим гардеробом</li>
                    <li>Не можете найти <br/>свой стиль</li>
                </ul>
                <p className={styles.title}>Персональный стилист</p>
                <table className={styles.table}>
                    <thead className={styles.thead}>
                        <tr>
                            <th scope="col">Стандартный<br/>пакет</th>
                            <th scope="col">День со стилистом</th>
                            <th scope="col">Полный <br/>upgrade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">
                                Консультация<br/><br/>
                                Разбор гардероба<br/><br/>

                                Составление списка покупок и шопинг-маршрута<br/><br/>

                                Шопинг сопровождение
                                1 или 2 раза<br/><br/>
                                Составление капсул
                                и образов на каждый день
                            </td>
                            <td>Стандартный пакет</td>
                            <td>Стандартный пакет<br/><br/>

                                Фотосъемка в новых образах (студия + фотограф) / уличная съемка<br/><br/>

                                Помощь с инстаграм<br/><br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Сотрудничество
                                от 4 дней до 3 недель
                                <p className={styles.price}> 6.000р</p>
                                <div className={styles.buttonGreen}>
                                    внести предоплату
                                </div>
                                <div className={styles.buttonWhite}>
                                    записаться на звонок
                                </div>
                            </td>
                            <td>
                                Сотрудничество
                                и результат за 1 день
                                <p className={styles.price}> 8.000р</p>
                                <div className={styles.buttonGreen}>
                                    внести предоплату
                                </div>
                                <div className={styles.buttonWhite}>
                                    записаться на звонок
                                </div>
                            </td>
                            <td>
                                Сотрудничество
                                от 7 дней до 3 недель
                                <p className={styles.price}> от 11.000р</p>
                                <div className={styles.buttonGreen}>
                                    внести предоплату
                                </div>
                                <div className={styles.buttonWhite}>
                                    записаться на звонок
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PersonalStylish;