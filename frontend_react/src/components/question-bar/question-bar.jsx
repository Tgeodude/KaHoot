import React from "react";
import style from "./question-bar.module.css";

const QuestionBar = ({questionText, onChange, id}) => {
    
    return  (
        <li className={style["creator-field-questions-list__item"]}>
            <span className={style["creator-field-questions-list__text"]}>{questionText}</span>
            <button onClick={(e) => {onChange(id)}} type="button" className={style["remove-question-btn"]}>
                <div className={style["remove-question-btn__border"]}><span className={style["remove-question-btn__icon"]}>-</span></div>
            </button>
        </li>
    )
}

export default QuestionBar;