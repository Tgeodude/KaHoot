import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./play-session-player.module.css";
import Header from "../../components/header/header";

const PlaySessionPlayer = () => {

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    }

    return  (
        <div className={style["container"]}>
            <Header/>
            <div className={style["timer"]}>
                <div className={style["progress"]}>
                <div className={style["progress-bar"]}></div>
                </div>
            </div>
            <section className={style["quiz"]}>
                <h2 className={style["question"]}><span className={style["text-overflow"]}>Здесь должен быть вопрос</span></h2>
                <div className={style["answer-list"]}>
                <div className={`${style["answer-list__item"]} ${style["bg-red"]} ${style["selected"]}`}>
                    <div className={style["answer-list__text"]}><span className={style["text-overflow"]}>Ответ #1. Это очень очень длинный текст</span></div>
                    <span className={style["answer-list__checkbox"]}>
                    <span className={style["answer-list__icon"]}>✓</span>
                    </span>
                </div>
                <div className={`${style["answer-list__item"]} ${style["bg-blue"]}`}>
                    <div className={style["answer-list__text"]}><span className={style["text-overflow"]}>Ответ #2</span></div>
                    <span className={style["answer-list__checkbox"]}>
                    <span className={style["answer-list__icon"]}>×</span>
                    </span>
                </div>
                <div className={`${style["answer-list__item"]} ${style["bg-yellow"]}`}>
                    <div className={style["answer-list__text"]}><span className={style["text-overflow"]}>Ответ #3</span></div>
                    <span className={style["answer-list__text"]}>
                    <span className={style["answer-list__icon"]}>×</span>
                    </span>
                </div>
                <div className={`${style["answer-list__item"]} ${style["bg-green"]}`}>
                    <div className={style["answer-list__text"]}><span className={style["text-overflow"]}>Ответ #4</span></div>
                    <span className={style["answer-list__checkbox"]}>
                    <span className={style["answer-list__icon"]}>×</span>
                    </span>
                </div>
                </div>
            </section>
            <button className={style["button"]} onClick={handleBackClick}>Выйти</button>
        </div>
    )
}

export default PlaySessionPlayer;