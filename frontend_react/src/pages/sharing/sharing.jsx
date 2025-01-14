import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./sharing.module.css";
import Header from "../../components/header/header";
import UserLogo from "../../components/user-logo/user-logo";

const Sharing = () => {

    const navigate = useNavigate();

    const handleStartClick = () => {
        navigate('/play-session-owner');
    }

    const userStyles = ["border-red", "border-blue", "border-yellow", "border-green"];

    return  (
        <div className={style["container"]}>
            <Header/>
            <h2 className={style["room-number"]}>Комната<br/>№12</h2>
            <section className={style["players-section"]}>
                <h3 className={style["players-wait-rule"]}>Ожида<br/>йте<br/>игроков</h3>
                <ul className={style["player-list"]}>
                    <UserLogo/>
                    <UserLogo/>
                    <UserLogo/>
                    <UserLogo/>
                    <UserLogo/>
                    <UserLogo/>
                </ul>
            </section>
            <button className={`${style["button"]} ${style["rainbow-btn"]}`} onClick={handleStartClick}>Начать</button>
        </div>
    )
}

export default Sharing;