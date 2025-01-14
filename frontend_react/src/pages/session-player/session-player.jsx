import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import style from "./session-player.module.css";
import Header from "../../components/header/header";

const SessionPlayer = () => {

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    }

    const username = useRef();

    const handleStartClick = () => {
        localStorage.setItem('username', username.current.value);
        localStorage.setItem('userAvatarId', Math.floor(Math.random() * 8) + 1);
        navigate('/waiting-room');
    }
    return  (
    <div className={style["container"]}>
        <Header/>
        <form id="formNameAndCode" className={style["form-player"]}>
            <div className={style["player-field"]}>
                <label className={style["player-field__label"]} for="nickname">Введите<br/>никнейм</label>
                <input ref={username} className={style["player-field__input"]} type="text" id="nickname" name="nickname"/>
            </div>
            <div className={style["player-field"]}>
                <label className={style["player-field__label"]} for="code">Введите<br/>код</label>
                <input className={style["player-field__input"]} type="text" id="code" name="code"/>
            </div>
        </form>
        <footer className={style["quiz-footer"]}>
            <button form="formNameAndCode" type="submit" className={`${style["button"]} ${style["rainbow-btn"]}`} onClick={handleStartClick}>Войти</button>
            <button className={style["button"]} onClick={handleBackClick}>Назад</button>
        </footer>
    </div>
    )
}

export default SessionPlayer;