import {useState} from "react";
import styles from './GenerateVisitCard.module.css';
import {useNavigate} from "react-router-dom";
import axios from 'axios';

export default function GenerateVisitCard() {
    const [formData, setFormData] = useState({
        tg: '',
        name: '',
        github: ''
    });
    const navigate = useNavigate();

    function sendData(e) {
        e.preventDefault();
        // const uniqueId = Date.now();
        // localStorage.setItem(uniqueId, JSON.stringify(formData)); // Исправлено на setItem
        axios.post('https://summary.prok0l.ru/api/summary/', formData, {
            "Content-Type": "application/json"
        }).then(res => {
            navigate(`/public-page/user/${res.data._id}`);
        })
    }

    const onChange = e => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    return (
        <>
            <form onSubmit={sendData} className={styles.form}>
                <h2> Заполните данные о себе</h2>
                <div className={styles.inputs}>
                    <input
                        type='text'
                        name='name'
                        placeholder={"Фио"}
                        value={formData.name}
                        onChange={onChange}
                    />
                    <input
                        type='text'
                        name='tg'
                        placeholder={"Ссылка на тг"}
                        value={formData.tg}
                        onChange={onChange}
                    />
                    <input
                        type='text'
                        name='github'
                        placeholder={"Гитхаб"}
                        value={formData.github}
                        onChange={onChange}
                    />
                </div>
                <button className={styles.create} type={"submit"}>Создать</button>
            </form>
        </>
    );
}
