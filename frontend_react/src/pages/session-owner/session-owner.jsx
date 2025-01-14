import React, { useState, useRef } from "react";
import { useNavigate} from "react-router-dom";
import style from "./session-owner.module.css";
import Header from "../../components/header/header";
import AnswerBar from "../../components/answer-bar/answer-bar";
import QuestionBar from "../../components/question-bar/question-bar";

const SessionOwner = () => {

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    }

    const handleStartClick = () => {
        navigate('/sharing');
    }

    const handleAddAnswer = () => {
        if(answerList.length < 4){
            let newanswerList = [...answerList];
            newanswerList.push({id : answerList.length, correct: false, text: ''});
            setAnswerList(newanswerList);
        }
    }

    const handleDeleteAnswer = () => {
        if(answerList.length > 2){
            const newAnswerList = [...answerList];
            newAnswerList.pop()
            setAnswerList(newAnswerList);
        }
    }

    const handleCorrectAnswer = (id) => {
        console.log(answerList);
        let newanswerList = [...answerList];
        let finalList = newanswerList.map(item => ({
            ...item,
            correct: false
        }))
        finalList[id] = ({id : id, correct: true, text: answerList[id].text});
        setAnswerList(finalList);
    }

    const [answerList, setAnswerList] = useState([{id : 0, correct : true, text: ''}, {id : 1, correct : false, text: ''}]);
    const qusetionRef = useRef();
    const [questionList, setQuestionList] = useState([]);

    const inputChange = (id, value) => {
        console.log(answerList);
        console.log(questionList);
        const newAnswerList = [...answerList];
        newAnswerList[id].text = value;
        setAnswerList(newAnswerList);
    }

    const handleAddQuestion = () => {
        const newQuestionList = [...questionList];
        const newQuestion = {id: questionList.length, text: qusetionRef.current.value, answers: answerList};
        newQuestionList.push(newQuestion);
        setQuestionList(newQuestionList);
        qusetionRef.current.value = '';
        const form = document.querySelector("#formQuestionAndAnswers");
        form.reset();
        setAnswerList([{id : 0, correct : true, text: ''}, {id : 1, correct : false, text: ''}]);
    }

    const removeQuestion = (questionId) => {
        const newQuestionList = questionList.filter((item) => {return(item.id !== questionId)});
        for(let i =0; i < newQuestionList.length; i++){
            newQuestionList[i].id = i;
        }
        setQuestionList(newQuestionList);

    }

    return  (
        <div className={style["container"]}>
            <Header/>
            <form id="formQuestionAndAnswers" className={style["form-creator"]}>
                <div className={style["creator-field"]}>
                    <label className={style["creator-field__label"]} htmlFor="question">Введите вопрос</label>
                    <input ref={qusetionRef} className={style["creator-field__input"]} type="text" id="question" name="question"/>
                </div>
                <div className={style["creator-field"]}>
                    <label className={style["creator-field__label"]}>Введите<br/>ответы</label>
                    <ul className={style["creator-field-list"]}>
                        {answerList.map((question) => {return (<AnswerBar inputIndex={question.id} correct={question.correct} onChange={handleCorrectAnswer} inputChange={inputChange}/>)})}
                    </ul>
                    <div className={style["buttons-session-list"]}>
                        <button onClick={handleAddAnswer} type="button" className={style["add-answer-btn"]}>
                            <div className={style["add-answer-btn__border"]}><span className={style["add-answer-btn__icon"]}>+</span></div>
                            <span>Добавить ответ</span>
                        </button>
                        <button onClick={handleDeleteAnswer} type="button" className={style["add-answer-btn"]}>
                            <div className={style["add-answer-btn__border"]}><span className={style["add-answer-btn__icon"]}>×</span></div>
                            <span>Убрать ответ</span>
                        </button>
                        <button onClick={handleAddQuestion} type="button" className={style["add-answer-btn"]}>
                            <div className={style["add-answer-btn__border"]}><span className={style["add-answer-btn__icon"]}>✓</span></div>
                            <span>Добавить вопрос</span>
                        </button>
                    </div>
                    </div>
                    <div className={style["creator-field"]}>
                        <label className={style["creator-field__label"]}>Вопросы</label>
                        <div className={style["creator-field-questions"]}>
                            <ul className={style["creator-field-questions-list"]}>
                                {questionList.map((question) => {return (<QuestionBar questionText={question.text} onChange={removeQuestion} id={question.id}/>)})}
                            </ul>
                    </div>
                </div>
            </form>
            <footer className={style["quiz-footer"]}>
                <button form="formQuestionAndAnswers" type="submit" className={`${style["button"]} ${style["rainbow-btn"]}`} onClick={handleStartClick}>Начать</button>
                <button className={style["button"]} onClick={handleBackClick}>Назад</button>
            </footer>
        </div>
    )
}

export default SessionOwner;