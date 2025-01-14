import React from "react";
import style from "./user-logo.module.css";

const UserLogo = () => {

    return  (
        <li className={style["player-list__item"]}>
            <div className={`${style["player-list__avatar"]} ${style["border-red"]}`}>
                <img className={style["player-list__image"]} src="./player avatars/avatar-1.png" alt="Player Avatar"/>
            </div>
            <h4 className={style["player-list__nickname"]}>Игрок 1</h4>
        </li>
    )
}

export default UserLogo;