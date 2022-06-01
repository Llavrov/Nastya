import React, {useEffect} from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './styles.module.css';
import photoWork from '../../assets/howWork.jpg';


function WorkProcess() {
    const scrollObject = {
        current: 0,
        object: 0,
        easy: 0.1,
        height: 2 * window.innerHeight,
        position: 'relative',
        scale: 0.4,
        step: 0,
    }

    function scroll(container, image, title, button) {
        scrollObject.current = window.scrollY;
        scrollObject.object = container.offsetTop;
        scrollObject.step = (1 - scrollObject.scale) / scrollObject.height;


        if (scrollObject.current >= scrollObject.object && scrollObject.current <= scrollObject.object + scrollObject.height) {
            scrollObject.position = 'fixed';

            image.style.position = scrollObject.position;
            image.style.top = 0;
            image.style.zIndex = 20;
            image.style.transform = `scale(${(scrollObject.current - scrollObject.object) * scrollObject.step + 0.4})`;

            title.style.position = scrollObject.position;
            title.style.top = 100+"px";
            title.style.zIndex = 21;

            button.style.position = scrollObject.position;
            button.style.top = '80vh';
            button.style.zIndex = 21;
        } else {
            scrollObject.position = 'absolute';
            image.style.position = scrollObject.position;
            title.style.position = scrollObject.position;
            button.style.position = scrollObject.position;

            if (scrollObject.current >= scrollObject.object) {
                image.style.transform = `scale(1)`;
                image.style.top = scrollObject.height+'px';

                title.style.top = scrollObject.height+100+'px';
                button.style.top = `calc(${scrollObject.height}px + 80vh)`;
            } else {
                image.style.transform = `scale(0.4)`;
            }
        }

    }

    useEffect(() => {
        const workProcess = document.getElementById('work-process');
        const workProcessImage = document.getElementById('work-process-image');
        const title = document.getElementById('title')
        const button = document.getElementById('button')

        document.addEventListener('scroll', () => {
            requestAnimationFrame(() => scroll(workProcess, workProcessImage, title, button));
        })

        // return document.removeEventListener(listener);
    }, [window.scrollY])

    return (
        <div id={"work-process"} className={styles.container}>
            <p id={"title"} className={styles.title}>Как проходит<br/>съемка?</p>
            <img id={"work-process-image"} className={styles.image} src={photoWork} alt="how do I work?"/>
            <div id={"button"} className={styles.button}>Галлерея</div>
        </div>
    )
}

export default WorkProcess;