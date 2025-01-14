import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./play-session-owner.module.css";
import Header from "../../components/header/header";

const PlaySessionOwner = () => {

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    }

    return  (
        <div className={style["container"]}>
            <Header/>
            <div className={style["bar-chart"]}>
                <span className={`${style["bar-chart__item"]} ${style["bg-red"]}`} data-value="4"></span>
                <span className={`${style["bar-chart__item"]} ${style["bg-blue"]}`} data-value="0"></span>
                <span className={`${style["bar-chart__item"]} ${style["bg-yellow"]}`} data-value="2"></span>
                <span className={`${style["bar-chart__item"]} ${style["bg-green"]}`} data-value="3"></span>
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
            <footer className={style["quiz-footer"]}>
                <button className={`${style["button"]} ${style["rainbow-btn"]}`}>Далее</button>
                <button className={style["button"]} onClick={handleBackClick}>Выйти</button>
            </footer>
        </div>
    )
}

export default PlaySessionOwner;