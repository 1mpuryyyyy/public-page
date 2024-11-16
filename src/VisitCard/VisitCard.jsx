import {useNavigate, useParams} from 'react-router-dom';
import styles from './VisitCard.module.css'
import ShareButton from "./ShareButton.jsx";
import axios from 'axios';
import {useEffect, useState} from "react";

export default function VisitCard() {
    const [data, setData] = useState({})
    const {uuid} = useParams();
    console.log(uuid)
    useEffect(() => {
        axios.get(`https://summary.prok0l.ru/api/summary/?_id=${uuid}`, {},)
            .then(res => {
                setData(res.data)
            })
    }, []);

    return (
        <section className={styles.VisitCard}>
            <div>
                {data ? (
                    <div className={styles.buttons}>
                        <h2>{data.name}</h2>
                        <a href={`/${data.tg}`}>Телеграм</a>
                        <a href={`/${data.github}`}>GitHub</a>
                        <a>Портфолио</a>
                    </div>
                ) : (
                    <p>Пользователь не найден.</p>
                )}
            </div>
            <button className={styles.ShareButton} onClick={ShareButton}>Поделиться</button>
        </section>
    );
}