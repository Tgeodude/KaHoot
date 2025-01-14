import React from "react";
import style from "./answer-bar.module.css";

const AnswerBar = ({inputIndex, correct, onChange, inputChange}) => {
    
    const answerStyles = ["bg-red","bg-blue","bg-green","bg-yellow"];
    console.log(inputIndex);
    return  (
        <li className={style["creator-field-list__item"]}>
            <input onChange={(e) => {inputChange(inputIndex, e.target.value)}} className={`${style["creator-field-list__input"]} ${style[answerStyles[inputIndex]]}`} type="text" id="answer" name="answer"/>
            <button onClick={() => {onChange(inputIndex)}} type="button" className={style["creator-field-list__checkbox"]}>
                <span className={style["creator-field-list__icon selected"]}>{correct ? '✓': '×'}</span>
            </button>
        </li>
    )
}

export default AnswerBar;