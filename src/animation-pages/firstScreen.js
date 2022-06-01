import React from 'react';
import styles from './firstScreen.module.css';

function FirstScreen({articles = ['Привет!', "Я Настя", "твой", "будующий", "стилист🌟"], timeLine = 700, children}) {
    const [index, setIndex] = React.useState(0);
    const [last, setLast] = React.useState(false);


    React.useEffect(() => {
       if (index < articles.length) {
           setTimeout(() => setIndex(index + 1), timeLine);
       } else {
           setLast(true);
       }
    },[index, setIndex])

    return (
        <div className={styles.container}>
            <div className={styles.background}></div>
            {last
                ? (<div className={styles.box}></div>)
                : (
                    <div className={styles.textContainer}>
                        <p className={styles.text} key={index}>{articles[index]}</p>
                    </div>
                )}
            {children}
        </div>
    )
}

export default FirstScreen;