import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./result-owner.module.css";
import Header from "../../components/header/header";

const ResultOwner = () => {

    const navigate = useNavigate();

    const handleRetryClick = () => {
        navigate('/sharing');
    }
    
    const handQuitClick = () => {
        navigate('/');
    }

    return  (
        <body className={style["container"]}>
        <Header/>
        <main className={style["container"]}>
          <section className={style["leaders"]}>
            <ul className={style["leader-list"]}>
              <li className={style["leader-list__item"]}>
                <div className={`${style["leader-list__place"]} ${style["first-place"]}`}>1</div>
                <p className={`${style["leader-list__text"]} ${style["leader-list__name"]}`}>Игрок</p>
                <p className={`${style["leader-list__text"]} ${style["leader-list__score"]}`}>999</p>
              </li>
              <li className={style["leader-list__item"]}>
                <div className={`${style["leader-list__place"]} ${style["second-place"]}`}>2</div>
                <p className={`${style["leader-list__text"]} ${style["leader-list__name"]}`}>Игрок</p>
                <p className={`${style["leader-list__text"]} ${style["leader-list__score"]}`}>999</p>
              </li>
              <li className={style["leader-list__item"]}>
                <div className={`${style["leader-list__place"]} ${style["third-place"]}`}>3</div>
                <p className={`${style["leader-list__text"]} ${style["leader-list__name"]}`}>Длинный никнейм</p>
                <p className={`${style["leader-list__text"]} ${style["leader-list__score"]}`}>999</p>
              </li>
              <li className={style["leader-list__item"]}>
                <svg width="362" height="47" viewBox="0 0 362 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 18.8666C165.606 -45.7447 213.606 102.044 361 18.8666" stroke="black" stroke-width="3" stroke-dasharray="45 45"/>
                </svg>
              </li>
              <li className={style["leader-list__item"]}>
                <div className={style["leader-list__place"]}>6</div>
                <p className={`${style["leader-list__text"]} ${style["leader-list__name"]}`}>Игрок</p>
                <p className={`${style["leader-list__text"]} ${style["leader-list__score"]}`}>999</p>
              </li>
            </ul>
          </section>
          <footer className={style["quiz-footer"]}>
            <button className={`${style["button"]} ${style["rainbow-btn"]}`} onClick={handleRetryClick}>Повторить</button>
            <button className={style["button"]} onClick={handQuitClick}>Выйти</button>
          </footer>
        </main>
      </body>
    )
}

export default ResultOwner;