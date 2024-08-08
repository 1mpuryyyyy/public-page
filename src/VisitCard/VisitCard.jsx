import {useParams} from 'react-router-dom';
import styles from './VisitCard.module.css'
import ShareButton from "./ShareButton.jsx";
import axios from 'axios';
import {useEffect, useState} from "react";

export default function VisitCard() {
    const [data, setData] = useState({})
    const d = 0;
    const {id} = useParams();
    useEffect(() => {
        axios.get(`https://summary.prok0l.ru/api/summary/?_id=${id}`, {},)
            .then(res => {
                setData(res.data)
            })
    }, []);

    return (
        <section className={styles.VisitCard}>
            <div>
                {data ? (
                    <div>
                        <h2>{data.name}</h2>
                        <p>Телеграм: {data.tg}</p>
                        <p>GitHub: {data.github}</p>
                    </div>
                ) : (
                    <p>Пользователь не найден.</p>
                )}
            </div>
            <button className={styles.ShareButton} onClick={ShareButton}>Скопировать ссылку</button>
        </section>
    );
}