import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./waiting-room.module.css";
import Header from "../../components/header/header";

const WaitingRoom = () => {

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/session-player');
    }

    const username = localStorage.getItem('username');
    const userAvatarId = localStorage.getItem("userAvatarId");
    console.log(username, userAvatarId);
    return  (
        <div className={style["container"]}>
            <Header/>
            <section className={style["players-section"]}>
                <h2 className={style["players-wait-rule"]}>Ожида<br/>йте</h2>
                <li className={style["player-list__item"]}>
                    <div className={`${style["player-list__avatar"]} ${style["border-blue"]}`}>
                        <img className={style["player-list__image"]} src={`/player avatars/avatar-${userAvatarId}.png`} alt="Player Avatar"/>
                    </div>
                    <h4 className={style["player-list__nickname"]}>{username}</h4>
                </li>
            </section>
            <button className={style["button"]} onClick={handleBackClick}>Выйти</button>
        </div>
    )
}

export default WaitingRoom;