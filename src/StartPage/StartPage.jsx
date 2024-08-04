import styles from './StartPage.module.css';
import GenerateVisitCard from "../GenerateVisitCard/GenerateVisitCard.jsx";
import {useState} from "react";

export default function StartPage() {
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            {showForm ? <GenerateVisitCard/> :
                <section className={styles.startpage}>
                    <h1> Генератор сайтов визиток</h1>
                    <button onClick={() => setShowForm(true)}>Создать</button>
                </section>
            }
        </>
    )
}